## Struttura del progetto

| File / Cartella | Descrizione |
|---|---|
| `EcoConn.md` | Documento sorgente monolitico del report. |
| `scripts/split-ecoconn.mjs` | Script di supporto per rigenerare la suddivisione del report in capitoli e sottocapitoli. |
| `docs/` | Sito VitePress. |
| `docs/index.md` | Home del sito. |
| `docs/Report/` | Report suddiviso in capitoli e sottocapitoli navigabili. |
| `docs/.vitepress/config.mts` | Configurazione VitePress, inclusa la `base` per GitHub Pages. |
| `.github/workflows/deploy.yml` | Workflow GitHub Actions che builda e pubblica il sito. |

## Comandi locali

Dipendenze richieste: Node.js 18+ e npm.

```bash
npm ci
npm run docs:dev
npm run docs:build
```

## Come aggiornare il report

1. Aggiorna il contenuto sorgente in `EcoConn.md`.
2. Se modifichi la struttura del report, aggiorna anche `scripts/split-ecoconn.mjs` e rigenera i file in `docs/Report/`.
3. Verifica localmente il sito con `npm run docs:dev` oppure esegui una build con `npm run docs:build`.
4. Esegui commit e push su `main`.

## Deploy automatico

Il repository è configurato per il deploy automatico tramite GitHub Actions:

1. Un push su `main` attiva `.github/workflows/deploy.yml`.
2. Il workflow esegue `npm ci`.
3. Esegue `npm run docs:build`.
4. Pubblica `docs/.vitepress/dist` su GitHub Pages.

## Verifica impostazioni GitHub Pages

Perché il deploy automatico funzioni, nelle impostazioni del repository deve risultare:

1. `Settings -> Pages`.
2. `Source: GitHub Actions`.
3. Nessuna configurazione legacy del tipo `Deploy from a branch` con root `/`.
4. In `Actions`, i workflow devono essere abilitati per il repository.

## Note operative

- La `base` VitePress è impostata su `/Project-Management/`, coerente con il nome del repository pubblicato su GitHub Pages.
- Se il workflow fallisce, il primo punto da controllare è che la build locale passi con `npm run docs:build`.