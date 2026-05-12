# **POS 0.2v**

# **Project Overview Statement (POS)**

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

| Analisi del gap |
| :---- |

| *AS IS* |  | *TO BE* |  |
| ----- | ----- | ----- | ----- |
| Un unico tipo di utente |  | Due ruoli distinti: Amministratore e Ospite, con viste e permessi differenziati |  |
| Accesso tramite credenziali configurabili |  | Accesso tramite Single Sign On |  |
| Ambiente domestico con una visualizzazione collettiva dei dati |  | Possibilità per l’amministratore di creare strutture multi-piano, suddivise in zone per avere multiple visualizzazioni |  |
| Nessuna possibilità di vedere l'ambiente domestico tramite piantina |  | Ogni piano avrà una piantina interattiva dove visualizzare EH e relative zone |  |
| Registrazione / modifica / eliminazione EH |  | Invariata |  |
| Posizionamento EH non prevista |  | Gli EH devono essere posizionabili nella piantina |  |
| È possibile visualizzare lo stato degli EH per capire lo stato (attivo/inattivo) |  | Lo stato viene visualizzato direttamente nella piantina interattiva attraverso una rappresentazione grafica |  |
| Contatori per gas, luce, acqua |  | Contatori presenti ma localizzati per struttura/piano/zona |  |
| Andamento nel tempo tramite grafici interattivi (lineari e a barre) |  | Invariati, ma localizzati per struttura/piano/zona |  |
| L’utente può visualizzare tutti i dati prodotti dagli EH |  | L’amministratore vede tutta la struttura, l’ospite solo la propria zona |  |
| Nessun meccanismo di previsione dei consumi |  | Gli ospiti devono visualizzare un grafico delle previsioni future basate sui loro consumi passati |  |
| La piattaforma gestisce solo un ambiente |  | La piattaforma deve poter gestire multiple residenze |  |
| I consumi non sono attribuiti a nessuno |  | I consumi sono attribuiti agli ospiti in modo tale da permettere un’indicizzazione per consumi |  |
| Nessun sistema di notifiche |  | Sistema che notifica l’ospite se i suoi consumi superano i consumi previsti |  |

| Obiettivi e considerazioni |
| :---- |

| *Sistema di Autenticazione: Integrazione con il Single Sign On di RR. Il Sistema deve garantire l’accesso a chi autorizzato riconoscendo i profili tra Admin e Guest.* |  |  |
| :---- | :---- | ----- |
| *Business Value:*  |  |  |
| *Assunzioni:*  |  |  |
| *Rischi:* |  |  |
| *Soluzioni:* |  |  |

| *Sistema di gestione degli Utenti: Gestisce le informazione degli utenti (Admin/Guest, zona di residenza, consumi …)* |  |  |
| :---- | :---- | ----- |
| *Business Value:*  |  |  |
| *Assunzioni:*  |  |  |
| *Rischi:* |  |  |
| *Soluzioni:* |  |  |

| *Sistema per la configurazione delle residenze: Un admin deve poter inserire nel portale la sua residenza specificando il numero di piani, deve poter caricare la piantina dei singoli piani in modo tale che il sistema (in automatico o manualmente) possa creare il piano dividendolo nelle varie aree, e inserire gli EH all’interno delle aree .* |  |  |
| :---- | :---- | ----- |
| *Business Value:*  |  |  |
| *Assunzioni:*  |  |  |
| *Rischi:* |  |  |
| *Soluzioni:* |  |  |

| *Sistema per il monitoraggio dei consumi: Raccolta dei dati dagli EH ed elaborazione.* |  |  |
| :---- | :---- | ----- |
| *Business Value:*  |  |  |
| *Assunzioni:*  |  |  |
| *Rischi:* |  |  |
| *Soluzioni:* |  |  |

| *Sistema per previsioni consumi: Un sistema di AI in grado di prevedere i consumi del prossimo periodo.* |  |  |
| :---- | :---- | ----- |
| *Business Value:*  |  |  |
| *Assunzioni:*  |  |  |
| *Rischi:* |  |  |
| *Soluzioni:* |  |  |

| *Sistema di notifica: Notifica gli utenti del superamento di una certa soglia di consumi* |  |  |
| :---- | :---- | ----- |
| *Business Value:*  |  |  |
| *Assunzioni:*  |  |  |
| *Rischi:* |  |  |
| *Soluzioni:* |  |  |

| Criteri di successo |
| :---- |
| 70% degli utenti attivi mensili durante tutto l’anno  Accesso medio \>= 2 volte a settimana durante tutto l’anno 90% degli utenti soddisfatti (survey post-deploy) a fine anno. Aumento del 25% delle recensioni positive a fine anno. Punteggio medio di soddisfazione \> 4 su 5 nei sondaggi interni a fine anno Precisione \>= 85% sulle previsioni mensili/annuali durante tutto l’anno Riduzione del 15% dei consumi energetici totali nel primo anno.  Riduzione del 50% degli studenti che superano la soglia nel primo anno. |
