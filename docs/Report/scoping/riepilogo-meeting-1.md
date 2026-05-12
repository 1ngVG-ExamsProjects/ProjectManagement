# Riepilogo Meeting 1: “Discussione della proposta di progetto”
## Partecipanti
- PM
- Team di sviluppo
  - Tra cui un tecnografo
  - Stakeholder
    - Rappresentati di RR
  - Rappresentante del reparto IT interno di RR

EC ha già in processo l’assunzione di un architetto software ed è alla fase di selezione. A tal proposito, la funzione del tecnografo è fondamentale, in quando l’architetto dovrà avere quanti più dettagli possibili di questa riunione per capire al meglio il problema. A ricoprire tale ruolo sarà il tirocinante. Il documento prodotto sarà poi disponibile sotto forma di “Google doc” sul drive aziendale.

## Documenti prodotti
### **Argomenti discussi**
Il tecnografo produce il seguente documento:

1. **Introduzione:** *Condotta dai rappresentanti di RR*
   RR sta attualmente costruendo tre nuove residenze universitarie, nelle quali intende installare dispositivi EH forniti da EC per monitorare in modo dettagliato i consumi di acqua, gas ed energia elettrica. La scelta è motivata da una duplice esigenza: da un lato, ogni studente ha a disposizione un quantitativo annuo di risorse, e il superamento di tale soglia comporta una sanzione economica; dall’altro, RR vuole promuovere una maggiore consapevolezza nei confronti dell’uso delle risorse, sia in un’ottica di sostenibilità e responsabilizzazione individuale sia per cercare di diminuire gli sprechi, individuali e collettivi nelle aree comuni.
2. **Descrizione dello stato corrente**: *Condotta dal PM*
   *\[La descrizione dello stato corrente consiste in una presentazione della piattaforma EcoDomus. La documentazione prodotta dal tecnografo è simile al capitolo “EcoDomus” presente nel contesto.\]*
3. **Descrizione del problema o della business opportunity**: *Condotta dal rappresentate IT di RR*
   Quello che RR vorrebbe è realizzare una piattaforma web con due tipi di utenti: un amministratore e uno ospite (inteso come ospite della stanza).
   L’amministratore deve poter gestire l’intera struttura, organizzandola in piani e suddividendo ogni piano in zone, alle quali poi assegnare gli ospiti. Ogni zona dovrebbe essere visualizzabile sulla piantina del piano, con all’interno i dispositivi EH, che devono essere rappresentati graficamente in modo da capire chiaramente se sono attivi o meno.
   Inoltre, vorrebbero che l'amministratore avesse una vista completa dell’intera struttura, simile a quella già offerta da EcoDomus: quindi visualizzazione dei consumi tramite contatori e i grafici sui consumi attuali e sui dati storici. Per quanto riguarda invece la vista dettagliata di un singolo piano, è importante che ci sia una piantina interattiva, in cui si possa vedere e navigare visivamente tra le zone, vedere i dispositivi posizionati, e comprendere i consumi in modo localizzato, sia in tempo reale che storicamente, sempre attraverso contatori e grafici. Dal lato studente, invece, l'idea è di offrire una vista semplificata ma completa: ogni studente deve poter accedere solo alla zona che gli è stata assegnata, e visualizzare i relativi consumi attraverso gli stessi grafici e contatori che vede anche l’amministratore. RR ha esplicitato inoltre la richiesta di funzionalità di AI/machine learning per aumentare la consapevolezza degli studenti sugli sprechi, senza però esprimere dei requisiti, proponendo come idea la possibilità di avere una chat con un AI per interagire con i propri consumi. Come ultimo punto, RR ha chiesto la possibilità di inserire funzionalità di controllo degli hookup in modo tale da disattivarli a distanza nel caso uno studente si accorgesse di aver lasciato qualcosa di acceso.
   Per quanto le business opportunity, RR ha fatto intendere che se la soluzione si rivela efficace potrebbe attuare un piano di rinnovamento delle proprie strutture. Inoltre RR si è dimostrata favorevole all’utilizzo dell’evoluzione della piattaforma come showcase per promuoverla presso altre realtà aziendali o istituzionali.

### **Desideri del cliente**
Il PM produce il seguente documento nel quale elenca e classifica i desideri del cliente, colorandoli di verde, giallo e rosso per indicare rispettivamente se sono desideri must have, desideri nice to have o desideri out of scope.

- Must have:
1. Poter gestire due tipologie di utenti (amministratore, studente)  in modo tale da avere visioni e funzionalità distinte.
2. Un amministratore deve poter:
   1. configurare una residenza creando piani
   2. inserire le piantine dei piani
   3. dividere in zone i piani
   4. assegnare le zone agli studenti
   5. posizionare gli EH nella piantina
   6. visualizzare i consumi attuali delle forniture localizzati per struttura, piano, zona
   7. visualizzare sotto forma di grafici i consumi nel tempo  localizzati per struttura, piano, zona
3. Uno studente deve poter:
   1. visualizzare i consumi attuali delle forniture nelle zone assegnate
   2. visualizzare sotto forma di grafici i consumi nel tempo  localizzati per struttura, piano, zona
- Nice to have:
4. Poter avere accesso a funzionalità di AI
1. Chat intelligente con un bot per avere un feedback dei propri consumi
- Out of scope:
5. Poter controllare a distanza gli EH in modo tale da spegnerli

In più identifica alcuni requisiti che potrebbero avere business value per RR:

1. Gestione simultanea di più residenze, creando dei gruppi di edifici.
2. Indici per valutare gli studenti: quanto consuma rispetto alla media della residenza; che tipologie di consumi può migliorare; in che modo può migliorare.
3. Sistema di notifiche quando hanno arrivando ad avere consumi elevati

**Bozza del POS**
Tra i documenti prodotti dal meeting 1 è inclusa la versione del [POS 0.1v](./appendici/pos-0-1v) contenente il contesto, il problema, il goal e le business opportunity.
---
