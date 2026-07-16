import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z
    .string()
    .trim()
    .email()
    .max(254)
    .optional()
    .or(z.literal("").transform(() => undefined)),
  subject: z.string().trim().min(3).max(120),
  message: z.string().trim().min(10).max(2000),
  website: z.string().max(0).optional(),
});

let resendClient: Resend | null = null;

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  resendClient ??= new Resend(apiKey);

  return resendClient;
}

function getEmailSettings() {
  const recipient =
    process.env.JULIETTA_CONTACT_EMAIL ?? process.env.ANNA_CONTACT_EMAIL;
  const from =
    process.env.RESEND_FROM_EMAIL ?? "Julietta <onboarding@resend.dev>";

  if (!recipient) {
    throw new Error("JULIETTA_CONTACT_EMAIL is not configured.");
  }

  return {
    from,
    to: recipient
      .split(",")
      .map((email) => email.trim())
      .filter(Boolean),
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { message: "Não foi possível ler a mensagem enviada." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success || parsed.data.website) {
    return Response.json(
      { message: "Revise os campos e tente novamente." },
      { status: 400 },
    );
  }

  const { name, email, subject, message } = parsed.data;

  try {
    const resend = getResend();
    const emailSettings = getEmailSettings();
    const safeName = escapeHtml(name);
    const safeSubject = escapeHtml(subject);
    const emailSubject = subject.replaceAll(/[\r\n]+/g, " ");
    const safeEmail = email ? escapeHtml(email) : "Não informado";
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const { error } = await resend.emails.send({
      from: emailSettings.from,
      to: emailSettings.to,
      replyTo: email || undefined,
      subject: `Mensagem para Julietta: ${emailSubject}`,
      html: `
        <div style="font-family: Georgia, serif; color: #27272a; line-height: 1.7;">
          <p style="font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; color: #71717a;">Nova mensagem do site</p>
          <h1 style="font-size: 28px; font-weight: 400; margin: 0 0 24px;">${safeSubject}</h1>
          <p><strong>Nome:</strong> ${safeName}</p>
          <p><strong>E-mail:</strong> ${safeEmail}</p>
          <hr style="border: 0; border-top: 1px solid #7f263d; margin: 24px 0;" />
          <p>${safeMessage}</p>
        </div>
      `,
      text: [
        "Nova mensagem do site",
        `Nome: ${name}`,
        `E-mail: ${email ?? "Não informado"}`,
        `Assunto: ${subject}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      return Response.json(
        { message: "Nao foi possivel enviar a mensagem agora." },
        { status: 502 },
      );
    }

    return Response.json({ message: "Mensagem enviada." }, { status: 200 });
  } catch {
    return Response.json(
      { message: "Nao foi possivel enviar a mensagem agora." },
      { status: 500 },
    );
  }
}
