import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#681f33",
        borderRadius: 16,
        color: "#fffaf1",
        display: "flex",
        fontFamily: "Georgia, serif",
        fontSize: 44,
        height: "100%",
        justifyContent: "center",
        width: "100%",
      }}
    >
      J
    </div>,
    size,
  );
}
