"use client";

import { SendIcon } from "lucide-react";
import { type FormEvent, useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormStatus =
  | { type: "idle"; message: "" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const initialStatus: FormStatus = { type: "idle", message: "" };

export function ContactForm() {
  const nameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const messageId = useId();
  const honeypotId = useId();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>(initialStatus);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(initialStatus);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setStatus({
          type: "error",
          message:
            "Não foi possível enviar agora. Revise os campos e tente novamente.",
        });
        return;
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Mensagem enviada. Obrigado por escrever para Julietta.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Não foi possível enviar agora. Tente novamente em instantes.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-2xl space-y-6"
      noValidate={false}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor={nameId}
            className="text-sm font-medium text-foreground"
          >
            Nome
          </label>
          <Input
            id={nameId}
            name="name"
            autoComplete="name"
            minLength={2}
            maxLength={80}
            required
            disabled={isSubmitting}
            placeholder="Seu nome"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor={emailId}
            className="text-sm font-medium text-foreground"
          >
            E-mail <span className="text-muted-foreground">(opcional)</span>
          </label>
          <Input
            id={emailId}
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            disabled={isSubmitting}
            placeholder="voce@email.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor={subjectId}
          className="text-sm font-medium text-foreground"
        >
          Assunto
        </label>
        <Input
          id={subjectId}
          name="subject"
          minLength={3}
          maxLength={120}
          required
          disabled={isSubmitting}
          placeholder="Sobre o que você gostaria de escrever?"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor={messageId}
          className="text-sm font-medium text-foreground"
        >
          Mensagem
        </label>
        <Textarea
          id={messageId}
          name="message"
          minLength={10}
          maxLength={2000}
          required
          disabled={isSubmitting}
          placeholder="Escreva sua mensagem com calma..."
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor={honeypotId}>Website</label>
        <Input
          id={honeypotId}
          name="website"
          tabIndex={-1}
          autoComplete="off"
          disabled={isSubmitting}
        />
      </div>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={isSubmitting}>
          <SendIcon className="size-4" strokeWidth={1.5} />
          {isSubmitting ? "Enviando..." : "Enviar mensagem"}
        </Button>
        <p className="text-sm leading-6 text-muted-foreground">
          Os dados enviados serão utilizados apenas para avaliar ou responder
          esta mensagem.
        </p>
      </div>

      <div aria-live="polite" className="min-h-6">
        {status.message ? (
          <p
            className={
              status.type === "success"
                ? "text-sm text-foreground"
                : "text-sm text-destructive"
            }
          >
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
