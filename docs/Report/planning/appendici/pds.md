# **PDS**

# **PROJECT DEFINITION STATEMENT (PDS)**

| EcoDomus v2.0: piattaforma di monitoraggio consumi per residenze universitarie |  |  |
| :---- | :---- | :---- |
| **Progetto: Versione**: 1.0 | **Data**: | **Autore**: EcoConn |

| Obiettivi e considerazioni |
| :---- |

| Contesto |
| :---- |
| Red Ribbon (RR) è un ente che si occupa di diritto allo studio e che gestisce numerose residenze universitarie distribuite sul territorio regionale. Nelle strutture di RR si registra un elevato tasso di consumi, che potrebbero essere dovuti a degli sprechi, che porta  la società ad avere costi maggiori in bolletta. Per tali motivi nelle tre nuove residenze che sta costruendo intende installare le prese EcoHookup prodotte da EcoConn per monitorare i consumi |

| Problema |
| :---- |
| La piattaforma attuale (EcoDomus) per visualizzare i dati prodotti dagli EcoHookup è stata sviluppata per un uso domestico e pertanto è troppo semplice per essere utilizzata in contesto più ampio come una residenza. |

| Goal |
| :---- |
| Sviluppare un’evoluzione della piattaforma attuale che permetta il monitoraggio mirato dei consumi per ogni area di ogni piano di ogni residenza per localizzare i consumi e attuare politiche di miglioramento. Inoltre si vuole dare la possibilità agli ospiti delle residenze di visualizzare i propri consumi in modo tale da aumentare la consapevolezza individuale e promuovere comportamenti più sostenibili. |

| Business Opportunity |
| :---- |
| Questa collaborazione rappresenta un'opportunità per EcoCon di estendere le funzionalità della propria piattaforma, adattandola a contesti collettivi e istituzionali, oltre che domestici, in modo tale da rivendere la soluzione anche ad aziende o altri enti come RR. In particolare si potrebbe utilizzare RR come showcase. Inoltre se la soluzione si rivelerà efficace, RR potrebbe modernizzare le vecchie residenze, installando le allacciature smart in modo tale da estendere il sistema anche alle residenze più datate. |

| Criteri di successo |
| :---- |
| 70% degli utenti attivi mensili durante tutto l’anno  Accesso medio \>= 2 volte a settimana durante tutto l’anno 90% degli utenti soddisfatti (survey post-deploy) a fine anno. Aumento del 25% delle recensioni positive a fine anno. Punteggio medio di soddisfazione \> 4 su 5 nei sondaggi interni a fine anno Precisione \>= 85% sulle previsioni mensili/annuali durante tutto l’anno Riduzione del 15% dei consumi energetici totali nel primo anno.  Riduzione del 50% degli studenti che superano la soglia nel primo anno. |

| Requisiti  |
| :---- |

| Requisiti MoSCoW |  |
| :---- | :---- |
| **Must Have** | La piattaforma deve prevedere due ruoli distinti, Amministratore e Ospite, ciascuno con viste e permessi differenziati, in base alle rispettive responsabilità e ambiti di accesso. L’amministratore deve poter configurare una residenza definendo i piani, le zone e gli EH La piattaforma deve fornire un monitoraggio in tempo reale dei consumi attuali delle utenze. La piattaforma deve fornire metriche di consumo in tempo reale relative alle utenze. La piattaforma deve consentire l’accesso ai dati storici di consumo. La piattaforma deve consentire il monitoraggio dei consumi sia globali che per singoli piani e singole zone. La piattaforma deve fornire agli amministratori un elenco degli studenti indicizzato per consumi |
| **Should Have** | La piattaforma deve permettere di gestire più residenze In alternativa si può pensare ad una installazione locale e successivamente potenziare il servizio La piattaforma deve fornire un'ottimizzazione dei consumi prevedendo il consumo futuro. Si potrebbe posticipare sostituendola temporaneamente con delle soglie giornaliere da non superare |
| **Could Have** | La piattaforma deve permettere la visualizzazione di una mappa interattiva delle piantine e delle zone con lo stato in tempo reale dei EH La mappa interattiva permette un uso più agevolato dell’applicazione, ma potrebbe essere sostituito da elementi più minimali La piattaforma deve notificare tempestivamente gli utenti quando i consumi superano i consumi predetti, tramite un sistema di allerta automatico. |
| **Won't Have** | Poter controllare a distanza gli EH in modo tale da spegnerli Chat intelligente con un bot per avere un feedback dei propri consumi |

| Scope (IN/OUT) |  |
| :---- | :---- |
| **In Scope** | Sviluppo frontend e backend. Integrazione con dispositivi EH tramite API esistenti. Riuso moduli EcoDomus. |
| **Out of Scope** | Sviluppo hardware dispositivi EH. Formazione del personale RR. |

| Tempistiche |  |
| :---- | :---- |
| **Timeline totale** | 07/04/2025 \-15/05/2025 |
| **Milestone chiave** | Accesso con SSO e visualizzazione dati amministratori e ospiti Visualizzazione consumi futuri ospiti Configurazione residenza Risultato finale |
| **Gantt Chart** | **\[[Link al documento condiviso](https://pollen-punch-1ce.notion.site/220b3342170f80408bf6e2227b8c703f?v=220b3342170f8070a775000c066447dd)\]** |

| Budget Approvato e Suddivisione costi |  |
| :---- | :---- |
| **Budget** | **55.000€** |
| **Sviluppo** | **29.450€** |

| Team |  |  |
| :---- | :---- | :---- |
| **PM** | Valerio Giannini | Part Time |
| **Architetto** | Rares Vasiliu | A chiamata |
| **Dev Team** | Dev1, Dev2, Dev3, Tirocinante | Part Time |

| Stakeholder primari |  |
| :---- | :---- |
| **RR** | **\[**Nome**\]** |
| **EC** | **\[**Nome**\]** |

| Team Meetings |  |
| :---- | ----- |
| Daily Status Meeting: riunione giornaliera Project review meetings: riunione per il completamento di un microservizio Problem resolution meetings: riunione per risolvere problematiche |  |

| Piano di comunicazione |  |
| :---- | ----- |
| **Tracciabilità delle comunicazioni**: La comunicazione deve sempre avvenire in modo tale che si produca una documentazione: mail, chiamate con assistente virtuale che ne fa un riepilogo o producendo un resoconto a posteriori. **Comunicazione interna (EcoConn)**: La comunicazione all’interno del team EcoConn è libera e diretta, ogni membro del team può interagire con gli altri colleghi, con il PM e con l’Architetto, senza vincoli formali. **Comunicazione esterna (EcoConn ↔ RR)**: Il canale di comunicazione tra EcoConn e RR sarà attraverso il PM. |  |

| Appendici |  |
| :---- | :---- |
| **WBS dettagliata** | Vedi documento dedicato |
| **Analisi MoSCoW** | Documento dedicato e recap a pag 2 |
| **Project Network Diagram** | Vedi documento dedicato |

# **Firma approvazione:**

Valerio Giannini, 25/03/2025

Rares Vasiliu, 25/03/2025

\[TIMBRO EC\]
