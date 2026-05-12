import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  base: '/ProjectManagement/',
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
  },
}))
