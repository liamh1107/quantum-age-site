import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/brand/quantum-age-logo.svg"));
  const logoSrc = `data:image/svg+xml;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f5f0",
          padding: "72px 80px",
          borderTop: "16px solid #70456e",
        }}
      >
        <img src={logoSrc} width={432} height={110} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, lineHeight: 1.02, color: "#231a25", letterSpacing: -2, maxWidth: 900 }}>
            {site.tagline}
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#5d5761", maxWidth: 900 }}>{site.descriptor}</div>
        </div>
        <div style={{ display: "flex", height: 8, width: 160, background: "#8dc63f" }} />
      </div>
    ),
    size
  );
}
