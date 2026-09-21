import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          background: "#33482a",
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.14) 3px, transparent 3px)",
          backgroundSize: "44px 44px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "#e6a527",
            fontSize: 24,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 4,
            marginBottom: 28,
          }}
        >
          Psicóloga Clínica · Monterrey
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 72,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          <span>No cargues sola</span>
          <span>con todo lo que sientes.</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 30,
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          Dra. Sofía Ramírez
        </div>
      </div>
    ),
    { ...size },
  );
}
