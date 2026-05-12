# **POS 0.2.5v**

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

| Obiettivi e considerazioni |
| :---- |

| *Sistema di Autenticazione: Integrazione con il Single Sign On di RR. Il Sistema deve garantire l’accesso a chi autorizzato riconoscendo i profili tra amministratore e ospite della residenza.* |  |  |
| :---- | :---- | ----- |
| *Business Value:*  | Per RR: Per gli utenti della nuova piattaforma è più facile accedere in quanto non devono né registrarsi né ricordare delle nuove credenziali Per EC: Possibilità di riutilizzo del meccanismo per altre soluzioni |  |
| *Assunzioni:*  | Anche altre aziende o enti potrebbero voler utilizzare la nuova piattaforma utilizzando un SSO |  |
| *Rischi:* | Se il sistema di RR di SSO è down non è possibile accedere alla piattaforma Il sistema di SSO potrebbe fornire token incorretti assegnando ruoli errati agli utenti |  |
| *Soluzioni:* | Potremmo mantenere un sistema di autenticazione di emergenza con credenziali pre impostate Potremmo fornire un meccanismo per riassegnare il ruolo |  |

| *Sistema di gestione degli utenti: Gestisce le informazioni degli utenti (Amministratore/Ospite, zona di residenza, consumi …)* |  |  |
| :---- | :---- | ----- |
| *Business Value:*  | Per RR: I consumi vengono indicizzati in base all’utente. Per EC: Possibilità di riutilizzo del meccanismo per altre soluzioni. |  |
| *Assunzioni:*  | Anche altre aziende o enti con elevato numero di utenti potrebbero voler gestire più utenti. |  |
| *Rischi:* | In caso di modifiche errate, allo studente potrebbero essere assegnati consumi non veritieri. |  |
| *Soluzioni:* | Possibilità di segnalare eventuali errori nelle informazioni utente. |  |

| *Sistema per la configurazione delle residenze: Edificio, piani, aree, EH.* |  |  |
| :---- | :---- | ----- |
| *Business Value:*  | Per RR: Personalizzazione totale degli edifici mantenendo il sistema sempre aggiornato. Per EC: Possibilità di riutilizzo anche per l’attuale EcoDomus, migliorando un servizio già esistente per “piccoli” utenti. |  |
| *Assunzioni:*  | Anche altri clienti (passati e futuri) potrebbero volere una funzionalità di gestione degli ambienti di questo tipo. |  |
| *Rischi:* | Il caricamento di piantine errate porterebbe alla creazione di aree errate. |  |
| *Soluzioni:* | — |  |

| *Sistema per il monitoraggio dei consumi: Raccolta dei dati dagli EH ed elaborazione.* |  |  |
| :---- | :---- | ----- |
| *Business Value:*  | Per RR: Avere accesso a dati già elaborati e classificati per EH, aerea, piani, edifici e ospiti. Per EC: Possibilità di riutilizzo del meccanismo per altre soluzioni. |  |
| *Assunzioni:*  | Anche altre aziende o enti con elevato numero di utenti potrebbero voler gestire i consumi per singolo utente. |  |
| *Rischi:* | Imprecisioni in caso di aree comuni. |  |
| *Soluzioni:* | Suddivisione equa dei consumi (alla Romana). |  |

| *Sistema per previsioni consumi: Un sistema in grado di prevedere i consumi del prossimo periodo.* |  |  |
| :---- | :---- | ----- |
| *Business Value:*  | Per RR: Gli ospiti evitano di superare le soglie assegnate.  Per EC: Possibilità di riutilizzo anche per l’attuale EcoDomus, migliorando un servizio già esistente per “piccoli” utenti. |  |
| *Assunzioni:*  | Anche altri clienti (passati e futuri) potrebbero volere una funzionalità di previsione di questo tipo. |  |
| *Rischi:* | Nel primo periodo, non avendo dati di riferimento, le previsioni potrebbero non essere accurati. Con il cambio degli inquilini cambiano anche le abitudini, dunque le previsioni potrebbero non essere veritiere. |  |
| *Soluzioni:* | Procurare un Test set per l’addestramento dell’AI abbastanza grande e vario. Informare il cliente che i risultati sono stime e non dati certi. |  |

| *Sistema di notifica: Notifica gli utenti del superamento di una certa soglia di consumi* |  |  |
| :---- | :---- | ----- |
| *Business Value:*  | Per RR: Non doversi occupare personalmente di notificare gli ospiti. Per EC: Possibilità di riutilizzo anche per l’attuale EcoDomus, migliorando un servizio già esistente per “piccoli” utenti. |  |
| *Assunzioni:*  | Anche altri clienti (passati e futuri) potrebbero volere una funzionalità di notifica di questo tipo. |  |
| *Rischi:* | — |  |
| *Soluzioni:* | — |  |

| Criteri di successo |
| :---- |
| 70% degli utenti attivi mensili durante tutto l’anno  Accesso medio \>= 2 volte a settimana durante tutto l’anno 90% degli utenti soddisfatti (survey post-deploy) a fine anno. Aumento del 25% delle recensioni positive a fine anno. Punteggio medio di soddisfazione \> 4 su 5 nei sondaggi interni a fine anno Precisione \>= 85% sulle previsioni mensili/annuali durante tutto l’anno Riduzione del 15% dei consumi energetici totali nel primo anno.  Riduzione del 50% degli studenti che superano la soglia nel primo anno. |
