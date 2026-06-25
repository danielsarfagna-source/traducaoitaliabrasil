import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const pageName = decodeURIComponent(slug)
    .replace(/\.png$/, "")
    .replaceAll("-", " ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #020912 0%, #0b2032 70%, #6f4718 140%)",
          color: "#f8f5ee",
          padding: "72px",
          fontFamily: "serif",
        }}
      >
        <div style={{ color: "#d9aa52", fontSize: 28, letterSpacing: 5, textTransform: "uppercase" }}>
          TraducaoBrasilItalia
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 62, lineHeight: 1.08, textTransform: "capitalize", maxWidth: 1040 }}>
            {pageName}
          </div>
          <div style={{ fontSize: 30, color: "rgba(248,245,238,.78)" }}>
            Tradução juramentada português ↔ italiano
          </div>
        </div>
        <div style={{ width: 180, height: 5, background: "#d9aa52" }} />
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
