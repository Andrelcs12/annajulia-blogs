import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = "Julietta - Poemas, textos e reflexoes";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const runtime = "nodejs";

export default async function OpenGraphImage() {
  const imageData = await readFile(
    join(process.cwd(), "public/images/julietta-editorial-placeholder.png"),
    "base64",
  );
  const imageSrc = `data:image/png;base64,${imageData}`;

  return new ImageResponse(
    <div
      style={{
        background: "#fbfaf7",
        color: "#302922",
        display: "flex",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 56px 72px 84px",
          width: "62%",
        }}
      >
        <div
          style={{
            color: "#8e5252",
            display: "flex",
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Cartas, poemas e sentimentos
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "serif",
            fontSize: 106,
            lineHeight: 1,
            marginTop: 28,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            background: "#b58070",
            display: "flex",
            height: 2,
            marginTop: 34,
            width: 88,
          }}
        />
      </div>
      {/* biome-ignore lint/performance/noImgElement: ImageResponse renders local assets with an img element. */}
      <img
        alt=""
        height={630}
        src={imageSrc}
        style={{ height: "100%", objectFit: "cover", width: "38%" }}
        width={456}
      />
    </div>,
    size,
  );
}
