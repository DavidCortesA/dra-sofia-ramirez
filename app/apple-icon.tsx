import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#33482a",
          position: "relative",
        }}
      >
        <span
          style={{
            fontSize: 100,
            fontWeight: 800,
            color: "#ffffff",
            fontFamily: "sans-serif",
          }}
        >
          S
        </span>
        <div
          style={{
            position: "absolute",
            top: 30,
            right: 30,
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: "#e6a527",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
