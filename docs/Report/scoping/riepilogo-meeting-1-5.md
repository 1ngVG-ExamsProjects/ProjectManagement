# Riepilogo meeting 1.5: “Analisi del problema”
## Partecipanti
- PM
- Architetto

A seguito dell’assunzione dell’architetto é stata pianificata una riunione per l’analisi delle richieste del cliente in modo da preparare per il secondo meeting le CoS e delle user stories in modo da ricevere un feedback e iniziare la formalizzazione dei requisiti del sistema. Innanzitutto sono partiti dalla formalizzazione dei requisiti di business analizzando i desideri must have del cliente così da investire al meglio il tempo. Per quanto riguarda l’accesso alla piattaforma si è pensato di ipotizzare la presenza di un meccanismo di Single Sign On realizzato da RR a cui EC possa appoggiarsi. A tal fine manderanno un e-mail per ricevere un riscontro. Durante l’analisi del problema è sorto il dubbio su come la piattaforma possa identificare i consumi degli utenti in camere con più ospiti. Per tale questione hanno deciso di rimandare al prossimo meeting con il cliente in modo da avere un riscontro diretto. Una volta definiti i requisiti di business è stata definita da prima l’analisi “as is…to be” e poi le user stories e CoS. Durante l’analisi si è vista l’esigenza di iniziare a scrivere l’ubiquitous language (glossario) così da differenziare i termini, evitare l’uso di sinonimi e avere un linguaggio ben definito. Il tempo a disposizione non è stato sufficente per effettuare un analisi dei desideri nice to have e out of scope, questi andranno ad essere discussi meglio nel meeting con il cliente per valutare se fare o meno l’analisi. A fine riunione il PM, da solo, aggiorna il POS.

## Documenti prodotti
### **Requisiti di business**
In giallo il PM ha evidenziati i requisiti soddisfatti anche da EcoDomus

1. La piattaforma deve prevedere due ruoli distinti, Amministratore e Ospite, ciascuno con viste e permessi differenziati, in base alle rispettive responsabilità e ambiti di accesso.
2. L’amministratore deve poter configurare una residenza definendo i piani, le zone e gli EH
3. La piattaforma deve permettere la visualizzazione di una mappa interattiva delle piantine e delle zone con lo stato in tempo reale dei EH
4. La piattaforma deve fornire un monitoraggio in tempo reale dei consumi attuali delle utenze.
5. La piattaforma deve fornire metriche di consumo in tempo reale relative alle utenze.
6. La piattaforma deve consentire l’accesso ai dati storici di consumo.
7. La piattaforma deve consentire il monitoraggio dei consumi sia globali che per singoli piani e singole zone.

### **CoS e user stories**
Per ogni requisito di business sono stati definite le user stories e le COS.

\[B1\] La piattaforma deve prevedere due ruoli distinti, Amministratore e Ospite, ciascuno con viste e permessi differenziati, in base alle rispettive responsabilità e ambiti di accesso.

1. Come utente voglio accedere al sistema attraverso le credenziali che uso per accedere al portale di RR così da non dovermi registrare ad una nuova piattaforma
- CoS: Il sistema di autenticazione di RR deve comunicare con la nostra piattaforma
2. Come Amministratore voglio accedere alla piattaforma così che possa avere i privilegi di amministratore.
- CoS: Il sistema di autenticazione di RR riconosce le credenziali dell’amministratore e provvede a dargli i privilegi da amministratore
3. Come Ospite voglio accedere al sistema così da avere accesso da poter monitorare i miei consumi.
- CoS: Il sistema di autenticazione di RR riconosce le credenziali dell’ospite e provvede ad assegnarli il ruolo di Ospite
- CoS: L’ospite vede nella propria dashboard la propria camera e i propri consumi
4. Come utente voglio eseguire il logout dal sistema quando voglio così che la mia sessione termini in sicurezza.
- CoS: \----

\[B2\] L’amministratore deve poter configurare una residenza definendo i piani, le zone e gli EH

1. Come Amministratore voglio poter caricare le piantine dei paini di una residenza così che vengano utilizzate come base per la mappa interattiva.
- Cos: Ci deve essere meccanismo per caricare e visualizzare la piantina
2. Come Amministratore voglio poter dividere una piantina in zone così da monitorare in dettaglio diverse aree di un piano
- CoS: Le piantine caricate devono poter essere modificate per disegnare le aree
3. Come Amministratore voglio poter assegnare uno più ospiti ad una zona così da permettere il monitoraggio in dettaglio i consumi degli ospiti
- CoS: Devo poter avere la lista degli ospiti delle residenza in modo da assegnarli una zona
4. Come Amministratore voglio collegare al sistema i dispositivi EH così che i consumi possano essere tracciati
- CoS: devo poter avere accesso a tutti gli EH presenti nella residenza
5. Come Amministratore voglio poter posizionare un EH all’interno di una piantina così da avere un riferimento spaziale
- CoS: le piantine caricate devono poter essere modificate per poter inserire nuovi elementi

\[B3\] La piattaforma deve permettere la visualizzazione di una mappa interattiva delle piantine e delle zone con lo stato in tempo reale dei EH

1. Come amministratore voglio avere accesso alla mappa interattiva dei piani e delle zone così io che possa controllare lo stato del generale dei EH.
- CoS: \----
2. Come ospite voglio avere accesso alla mappa della zona assegnatami così io che possa controllare i consumi degli EH.
- CoS: l’ospite può vedere quanto consumano ogni EH e notare consumi anomali o preoccupanti

*Per i requisiti B4-5-6 vengono riutilizzati i CoS e le user stories presenti nella documentazione di EcoDomus*
\[B7\] La piattaforma deve consentire il monitoraggio dei consumi sia globali che per singoli piani e singole zone.

1. Come amministratore voglio poter accedere alla dashboard e vedere i dati di consumo relativi a tutta la residenza.
- CoS: l’amministratore riesce ad avere una panoramica generale dei consumi
2. Come amministratore voglio poter accedere ad una vista di un specifico piano o zona così io che possa concentrarmi su una specifica area.
- CoS: l’amministratore deve poter navigare ad uno specifico piano o zona e vedere una dashboard con i dati di consumo relativi a quella specifica area.

### **Glossario**
Durante la riunione è stato redatto anche una prima versione glossario che verrà aggiornato durante le prossime riunioni. A tal fine è stato aggiunto tra i file condivisi con il team degli sviluppatori e con il cliente nel drive aziendale.

| Termine | Definizione | Sinonimo |
| ----- | ----- | ----- |
| **Utente** | Persona che utilizza la piattaforma |  |
| **Amministratore** | Utente con privilegi completi che può configurare una residenza, gestire piani, zone ed EH, accedere a tutti i dati. | Admin |
| **Ospite** | Utente con accesso limitato alla zona assegnata e ai relativi consumi. | Studente |
| **Residenza** | Struttura composta da uno o più piani, nella quale abitano gli ospiti | \- |
| **Piano** | Piano di una residenza | \- |
| **Zona** | Sezione di un piano | Area |
| **Piantina** | Immagine caricata di un piano, usata come base per la mappa interattiva. |  |
| **Mappa interattiva** | Visualizzazione grafica dei piani e delle zone con stato degli EH in tempo reale. | Piantina interattiva |
| **EcoHookup** | Dispositivo registrato e collegato al sistema per rilevare i consumi. | EH, prese smart |
| **Consumi attuali** | Misurazioni in tempo reale delle utenze (gas, luce, acqua). | Metriche di consumo in tempo reale |
| **Dati storici** | Informazioni registrate sui consumi passati. | Storico di consumo |
| **Dashboard** | Vista che mostra i consumi (globali o localizzati) tramite contatori e grafici. | \- |
| **Autenticazione** | Meccanismo per verificare l'identità dell'utente, integrato col sistema RR. | Sistema di autenticazione |
| **Sessione** | Periodo in cui un utente rimane autenticato nella piattaforma. | \- |

**Bozza del POS**
Il PM scrive il [POS 0.1.5v](./appendici/pos-0-1-5v) inserendo l’analisi del gap confrontando i requisiti già soddisfatti, anche parzialmente, dalla piattaforma EcoDomus con quelli che rappresentano le evoluzioni necessarie da implementare.

---
