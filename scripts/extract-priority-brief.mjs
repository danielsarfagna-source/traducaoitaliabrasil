import fs from "node:fs";
import path from "node:path";

const briefPath = "/Users/danielsardagna/Downloads/briefing-seo-traducaobrasilitalia (1).md";
const outputPath = path.resolve("app/lib/priority-brief-content.json");
const source = fs.readFileSync(briefPath, "utf8");

const configs = [
  { key: "/traducao-juramentada-para-cidadania-italiana", section: "2.1", next: "2.2" },
  { key: "/traducao-juramentada-italiano", section: "2.2", next: "2.3" },
  { key: "/traducao-juramentada-certidoes", section: "2.3", next: "2.4" },
  { key: "/traducao-juramentada-roma", section: "2.4", next: "2.5" },
];

function cleanInline(text) {
  return text
    .replace(/^>\s?/, "")
    .replace(/^\d+\.\s+/, "")
    .replace(/em geral € 16 a cada 4 páginas[^.)]*/gi, "conforme a tabela administrativa vigente")
    .replace(/€\s?16/gi, "o valor previsto na tabela vigente")
    .replace("é mais barata em geral", "é organizada diretamente no país de emissão")
    .replace("Mais lenta porque", "O prazo depende do agendamento porque")
    .replace("e mais cara pelas custas e marca da bollo", "e inclui custas administrativas e marca da bollo")
    .replace("é aceita sem ressalva por todos os Comunes e Tribunali", "é formalizada no sistema italiano para apresentação a Comunes e Tribunali")
    .trim();
}

function parsePage(config) {
  const startMarker = `### ${config.section}.3 Copy completo`;
  const alternateStart = `### ${config.section}.3 Copy completo, seção por seção`;
  const pageStart = source.indexOf(startMarker) >= 0 ? source.indexOf(startMarker) : source.indexOf(alternateStart);
  const nextPage = source.indexOf(`## §${config.next} —`, pageStart);
  const block = source.slice(pageStart, nextPage);
  const lines = block.split("\n");
  const data = { intro: [], sections: [], faqs: [], relatedLinks: [] };
  let section = null;
  let subsection = null;
  let mode = "";
  let pendingQuestion = "";

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].trim();
    if (!line || line.startsWith("### ")) continue;

    if (line.startsWith("#### Intro")) {
      mode = "intro";
      section = null;
      subsection = null;
      continue;
    }

    if (line.startsWith("#### H2:")) {
      const title = line.replace("#### H2:", "").trim();
      section = { title, body: [], subsections: [] };
      data.sections.push(section);
      subsection = null;
      mode = title.toLowerCase().includes("perguntas frequentes")
        ? "faq"
        : title.toLowerCase().includes("material relacionado")
          ? "related"
          : "section";
      continue;
    }

    if (line.startsWith("##### H3:")) {
      const title = line.replace("##### H3:", "").trim();
      subsection = { title, body: [] };
      section?.subsections.push(subsection);
      mode = "section";
      continue;
    }

    if (line.startsWith("|") && section) {
      const tableLines = [];
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        tableLines.push(lines[index].trim());
        index += 1;
      }
      index -= 1;
      const parsed = tableLines
        .map((row) => row.split("|").slice(1, -1).map((cell) => cleanInline(cell)))
        .filter((row) => !row.every((cell) => /^-+$/.test(cell)));
      if (parsed.length > 1) section.table = { headers: parsed[0], rows: parsed.slice(1) };
      continue;
    }

    if (mode === "faq" && line.startsWith("**") && line.endsWith("**")) {
      pendingQuestion = line.slice(2, -2);
      continue;
    }

    if (mode === "faq" && pendingQuestion) {
      data.faqs.push({ question: pendingQuestion, answer: cleanInline(line) });
      pendingQuestion = "";
      continue;
    }

    if (mode === "related" && line.startsWith("- [")) {
      const match = line.match(/^- \[([^\]]+)\]\(([^)]+)\)/);
      if (match) data.relatedLinks.push({ title: match[1], href: match[2] });
      continue;
    }

    const paragraph = cleanInline(line);
    if (!paragraph || paragraph.startsWith("```")) continue;
    if (mode === "intro") data.intro.push(paragraph);
    else if (mode === "section" && section) {
      (subsection?.body ?? section.body).push(paragraph);
    }
  }

  data.sections = data.sections.filter(
    (item) =>
      !item.title.toLowerCase().includes("perguntas frequentes") &&
      !item.title.toLowerCase().includes("material relacionado"),
  );
  return data;
}

const result = Object.fromEntries(configs.map((config) => [config.key, parsePage(config)]));
fs.writeFileSync(outputPath, `${JSON.stringify(result, null, 2)}\n`);
