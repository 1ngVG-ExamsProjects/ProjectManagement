# Riepilogo Sessione 2: “Work Breakdown Structure con estimating task duration”
## Partecipanti
- PM
- Architetto
- Team di sviluppo

La sessione ha come obiettivo la stesura della WBS con i relativi effort delle task, espressi in ore uomo. È stata suddivisa in due fasi:

- Nella prima, il PM e l’architetto si riuniscono per definire lo scheletro di base della WBS. In questa fase, l’architetto assume il ruolo di consulente nella pianificazione, fornendo template basati su un’architettura a microservizi. Successivamente, sempre con il supporto dell’architetto in quanto esperto, si procede alla stima della durata dei task riguardanti formazione, parti comuni dei microservizi e le parti di lavoro assegnate all’architetto stesso.
- Nella seconda fase, il PM lavora con il team di sviluppo per finire la WBS per le attività e task dei microservizi. Per massimizzare l’efficenza, sono stati definiti i task solo delle parti nuove mentre per le parti relative a requisiti soddisfatti da EcoDomus sono state solamente definite le attività. Allo stesso modo, per la stima della durata dei task sono stati considerati solo i requisiti nuovi mentre per i restanti è stata fatta una stima generale sull’attività. Tali stime sono state fatte seguendo la Delphi technique utilizzando il tool “Typeform”.

## Documenti prodotti
### **Scheletro WBS**
L’architetto ha fornito un template per definire lo [scheletro della WBS](). Il template include le seguenti macro-attività:

- **Formazione:** attività volte a far ottenere al team di sviluppo le competenze sulle architetture a microservizi e rafforzare le conoscenze degli strumenti di CI/CD.
- **Shared kernel**: componente sviluppato dall’Architetto con il supporto del PM, che conterrà definizioni condivise come gli eventi di dominio e altre risorse comuni a tutti i microservizi.
- **Frontend:** attività relative allo sviluppo dello scheletro frontend della piattaforma, comprendenti la realizzazione dei template grafici, il setup degli ambienti di sviluppo, la configurazione della connessione con i backend e la strutturazione dei componenti client.
- **Installazione della piattaforma:** attività di deployment e messa in opera dell’intera piattaforma
- **Template per ogni microservizio**:
  - Progettazione
  - Setup ambiente di lavoro
  - Backend
  - Frontend
  - Integrazione

### **Scheletro WBS con estimating task duration**
Dopo aver definito lo scheletro della WBS, sono state aggiunte le stime di durata per ciascun task per creare un [WBS arricchito:]()

- Per quanto riguarda la formazione, l’architetto stima un impegno di circa 8 ore per ciascun sviluppatore.
- Lo sviluppo del kernel stima che richiederà circa 16 ore.
- In merito alla fase di progettazione, l’architetto fornisce una stima più dettagliata, suddividendo le attività specifiche. Considerando che alcuni microservizi potrebbero richiedere più tempo mentre altri meno, ha stimato una media di 6.5 ore per ciascun microservizio.
- Per il setup dell’ambiente di lavoro è stimato in 5.5 ore.
- Infine stima 8 ore per ciascuna installazione della piattaforma in una residenza.

### **WBS completa**
Finita la sessione con l’architetto il PM ha lavorato con il team per definire la WBS completa. Sono parti definendo le attività dei microservizi con funzionalità non presenti nella versione attuale di EcoDomus, in particolare per i microservizi “Auth”, “User” e “Map” è stata definita la [WBS]() completa sia di attività che di task seguendo il template fornito dall’architetto. Successivamente sono state definite anche le attività dei restati microservizi e ove necessario sono scesci più nel dettaglio per definire anche le task. La WBS completa (sotto il punto di vista delle attività) avrà la forma:

- Formazione dev
- Shared kernel
- Frontend
- Auth microservice:
- Test SSO RR
- Progettazione
- Setup
- Backend
- Approvazione backend
- Frontend
- Integrazione Backend e Frontend
- User microservice:
  - Progettazione
  - Setup
  - Backend
  - Approvazione backend
  - Integrazione con Auth microservice
- Map microservice:
- Progettazione
- Setup
- Backend
  - Approvazione backend
- Frontend
- Approvazione frontend
- Sviluppo editor
- Integrazione Backend e Frontend
- Integrazione con Auth microservice
- Integrazione con User microservice
- Monitoring microservice
- Progettazione
- Setup
- Backend
  - Approvazione backend
- Frontend
  - Approvazione frontend
- Integrazione Backend e Frontend
- Integrazione con User microservice
-  Forecasting microservice
- Progettazione
- Setup
- Sviluppo algoritmo di forecasting
- Backend
- Frontend
  - Approvazione backend
- Integrazione Backend e Frontend
- Integrazione con Monitoring microservice
- Integrazione con User microservice
- Alerting microservice
- Progettazione
- Setup
- Backend
  - Approvazione backend
- Frontend
  - Approvazione frontend
- Integrazione Backend e Frontend
- Integrazione con Forecasting microservice
- Mansion microservice
- Progettazione
- Setup
- Backend
  - Approvazione backend
- Frontend
- Integrazione Backend e Frontend
- Integrazione con Map microservice
- Installazione

### **WBS con estimating task duration**
Dopo aver definito la WBS, il team di sviluppo ha svolto l’attività di [estimating task duration](), definendo le stime di durata per ciascun task mediante la tecnica Delphi.

---
