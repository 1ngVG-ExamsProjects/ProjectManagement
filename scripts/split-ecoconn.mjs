import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const sourcePath = path.join(root, 'EcoConn.md');
const docsRoot = path.join(root, 'docs');
const reportRoot = path.join(docsRoot, 'Report');
const screenshotsRoot = path.join(reportRoot, 'resources', 'screenshots');
const sourceLines = fs.readFileSync(sourcePath, 'utf8').split(/\r?\n/);
const imageDefIndex = sourceLines.findIndex((line) => /^\[image\d+\]: <data:image/.test(line));
const sourceEndLine = imageDefIndex === -1 ? sourceLines.length : imageDefIndex;
const imageAssets = new Map(
  sourceLines
    .map((line) => line.match(/^\[(image\d+)\]: <data:image\/([^;]+);base64,([^>]+)>$/))
    .filter(Boolean)
    .map(([, imageId, extension, base64]) => [
      imageId,
      {
        extension: extension === 'jpeg' ? 'jpg' : extension,
        base64,
      },
    ])
);

const sections = [
  ['Report/contesto/index.md', 135, 178],
  ['Report/contesto/ecoconn.md', 179, 305],
  ['Report/contesto/redribbon.md', 306, 319],
  ['Report/scoping/index.md', 320, 427],
  ['Report/scoping/schema-dei-meeting.md', 428, 511],
  ['Report/scoping/riepilogo-meeting-1.md', 512, 573],
  ['Report/scoping/riepilogo-meeting-1-5.md', 574, 666],
  ['Report/scoping/riepilogo-meeting-2.md', 667, 728],
  ['Report/scoping/riepilogo-meeting-2-5-1.md', 729, 763],
  ['Report/scoping/riepilogo-meeting-2-5-2.md', 764, 801],
  ['Report/scoping/riepilogo-meeting-2-5-3.md', 802, 867],
  ['Report/scoping/riepilogo-meeting-3.md', 868, 902],
  ['Report/scoping/appendici/smart-analysis.md', 903, 1066],
  ['Report/scoping/appendici/swot-analysis.md', 1067, 1092],
  ['Report/scoping/appendici/mockup.md', 1093, 1114],
  ['Report/scoping/appendici/rbs.md', 1115, 1206],
  ['Report/scoping/appendici/pos-1-0v.md', 1207, 1296],
  ['Report/scoping/appendici/pos-0-1v.md', 1297, 1330],
  ['Report/scoping/appendici/pos-0-1-5v.md', 1331, 1380],
  ['Report/scoping/appendici/pos-0-2v.md', 1381, 1469],
  ['Report/scoping/appendici/pos-0-2-5v.md', 1470, 1554],
  ['Report/planning/index.md', 1555, 1620],
  ['Report/planning/schema-delle-session.md', 1621, 1700],
  ['Report/planning/riepilogo-sessione-1.md', 1701, 1735],
  ['Report/planning/riepilogo-sessione-2.md', 1736, 1851],
  ['Report/planning/riepilogo-sessione-3.md', 1852, 1915],
  ['Report/planning/riepilogo-sessione-finale.md', 1916, 1924],
  ['Report/planning/appendici/moscow.md', 1925, 1950],
  ['Report/planning/appendici/pds.md', 1951, 2040],
  ['Report/planning/appendici/scheletro-wbs.md', 2041, 2092],
  ['Report/planning/appendici/scheletro-wbs-con-stime.md', 2093, 2116],
  ['Report/planning/appendici/wbs-parziale.md', 2117, 2187],
  ['Report/planning/appendici/estimating-task-duration.md', 2188, 2304],
  ['Report/planning/appendici/resource-breakdown-structure.md', 2305, 2308],
  ['Report/planning/appendici/pnd.md', 2309, 2316],
  ['Report/planning/appendici/cash-flow.md', 2317, 2334],
  ['Report/planning/appendici/project-proposal.md', 2335, 2476],
  ['Report/launching-execution/index.md', 2477, 2515],
  ['Report/launching-execution/recruiting-the-project-team.md', 2516, 2535],
  ['Report/launching-execution/raffinamento-della-schedula.md', 2536, 2539],
  ['Report/launching-execution/regole-operative.md', 2540, 2566],
  ['Report/launching-execution/processo-di-modifica-dello-scope.md', 2567, 2577],
  ['Report/launching-execution/communications-management-plan.md', 2578, 2583],
  ['Report/launching-execution/rasci-matrix.md', 2584, 2588],
  ['Report/launching-execution/riepilogo-kick-off-meeting.md', 2589, 2680],
  ['Report/launching-execution/kanban.md', 2681, 2684],
  ['Report/launching-execution/appendici/scope-change-request-form.md', 2685, 2688],
  ['Report/launching-execution/appendici/pis-template.md', 2689, 2744],
  ['Report/launching-execution/appendici/rasci-matrix-estesa.md', 2745, 2835],
  ['Report/launching-execution/appendici/visualizzazione-gestionale-kanban.md', 2836, 2841],
  ['Report/monitor-controlling/index.md', 2842, 2867],
  ['Report/monitor-controlling/issue-log.md', 2868, 2871],
  ['Report/monitor-controlling/kanban-board.md', 2872, 2891],
  ['Report/monitor-controlling/sistema-di-reporting.md', 2892, 2908],
  ['Report/monitor-controlling/meetings.md', 2909, 2914],
  ['Report/monitor-controlling/problem-escalation-strategy.md', 2915, 2921],
  ['Report/closing/index.md', 2922, 2977],
  ['Report/closing/approvazione-dei-deliverable.md', 2978, 2996],
  ['Report/closing/approvazione-finale.md', 2997, 3010],
  ['Report/closing/installazione-e-deployment.md', 3011, 3041],
  ['Report/closing/documentazione.md', 3042, 3060],
  ['Report/closing/audit-post-implementazione.md', 3061, 3075],
  ['Report/closing/final-project-report.md', 3076, 3104],
  ['Report/closing/appendici/documento-di-accettazione-deliverable.md', 3105, 3132],
  ['Report/closing/appendici/report-di-audit-post-implementazione.md', 3133, 3155],
  ['Report/closing/appendici/piano-di-transizione-operativa.md', 3156, sourceEndLine],
];

const staleFiles = [
  'Report/Conclusion.md',
  'Report/Design.md',
  'Report/DevOps.md',
  'Report/Implementation.md',
  'Report/Introduction.md',
  'Report/Requirements.md',
  'Report/Technologies.md',
];

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function getImageHref(targetRelativePath, imageId) {
  const imageAsset = imageAssets.get(imageId);
  if (!imageAsset) {
    return null;
  }

  const targetDir = path.posix.dirname(targetRelativePath.replace(/\\/g, '/'));
  const imagePath = `Report/resources/screenshots/${imageId}.${imageAsset.extension}`;
  return path.posix.relative(targetDir, imagePath);
}

function replaceImageRefs(text, targetRelativePath) {
  return text
    .replace(/^#+\s+\*\*!\[\]\[(image\d+)\]\*\*\s*$/gm, (_, imageId) => {
      const imageHref = getImageHref(targetRelativePath, imageId);
      return imageHref ? `![](${imageHref})` : '';
    })
    .replace(/!\[\]\[(image\d+)\]/g, (_, imageId) => {
      const imageHref = getImageHref(targetRelativePath, imageId);
      return imageHref ? `![](${imageHref})` : '';
    });
}

function cleanContent(text, targetRelativePath) {
  const lines = text.split('\n');
  const cleaned = [];
  let lastNonEmpty = '';

  for (const rawLine of lines) {
    const line = rawLine.replace(/\s+$/g, '');
    const normalizedLine = /^#+\s/.test(line)
      ? line.replace(/\s+\{#[^}]+\}\s*$/g, '')
      : line;
    if (/^\[image\d+\]: <data:image/.test(line)) {
      continue;
    }
    if (/^#\s*$/.test(normalizedLine) || /^#\s+---\s*$/.test(normalizedLine)) {
      continue;
    }
    if (
      lastNonEmpty &&
      /^#/.test(normalizedLine) &&
      normalizedLine.trim() === lastNonEmpty.trim()
    ) {
      continue;
    }
    cleaned.push(normalizedLine);
    if (normalizedLine.trim()) {
      lastNonEmpty = normalizedLine;
    }
  }

  return `${replaceImageRefs(cleaned.join('\n').trim(), targetRelativePath)}\n`;
}

function extractRange(startLine, endLine, targetRelativePath) {
  const safeEndLine = Math.min(endLine, sourceEndLine);
  const chunk = sourceLines.slice(startLine - 1, safeEndLine).join('\n');
  return cleanContent(chunk, targetRelativePath);
}

function writeFile(relativePath, content) {
  const targetPath = path.join(docsRoot, relativePath.replace(/^docs[\\/]/, ''));
  ensureDir(targetPath);
  fs.writeFileSync(targetPath, content, 'utf8');
}

function removeFile(relativePath) {
  const targetPath = path.join(docsRoot, relativePath.replace(/^docs[\\/]/, ''));
  if (fs.existsSync(targetPath)) {
    fs.unlinkSync(targetPath);
  }
}

function writeImageAssets() {
  fs.mkdirSync(screenshotsRoot, { recursive: true });
  for (const [imageId, imageAsset] of imageAssets.entries()) {
    fs.writeFileSync(
      path.join(screenshotsRoot, `${imageId}.${imageAsset.extension}`),
      Buffer.from(imageAsset.base64, 'base64')
    );
  }
}

writeImageAssets();

for (const [relativePath, start, end] of sections) {
  writeFile(relativePath, extractRange(start, end, relativePath));
}

for (const staleFile of staleFiles) {
  removeFile(staleFile);
}

writeFile(
  'index.md',
  `---
layout: home

hero:
  name: "EcoConn"
  text: "Project report strutturato in capitoli"
  tagline: "Refactor del documento EcoConn in una documentazione VitePress navigabile"
  actions:
    - theme: brand
      text: Apri il report
      link: /Report/
    - theme: alt
      text: Vai al contesto
      link: /Report/contesto/
---

`
);

writeFile(
  'Report/index.md',
  `# EcoConn Report

Il documento originale è stato suddiviso seguendo la struttura della tabella dei contenuti.

## Capitoli principali

- [Contesto](./contesto/)
- [Scoping](./scoping/)
- [Planning](./planning/)
- [Launching/Execution](./launching-execution/)
- [Monitor & Controlling](./monitor-controlling/)
- [Closing](./closing/)

## Note

- Le appendici sono state mantenute sotto il capitolo di riferimento.
- I riferimenti immagine embedded in base64 del file esportato sono stati esclusi dalle nuove pagine.
`
);

const configPath = path.join(docsRoot, '.vitepress', 'config.mts');
ensureDir(configPath);
fs.writeFileSync(
  configPath,
  `import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  base: '/Project-Management/',
  title: 'EcoConn',
  description: 'Project report suddiviso per capitoli e sottocapitoli',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Report', link: '/Report/' },
    ],

    sidebar: {
      '/Report/': [
        {
          text: 'Overview',
          items: [
            { text: 'Indice del report', link: '/Report/' },
          ],
        },
        {
          text: 'Contesto',
          items: [
            { text: 'Introduzione', link: '/Report/contesto/' },
            { text: 'EcoConn', link: '/Report/contesto/ecoconn' },
            { text: 'RedRibbon', link: '/Report/contesto/redribbon' },
          ],
        },
        {
          text: 'Scoping',
          items: [
            { text: 'Introduzione', link: '/Report/scoping/' },
            { text: 'Schema dei meeting', link: '/Report/scoping/schema-dei-meeting' },
            { text: 'Riepilogo meeting 1', link: '/Report/scoping/riepilogo-meeting-1' },
            { text: 'Riepilogo meeting 1.5', link: '/Report/scoping/riepilogo-meeting-1-5' },
            { text: 'Riepilogo meeting 2', link: '/Report/scoping/riepilogo-meeting-2' },
            { text: 'Riepilogo meeting 2.5.1', link: '/Report/scoping/riepilogo-meeting-2-5-1' },
            { text: 'Riepilogo meeting 2.5.2', link: '/Report/scoping/riepilogo-meeting-2-5-2' },
            { text: 'Riepilogo meeting 2.5.3', link: '/Report/scoping/riepilogo-meeting-2-5-3' },
            { text: 'Riepilogo meeting 3', link: '/Report/scoping/riepilogo-meeting-3' },
          ],
        },
        {
          text: 'Planning',
          items: [
            { text: 'Introduzione', link: '/Report/planning/' },
            { text: 'Schema delle session', link: '/Report/planning/schema-delle-session' },
            { text: 'Riepilogo sessione 1', link: '/Report/planning/riepilogo-sessione-1' },
            { text: 'Riepilogo sessione 2', link: '/Report/planning/riepilogo-sessione-2' },
            { text: 'Riepilogo sessione 3', link: '/Report/planning/riepilogo-sessione-3' },
            { text: 'Riepilogo sessione finale', link: '/Report/planning/riepilogo-sessione-finale' },
          ],
        },
        {
          text: 'Launching/Execution',
          items: [
            { text: 'Introduzione', link: '/Report/launching-execution/' },
            { text: 'Recruiting the project team', link: '/Report/launching-execution/recruiting-the-project-team' },
            { text: 'Raffinamento della schedula', link: '/Report/launching-execution/raffinamento-della-schedula' },
            { text: 'Regole operative', link: '/Report/launching-execution/regole-operative' },
            { text: 'Processo di modifica dello scope', link: '/Report/launching-execution/processo-di-modifica-dello-scope' },
            { text: 'Communications management plan', link: '/Report/launching-execution/communications-management-plan' },
            { text: 'RASCI matrix', link: '/Report/launching-execution/rasci-matrix' },
            { text: 'Riepilogo kick-off meeting', link: '/Report/launching-execution/riepilogo-kick-off-meeting' },
            { text: 'Kanban', link: '/Report/launching-execution/kanban' },
          ],
        },
        {
          text: 'Monitor & Controlling',
          items: [
            { text: 'Introduzione', link: '/Report/monitor-controlling/' },
            { text: 'Issue log', link: '/Report/monitor-controlling/issue-log' },
            { text: 'Kanban board', link: '/Report/monitor-controlling/kanban-board' },
            { text: 'Sistema di reporting', link: '/Report/monitor-controlling/sistema-di-reporting' },
            { text: 'Meetings', link: '/Report/monitor-controlling/meetings' },
            { text: 'Problem escalation strategy', link: '/Report/monitor-controlling/problem-escalation-strategy' },
          ],
        },
        {
          text: 'Closing',
          items: [
            { text: 'Introduzione', link: '/Report/closing/' },
            { text: 'Approvazione dei deliverable', link: '/Report/closing/approvazione-dei-deliverable' },
            { text: 'Approvazione finale', link: '/Report/closing/approvazione-finale' },
            { text: 'Installazione e deployment', link: '/Report/closing/installazione-e-deployment' },
            { text: 'Documentazione', link: '/Report/closing/documentazione' },
            { text: 'Audit post-implementazione', link: '/Report/closing/audit-post-implementazione' },
            { text: 'Final project report', link: '/Report/closing/final-project-report' },
          ],
        },
      ],
    },

    socialLinks: [],

    footer: {
      message: 'EcoConn project report',
      copyright: 'Copyright © 2025',
    },
  },
}))
`,
  'utf8'
);

console.log(`Generated ${sections.length} report files.`);