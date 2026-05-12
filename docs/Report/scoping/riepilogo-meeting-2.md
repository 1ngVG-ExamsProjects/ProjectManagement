# Riepilogo meeting 2: “Verifica dei desideri, CoS e User Stories”
## Partecipanti
- PM
- Architetto
- Tecnografo
- Stakeholder
  - Rappresentati di RR
  - Rappresentante del reparto IT interno di RR

## Documenti prodotti
### **Argomenti discussi**
Il tecnografo produce il seguente documento:

1. **Discussione dei requisiti:** La parte iniziale è stata dedicata al riscontro dell’analisi dei requisiti di business. Da tale riscontro è emerso che i requisiti “must have” sono in linea con quanto espresso dal cliente nel meeting 1\. Per quanto riguarda i requisiti proposti dal PM, invece, sono stati ampiamente apprezzati, in particolare:
- La gestione di multiple residenze era effettivamente una necessità già prevista dal cliente ma non era emersa nel meeting 1\.
- L’indicizzazione degli studenti in base ai consumi è stata valutata molto positivamente, poiché rappresenta un incentivo alla consapevolezza e al coinvolgimento anche per quegli utenti che non interagiscono attivamente con la piattaforma. A questo proposito, RR ha suggerito la possibilità di affiancare il proprio sistema di comunicazioni per notificare gli ospiti con i consumi più elevati, per fornire consigli personalizzati su come migliorare le proprie abitudini. Fondamentale, in tal senso, è la possibilità, già proposta dal PM, di filtrare i consumi per tipologia, al fine di rendere i suggerimenti più mirati.
- Il sistema di notifiche interno è stato valutato favorevolmente. È emerso che un sistema di messaggistica interno alla piattaforma potrebbe alleggerire il carico del sistema di comunicazioni ufficiale di RR, riservato a messaggi istituzionali o urgenti. Inoltre, rappresenterebbe un valido strumento di supporto per aumentare la consapevolezza degli utenti sui propri consumi.
  Si è passati successivamente alla discussione dei requisiti ritenuti “nice to have”. La possibilità di avere meccanismi di AI è stato ritenuto interessante da EC ma non ritenuto prioritario per la presente evoluzione della piattaforma EcoDomus, suggerendone eventualmente l’integrazione in una fase successiva. Tuttavia, RR ha espresso una posizione differente, sostenendo che l’integrazione di funzionalità basate su AI o tecniche di machine learning attribuire al progetto più importanza e maggiore entusiasmo e credibilità sia all’interno della propria commissione interna sia da parte degli studenti. L’architetto ha proposto quindi di implementare funzionalità AI più semplici ma comunque efficaci: invece di avere chatbot, come proposto inizialmente, si potrebbe implementare un algoritmo di previsione dei consumi in grado di stimare l’andamento futuro dell’utilizzo delle utenze da parte degli ospiti. Ciò permetterebbe di anticipare eventuali eccessi nei consumi e di evitare il rischio di sanzioni legate al superamento delle soglie previste. I rappresentanti di RR approvano tale decisione. EC sconsiglia l’implementazione di meccanismi di controllo diretto degli EH, poiché ciò comporterebbe interventi sul codice dei dispositivi stessi e un significativo aumento della complessità della piattaforma. Inoltre, secondo EC, tale funzionalità non genererebbe un incremento di business value sufficiente a giustificare l’effort richiesto. Su questo punto, RR si è detta concorde. L’ultima parte della riunione è stata dedicata ai requisiti più tecnici. Per quanto riguarda l’autenticazione alla piattaforma, l’email al team iT di RR ha confermato la presenza di un SSO da utilizzare per autentificare gli utenti, durante la fase finale del meeting è stata confermata l’esistenza di tale sistema. Inoltre tramite il SSO è possibile anche riconoscere la tipologia di utente e quindi distinguere un amministratore da un ospite. Per quanto riguarda la situazione dell’identificazione dei consumi, RR ha specificato che per l’accesso alle stanze, gli ospiti dispongono di tessere che vengono utilizzate sia per entrare in camera che per attivare la corrente. Viene fatto notare che invece l’acqua è utilizzabile anche se nessuna tessera viene inserita. Dovrà quindi essere sviluppato un sistema per suddividere i consumi nelle camere con più ospiti.
2. **Discussione delle CoS e user stories:** Come supporto ai requisiti sono state mostrate anche le CoS e user stories, che hanno avuto un riscontro positivo. Per quanto riguarda la CoS B3.1, per la quale non si era trovato un CoS adatto, RR ha evidenziato che la ragione per cui l’amministratore dovrebbe poter vedere la situazione generale degli EH risiede nella possibilità di monitorare sia le stanze, nel caso ci fossero stanze senza ospiti ma con vari EH attivi, sia le aree comuni e individuare consumi anomali, specie nelle ore notturne quando sono poco utilizzate. Si suggerisce quindi tale modifica:

   “Come amministratore voglio avere accesso alla mappa interattiva dei piani e delle zone così io che possa controllare lo stato del generale dei EH.”

   - CoS: l’amministratore può individuare sprechi dovuti a consumi causati da apparecchiature in funzione ma non utilizzate

   Per quanto riguarda le CoS generali del progetto, non legate ai requisiti, ma che definiscono i criteri di successo per RR, sono state state portare avanti dai rappresentanti di RR e dal PM, arrivando alle seguenti conclusioni:

- è fondamentale aumentare la consapevolezza degli studenti rispetto ai propri consumi. A tal fine, RR si aspetta sia un utilizzo della piattaforma da parte di tutti gli studenti, sia un’interazione frequente e continuativa nel tempo.
- è importante che la piattaforma sia intuitiva e apprezzata dagli studenti, così da facilitare l’adozione e contribuire ad aumentare le recensioni positive che RR riceve annualmente sui servizi offerti.
- le sanzioni legate all’eccesso di consumo rappresentano un danno sia per gli studenti, spesso in condizioni economiche delicate in quanto assegnatari di borsa, sia per l’ente, che deve poi esporre tali comportamenti nelle fasi di valutazione. Per questo motivo, la piattaforma deve supportare gli studenti nel monitorare i propri consumi, aiutandoli a non superare le soglie previste.
- l’aumento dei costi delle bollette registrato negli ultimi anni rappresenta uno dei principali fattori che hanno spinto alla richiesta del progetto. Si stima che una parte significativa di tali costi sia dovuta a sprechi, e che quindi l’introduzione della piattaforma possa contribuire a una riduzione dei consumi e, di conseguenza, a un risparmio economico sulle utenze.

### **Business requirement**
A seguito della riunione, il PM e l’architetto hanno modificato il documento contente i business requirements, apportando le seguenti modifiche:

- è stato rimosso il requisito out of scope
- è stato aggiunto il requisito sull’AI:
  8. La piattaforma deve fornire un'ottimizzazione dei consumi prevedendo il consumo futuro.
- sono stati aggiunti i seguenti requisiti sulla base delle indicazioni del PM:
9. La piattaforma deve permettere di gestire più residenze
10. La piattaforma deve fornire agli amministratori un elenco degli studenti indicizzato per consumi
11. La piattaforma deve notificare tempestivamente gli utenti quando i consumi i consumi predetti, tramite un sistema di allerta automatico.

### **CoS e user stories**
Oltre a modificare il CoS relativo alla mappa interattiva non sono state condotte altre analisi. Nel prossimo meeting verrano condotte ulteriori analisi per i requisiti B8, 9, 10 e 11\.
Per quanto riguarda i CoS di progetto è stata condotta una analisi seguendo i criteri S.M.A.R.T.

### **S.M.A.R.T.**
Come da processo aziendale, l’analisi dei criteri [S.M.A.R.T.](./appendici/smart-analysis) è stata divisa in analisi globale, sui macro obiettivi e locale sulle CoS di progetto.

### **POS**
Il PM scrive il [POS 0.2v](./appendici/pos-0-2v) inserendo i criteri di successo risultanti dall’analisi SMART. Inoltre è stata aggiornata la situazione to be per coprire i nuovi requisiti.

---
