import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 12,
          position: "relative",
        }}
      >
        <span
          style={{
            fontSize: 28,
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
            top: 8,
            right: 8,
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#e6a527",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
