# Tradução Juramentada Português → Italiano

Site em Next.js, TypeScript, Tailwind e App Router para tradução juramentada português → italiano, tradução italiano → português, apostilamento e orientação documental.

## Desenvolvimento

```bash
npm run dev
```

## Validação

```bash
npm run lint
npm run build
```

## Variáveis de ambiente

Crie `.env.local` no desenvolvimento e configure a mesma variável no host de produção:

```bash
NEXT_PUBLIC_SITE_URL=https://seudominio.com
```

Essa URL é usada em metadata, sitemap e robots.

## Publicação

Antes de publicar, preencher os dados reais nas páginas legais:

- `[NOME DO TITULAR]`
- `[E-MAIL DE CONTATO]`

O WhatsApp já está configurado como `+39 392 460 5784`.

Rotas principais:

- `/`
- `/quem-somos`
- `/servicos`
- `/traducao-juramentada-italiano`
- `/apostilar-documento-italiano-na-italia`
- `/faq`
- `/politica-de-privacidade`
- `/cookie-policy`
- `/termos-de-uso`
- `/sitemap.xml`
- `/robots.txt`
