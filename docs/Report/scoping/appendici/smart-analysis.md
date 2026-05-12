# **SMART analysis**


# Analisi globale

## Specific

| Obiettivi |
| :---- |
| Integrare l’autenticazione con il sistema di autenticazione RR per agevolare l’accesso e per avere ruoli differenziati.   Sviluppare un editor per caricare/mappare piani, zone e dispositivi EH.   Fornire visualizzazioni real-time e storiche dei consumi, filtrate per piano/zona. Notificare possibili eccessi. Fornire previsioni sui consumi futuri Creare una piattaforma accattivante e facile da utilizzare. |

## Measurable

| Metriche di successo |
| :---- |
| \_\_\_  \_\_\_ \_\_\_ Riduzione del 15% dei consumi energetici totali nel primo anno. Riduzione del 50% degli studenti che superano la soglia nel primo anno. Precisione \>= 85% sulle previsioni mensili/annuali. 90% degli utenti soddisfatti (survey post-deploy). Aumento del 25% delle recensioni positive. 70% degli utenti attivi mensili. Accesso medio \>= 2 volte a settimana. |

## Assignable

| Risorse |
| :---- |
| Team di sviluppo con competenze frontend (mappe interattive, UI/UX accattivante e facile da utilizzare)  Team di sviluppo con competenze in Machine Learning o Forecast (previsioni, analisi consumi). Team di sviluppo con competenze backend (database, integrazione autenticazione RR, comunicazione con EH) Team con conoscenze pregresse su EcoDomus Architetto con competenze per la reingegnerizzazione della piattaforma |

##

| Vincoli |
| :---- |
| Budget e timeline da definire.   |

## Realistic

*Non avendo ancora discussa di Budget o Tempistiche con RR, risulta complesso dire cosa realisticamente sarà possibile affrontare. Le risorse di EcoConn verrebbero impiegate totalmente nel progetto a prescindere dal Budget o dal tempo. Abbiamo considerato cosa è realistico fare secondo una scala di complessità: bassa rappresenta ciò che può essere sicuramente fatto perché perché è già stato fatto in EcoDomus; media rappresenta ciò che può essere fatto con le competenze che abbiamo con poca incertezza sia sulla bontà della soluzione che sui tempi di realizzazione; alta rappresenta ciò che può essere fatto con le competenze che abbiamo ma con incertezza sia bontà della soluzione che sui tempi di realizzazione.*

|  *Complessità bassa* |
| :---- |
| Visualizzazione dei consumi tramite grafici e contatori Elaborazione dei dati prodotti dagli EH Visualizzazione consumi e stato dei singoli EH |

|  Complessità media |
| :---- |
| Integrazione con SSO di RR Realizzare un sistema di notifiche Divisione logica dei EH per zone e piani |

|  *Complessità alta* |
| :---- |
| Realizzazione del sistema di previsione dei consumi Realizzazione dell’editor di piantine |

## Time-related

| Relazioni temporali |
| :---- |
| Realizzare durante la prima parte dello sviluppo l’autenticazione e la gestione dei ruoli così da segnalare subito eventuali problemi ad RR. La realizzazione del servizio di autenticazione e autorizzazione e la logica nel frontend sono indipendenti ma richiedono comunque un testi di integrazione. La realizzazione del servizio di elaborazione dei dati e l’implementazione del frontend sono indipendenti, ma richiedono comunque un test di integrazione. La realizzazione del sistema di elaborazione dei dati e quello di previsione sono indipendenti, ma richiedono comunque un test di integrazione. La realizzazione del sistema di notifiche e quello di previsione sono indipendenti, ma richiedono comunque un test di integrazione. Il funzionamento del sistema di previsione può essere testato tramite dati storici dei consumi Il riscontro dell’implementazione di un microservizio da parte dell’architetto può essere fatto una volta finito Il riscontro dell’interfaccia grafica può essere fatto una volta ultimato lo sviluppo di tale parte del sistema. Il riscontro degli eccessi e della frequenza di accesso può essere fatta durante il lancio, a partire dal primo mese. |

| Possibili milestone e deliverable  |
| :---- |
| All’architetto: Auth microservice User microservice Map microservice Monitoring microservice Forecasting microservice Alerting microservice Mansion microservice Ai focus group Frontend configurazione residenza Frontend visualizzazione dati per amministratori Frontend visualizzazione dati per ospiti Frontend visualizzazione consumi futuri per ospiti A RR: Accesso con SSO e visualizzazione dati amministratori e ospiti. Richiede: integrazione di A con il frontend integrazione B e C integrazione di C e D e B con D per verifica consistenza dati EH integrazione di D con il frontend Visualizzazione consumi futuri ospiti. Richiede: integrazione E e F per verifica notifiche integrazione E e D per verifica dei dati integrazione E e U per verifica ospiti integrazione E con frontend integrazione F  con frontend Configurazione residenza. Richiede: integrazione C con frontend Risultato finale. Richiede: integrazione G con frontend |

# Analisi locale

| *“è fondamentale aumentare la consapevolezza degli studenti rispetto ai propri consumi. A tal fine, RR si aspetta sia un utilizzo della piattaforma da parte di tutti gli studenti, sia un’interazione frequente e continuativa nel tempo.”* |  |
| :---- | :---- |
| **Specific** | Aumentare la consapevolezza degli studenti rispetto ai propri consumi energetici. |
| **Measurable** | 70% degli utenti attivi mensili. Accesso medio \>= 2 volte a settimana. |
| **Assignable** | Responsabilità condivisa tra il team di sviluppo nelle fasi di front-end che dovranno rendere la dashboard chiara e informativa, e a RR per promuovere l’uso agli studenti. |
| **Realistic** | Realizzabile con componenti già progettate (dashboard, contatori, grafici), tramite focus group per la valutazione dell’usabilità e con il supporto di RR per la corretta sponsorizzazione della piattaforma |
| **Time-related** | Entro i primi 2 mesi dal lancio, raggiungere almeno l’80% di studenti attivi con, almeno, un accesso a settimana. |

| *“è importante che la piattaforma sia intuitiva e apprezzata dagli studenti, così da favorirne l’adozione e contribuire ad aumentare le recensioni positive che RR riceve annualmente sui servizi offerti”* |  |
| :---- | :---- |
| **Specific** | Rendere la piattaforma ben accolta dagli studenti. |
| **Measurable** | Punteggio medio di soddisfazione \> 4 su 5 nei sondaggi interni Aumento del 25% delle recensioni positive. |
| **Assignable** | Responsabilità condivisa tra il team di sviluppo nelle fasi di front-end che dovranno rendere la dashboard chiara e gradevole, il team di sviluppo nelle frasi back-end, responsabile della stabilità e correttezza del codice per prevenire malfunzionamenti, e RR a cui spetta la corretta gestione dei server presenti nelle residenze e del sistema SSO, al fine di garantire la continuità del servizio. |
| **Realistic** | Realizzabile con strumenti già progettate (dashboard, contatori, grafici), tramite focus group per la valutazione dell’UI e una valutazione per simulare il questionario di fine anno. |
| **Time-related** | Prima del rilascio si potrebbe fare un sondaggio ad un focus group per valutare eventuali azioni correttive. Alla fine dell’anno verrà valutato il successo. |

| *“le sanzioni legate all’eccesso di consumo rappresentano un danno sia per gli studenti, spesso in condizioni economiche delicate in quanto assegnatari di borsa, sia per l’ente, che deve poi esporre tali comportamenti nelle fasi di valutazione. Per questo motivo, la piattaforma deve supportare gli studenti nel monitorare i propri consumi, aiutandoli a non superare le soglie previste”* |  |
| :---- | :---- |
| **Specific** | Aiutare gli studenti a evitare il superamento delle soglie di consumo così da non incorrere in sanzioni |
| **Measurable** |  Riduzione del 50% degli studenti che superano la soglia nel primo anno. |
| **Assignable** | Responsabilità condivisa tra il team di sviluppo per le previsioni e le notifiche e dashboard e RR per il monitoraggio delle classifiche. |
| **Realistic** | Realizzabile parzialmente, grazie all’integrazione di algoritmi per le previsioni, il sistema relativo di notifiche e il controllo delle classifiche degli studenti. Gli ospiti devono avere un comportamento proattivo quando viene segnalato un eccesso, correggendo il proprio comportamento così da non incorrere in multe |
| **Time-related** | Verifica dell’impatto dopo i primi 3 mesi di utilizzo della piattaforma per valutare eventuali azioni correttive. Ulteriore verifica a metà anno. Alla fine dell’anno verrà valutato il successo. |

| *“l’aumento dei costi delle bollette registrato negli ultimi anni rappresenta uno dei principali fattori che hanno spinto alla richiesta del progetto. Si stima che una parte significativa di tali costi sia dovuta a sprechi, e che quindi l’introduzione della piattaforma possa contribuire a una riduzione dei consumi e, di conseguenza, a un risparmio economico sulle utenze”* |  |
| :---- | :---- |
| **Specific** | Ridurre i costi delle bollette |
| **Measurable** | Riduzione dei consumi \> 15% rispetto all’anno precedente |
| **Assignable** | Responsabilità condivisa tra il team di sviluppo per le previsioni e le notifiche e dashboard e RR per il monitoraggio delle classifiche. |
| **Realistic** | Realizzabile grazie all’integrazione di algoritmi per le previsioni, il sistema relativo di notifiche e il controllo delle classifiche degli studenti. Gli ospiti devono avere un comportamento proattivo quando viene segnalato un eccesso, correggendo il proprio comportamento così da ridurre i consumi |
| **Time-related** | Verifica dell’impatto dopo i primi 3 mesi di utilizzo della piattaforma per valutare eventuali azioni correttive. Ulteriore verifica a metà anno. Alla fine dell’anno verrà valutato il successo. |

# Integrazione

## Criteri di successo

*Dalle metriche di su successo globali e i measurable locali, unite con le relazioni temporali globali e le time-related locali i otteniamo i seguenti criteri di successo che verranno inserite nel POS. IRACIS*
*IR Increase Revenue*
*AC Avoid Costs*
*IS Improve Service*

- La piattaforma viene utilizzata e apprezzata (IS)
  - 70% degli utenti attivi mensili durante tutto l’anno
  - Accesso medio \>= 2 volte a settimana durante tutto l’anno
  - 90% degli utenti soddisfatti (survey post-deploy) a fine anno.
  - Aumento del 25% delle recensioni positive a fine anno.
  - Punteggio medio di soddisfazione \> 4 su 5 nei sondaggi interni a fine anno
- La piattaforma riesce a evitare sprechi e ridurre i consumi
- Precisione \>= 85% sulle previsioni mensili/annuali durante tutto l’anno (AC, IS)
- Riduzione del 15% dei consumi energetici totali nel primo anno. (IR)
- Riduzione del 50% degli studenti che superano la soglia nel primo anno. (AC, IS)

## Deliverables

Una volta completate le milestone previste, è possibile procedere con l’impostazione e la consegna delle relative deliverable al cliente:

1. Accesso con SSO e visualizzazione dati amministratori e ospiti:
- Completamento backend Auth microservice
- Completamento backend User microservice
- Completamento frontend Auth
- Integrazione Auth e User con frontend
- Completamento backend Monitoring microservice
- Completamento backend Map microservice
- Integrazione Map e Monitoring
- Integrazione Map e User
- Integrazione Monitoring e User
- Completamento frontend Monitoring
- Integrazione Monitoring con frontend
2. Visualizzazione consumi futuri ospiti:
- Completamento backend Forecasting microservice
- Integrazione Forecasting con User
- Integrazione Forecasting con Monitoring
- Integrazione Forecasting con frontend
- Completamento backend Alerting microservice
- Integrazione Alerting e Forecasting
- Integrazione Forecasting e Alerting
- Integrazione Alerting con frontend
3. Configurazione residenza:
- Integrazione Map con frontend
4. Risultato finale:
- Completamento Mansion microservice
- Integrazione Mansion con frontend

## Dipendenze temporali

- Completare come prima milestone l’auth microservice per verificare compatibilità con SSO
- Dare priorità al forecasting microservice per verificare la fattibilità di realizzazione e in modo tale da poterlo sostituire con un meccanismo più semplice in caso di complicazioni
- Realizzare tra le ultime milestone il frontend configurazione residenza per valutare le tempistiche di realizzazione di un editor di piantina in modo tale da sostituirlo con un meccanismo più semplice. Tuttavia non deve essere l’ultimo, in modo tale da gestire un feedback negativo
- L’alerting e il mansion microservice possono essere realizzati come ultime milestone in quanto sono quelle con la priorità minore

## Monitoring

- Prima del lancio:
  1. Feedback architetto per il funzionamento del backend
  2. Feedback focus group per il frontend
  3. Feedback RR
- Dopo il lancio
  1. Entro i primi 2 mesi dal lancio, raggiungere almeno l’80% di studenti attivi con, almeno, un accesso a settimana.
  2. A fine anno verificare le recensioni degli studenti
  3. Verificare la percentuale di sanzioni rispetto all’anno precedente
     - Dopo tre mesi dal lancio
     - A fine anno
  4. Verificare la percentuale di consumi rispetto all’anno precedente
     - Dopo tre mesi dal lancio
     - A fine anno
