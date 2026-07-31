import { ImageResponse } from "next/og";

export const alt = "Shahrukh Shah — Director of Photography";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        color: "#111111",
      }}
    >
      <div style={{ fontFamily: "Georgia, serif", fontSize: 88, fontWeight: 400, letterSpacing: "0.01em" }}>
        Shahrukh Shah
      </div>
      <div
        style={{
          marginTop: 28,
          fontFamily: "Georgia, sans-serif",
          fontSize: 22,
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: "#555555",
        }}
      >
        Director of Photography
      </div>
    </div>,
    { ...size },
  );
}
