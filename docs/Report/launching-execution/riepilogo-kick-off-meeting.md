# Riepilogo Kick-off Meeting
Partecipanti: PM, team di sviluppo (tra cui tecnografo), stakeholder (due rappresentanti RR e rappresentante del reparto IT interno di RR).

Agenda:

1. **Introduzione:** Nei primi minuti del meeting il Project Manager fa un breve discorso, andando ad illustrare a tutti i partecipanti come si svolgerà il meeting.
2. **Presentazioni:** Il primo slot del meeting è dedicato alle presentazioni, con l’obiettivo di far conoscere tra loro tutti i partecipanti e introdurre il progetto stesso:
   1. **Cliente:** Il PM lascia la parola ai rappresentante di RR, che descrivono lo stato attuale, la vision dell’azienda e i suoi obiettivi: *“Red Ribbon (RR) è un ente che si occupa di diritto allo studio e che gestisce numerose residenze universitarie; negli ultimi anni abbiamo rilevato consumi energetici e idrici molto elevati all’interno delle strutture. Con il sospetto che ciò sia dovuto a potenziali sprechi, abbiamo deciso di monitorare in modo più dettagliato i consumi, così da ridurre gli sprechi. ”*
   2. **Aspetti rilevanti:** Il rappresentante di RR continua specificando che il progetto è per le nuove residenze (3), attualmente in costruzione, e ribadisce l’importanza dell’essere pronti per l’inizio del nuovo anno accademico e della UX degli ospite delle strutture, poiché è necessario che incentivi l’utilizzo della piattaforma.
   3. **Progetto:** In questa fase del meeting, mantiene ancora la parola lo stakeholder per presentare il progetto dal suo punto di vista; in seguito il PM lo traduce in termini di sviluppo software dal punto di vista di EcoConn.
      1. **Committente:** Si richiede un'evoluzione di EcoDomus, che permetta di visualizzare i consumi divisi per piani e zone, così da identificare più facilmente eventuali sprechi. Inoltre si vuole dare la possibilità agli studenti di visualizzare i propri consumi assegnando loro una zona in modo da promuovere una maggiore consapevolezza.
      2. **PM:** Si tratta di una ristrutturazione di EcoDomus, implementando il nuovo software con un’architettura a microservizi che garantisca le  funzionalità descritte nelle User Stories e RBS durante il processo di scoping.
   4. **Membri:** Il PM a questo punto introduce la figura del software Architect al team di sviluppo e ad RR, e successivamente cede la parola ai membri del team per permettere loro di presentarsi specificando il ruolo che hanno avuto nello sviluppo di EcoDomus.
3. **Definizione del Project Definition Statement:** Viene discusso il PDS prodotto nel Planning.
- In questa parte del meeting lo stakeholder abbandona il meeting e saluta i PM e il team.
4. **Stabilire le regole operative:** Vengono discusse le regole operative seguite all'interno di EcoConn.
5. **Integrazione disponibilità membri del team:** Al momento EC e suoi sviluppatori stanno lavorando ad altri progetti interni, come il mantenimento di EcoDomus e assistenza al cliente, perciò possono gestire i loro task in modo flessibile durante la settimana, e durante la giornata lavorativa. Viene perciò confermata la disponibilità di tutti i membri nel dedicare metà della loro giornata lavorativa al progetto.
6. **Identificare i work packages:**
   1. **Formazione team**
   2. **Shared Kernel**
   3. **Infrastruttura Frontend di base**
   4. **Accesso con SSO e visualizzazione dati amministratori e ospiti**
- Auth microservice
- Test SSO RR
- Progettazione
- Setup
- Backend
- Approvazione backend
- Frontend
- Integrazione Backend e Frontend
  - User microservice
    - Progettazione
      - Setup
      - Backend
      - Approvazione backend
      - Integrazione con Auth microservice
    - Map microservice
      - Progettazione
      - Setup
      - Backend
      - Approvazione backend
      - Approvazione frontend
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
  5. **Visualizzazione consumi futuri ospiti.**
- Forecasting microservice
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
  6. **Configurazione residenza**
- Map microservice
  - Sviluppo editor
  - Frontend
  - Integrazione Backend e Frontend
  7. **Risultato finale**
- Mansion microservice
- Progettazione
- Setup
- Backend
  - Approvazione backend
- Frontend
- Integrazione Backend e Frontend
- Integrazione con Map microservice
  8. **Installazione**

---
