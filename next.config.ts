import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // TAREFA 1 — Canonicalização de host: 301 permanente do apex para www,
  // preservando path e query. Host canônico oficial: www.traducaobrasilitalia.it
  // SUGESTÃO: confirmar no painel da Vercel que o domínio primário é o www;
  // se a Vercel estiver com o apex como primário, inverter este redirect.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "traducaobrasilitalia.it" }],
        destination: "https://www.traducaobrasilitalia.it/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
