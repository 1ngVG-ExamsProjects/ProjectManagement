# Riepilogo Sessione 3: “Pianificazione temporale”
## Partecipanti
- PM

In questa sessione il PM lavora in autonomia per svolgere l’analisi dei requisiti di risorse (Estimating Resource Requirements), che consente di elaborare la Resource Breakdown Structure (RBS). Successivamente realizza il Project Network Diagram per definire le dipendenze tra le varie attività. A partire da RBS e il PND elabora il WBS arricchito con predecessori, durata, data di inizio e data di fine e risorsa. Nella pianificazione delle risorse è stata tenuta in considerazione la disponibilità limitata del team, impegnato parallelamente in altri progetti: ciascun membro può dedicare indicativamente mezza giornata lavorativa (o poco più) al progetto. Inoltre è stata aggiunta l’attività “Test completo e meticoloso di tutto” da utilizzare come riserva nello scope bank. Nonostante sia abbastanza ridotta nei tempi, si stima che il progetto sarà completato prima della fine della costruzione delle residenze. Tuttavia, si è scelto di mantenere tempi di consegna rigidi, anche per garantire un livello di stress sul team ottimale per non allungare i temi. Dopo aver formalizzato stime e Gantt redige il cashflow e aggiorna il PDS. Infine, preparara il Project Proposal.

## Documenti prodotti
### **Estimating resource requirements e Resource Breakdown Structure:**
Per l’estimating resource requirements sono stati tenuti in considerazione:

- Persone:
  - Architetto: figura chiave nella progettazione dei microservizi e nella guida della reingegnerizzazione della piattaforma. Ha il compito di validare l’operato degli sviluppatori, producendo dei report che riassumano il suo feedback. Inoltre, essendo sempre informato sullo sviluppo del progetto, è in grado di intervenire tempestivamente in caso di possibili ritardi e criticità legate al backend.
  - Dev 1: Sviluppatore esperto in backend
  - Dev 2: Sviluppatore full stack, con competenze sia lato backend che frontend
  - Dev 3: Sviluppatore esperto in frontend
  - Tirocinante: Risorsa di supporto, impiegata in attività semplici o di assistenza operativa
  - Focus group: Gruppo di utenti, selezionati in fase di scoping, per valutare l'usabilità del frontend e fornire feedback utili al miglioramento dell'interfaccia e dell’esperienza utente.
- Facilities:
  - Le riunioni, non schedulate in anticipo in questa fase di pianificazione per mantenere un approccio agile, si svolgono presso la sala incontri di EcoConn. La prenotazione della sala è gestita internamente dal Project Manager, consentendo la pianificazione flessibile degli incontri durante lo svolgimento del progetto. La sala riunioni è dotata di lavagna, pennarelli, proiettore e un tavolo abbastanza largo per far lavorare più persone.
  - La sala incontri verrà utilizzata principalmente per:
    - Feedback con l’architetto per ogni microservizio
    - Feedback con i focus group
    - Meeting
    - Meeting in preparazione ai deliverables
- Equipment:
  - Lavagna
  - Proiettore
  - Computer per mostrare i risultati
  - Computer gli sviluppatori

Da tali considerazioni il PM sviluppa il [Resource Breakdown Structure]().

### **Project Network Diagram:**
Il PM sviluppa il [PND]() a partire dalla Resource Breakdown Structure (RBS) e dalla Work Breakdown Structure (WBS) andando a stabilire le dipendenze tra le attività.

### **WBS con le risorse allocate**
Utilizando Notion, il PM sviluppa la [WBS con le risorse allocate](https://pollen-punch-1ce.notion.site/220b3342170f80408bf6e2227b8c703f?v=220b3342170f8070a775000c066447dd) integrando nella WBS con le stime dell’effort le informazioni provenienti dal Resource Breakdown Structure e dal PND in modo tale da definire predecessori, durata, data di inizio e data di fine e risorsa. Una volta arricchite tutte le attività , tramite Notion è possibile generare:

- La kanban board con le attività da utilizzare in fase di launching
- Il grafico che mostra le attività completate, in corso e da avviare, utile per il monitoraggio dello stato di progetto
- Il diagramma di Gantt utilizzato sia per verificare la pianificazione sia per monitorare i tempi.

### **Cashflow:**
Tramite la WBS aggiornata e il Gantt è possibile stimare i costi. La redazione del [cashflow]() tiene conto dei seguenti aspetti:

- Stipendi sviluppatori
- Stipendi Architetto e PM
- Risorse aziendali per lo sviluppo: che comprendono la sede, i materiali, le licenze, le utenze e tutte le utilities necessarie.
- Installazione del software: comprensivo di stipendi sviluppatori e costi di trasferta

Da tale analisi risulta che il progetto si concluderà senza perdite economiche, pertanto eventuali ritardi successivi all'esaurimento della scope bank non rappresentano un rischio critico.

### **Project Proposal:**
Infine il PM redige il [Project Proposal]() che dovrà essere approvato prima dall’AD e poi degli stakehoders.
---
