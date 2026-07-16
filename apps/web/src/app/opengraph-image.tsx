import { ImageResponse } from "next/og";

export const alt =
  "Julietta — cartas, poemas e sentimentos que nunca foram enviados";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background:
          "radial-gradient(circle at 16% 20%, #d8a2ab 0, transparent 28%), linear-gradient(135deg, #fffaf1 0%, #f1dedb 100%)",
        color: "#351d21",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        padding: "70px 84px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          border: "2px solid rgba(104, 31, 51, 0.22)",
          borderRadius: 48,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "54px 64px",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#681f33",
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.08em",
          }}
        >
          @cartasporjulietta
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Georgia, serif",
              fontSize: 118,
              letterSpacing: "-0.06em",
              lineHeight: 1,
            }}
          >
            Julietta
          </div>
          <div
            style={{
              color: "#675256",
              display: "flex",
              fontFamily: "Georgia, serif",
              fontSize: 36,
              marginTop: 24,
            }}
          >
            Todas as cartas que eu não te enviei.
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
