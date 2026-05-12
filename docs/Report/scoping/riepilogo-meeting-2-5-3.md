# Riepilogo meeting 2.5.3: “Analisi SWOT e prototipazione”
## Partecipanti
- PM
- Team di sviluppo

In questa ultima parte del meeting il PM modifica la SMART analysis, per introdurre il concetto di microservizio e riorganizzare l’analisi globale, e redige la SWOT analysis mentre il team di sviluppo scrive i use cases definiti nella parte di meeting precedente e realizza a partire da essi i mockup. In seguito, PM e team di sviluppo si riuniscono per confrontarsi sui risultati.

## Documenti prodotti
### **SWOT analysis**
Per supportare la fase di analisi degli obiettivi, la quale richiede principalmente l’identificazione del business value e l’analisi dei rischi, è stata fatta la [SWOT analysis](./appendici/swot-analysis).

### **Use Cases**
Qui sotto vengono riportati alcuni use cases sviluppati durante il meeting.

1.  **Creazione zona sulla piantina durante la configurazione**
- Attore: Amministratore
- Descrizione: L’amministratore crea delle zone disegnando poligoni sulla piantina precedentemente caricata, assegnando un nome a ciascuna zona.
- Trigger: L’amministratore autenticato accede alla piattaforma quando si trova nella fase "Crea Zone" del processo di configurazione.
- Precondizioni:
  - L’amministratore è autenticato ed è nel processo di configurazione.
  - La piantina in formato SVG è stata caricata correttamente nel sistema.
- Postcondizioni:
  - Una nuova zona viene aggiunta alla piantina con una forma e un nome.
- Scenario Principale di Successo:
1. L’amministratore accede alla pagina relativa alla fase "Crea Zona".
2. L’amministratore clicca su “Aggiungi Nuova Zona”.
3. Il sistema apre un modulo per la creazione della zona.
4. L’amministratore disegna un poligono sulla mappa.
5. L’amministratore inserisce il nome della zona.
6. L’amministratore clicca su “Crea”.
7. Il sistema valida le informazioni inserite.
8. Il sistema aggiunge la zona alla piantina.
9. Il sistema salva la zona e aggiorna la piantina.
- Percorsi Alternativi:
  - Al punto 4, l’amministratore può selezionare uno strumento di disegno prima di disegnare.
  - Tra il punto 4 e 5, l’amministratore può ridimensionare o eliminare il poligono disegnato per crearne uno nuovo.
- Eccezioni:
  - Sovrapposizione: Se la zona disegnata si sovrappone a una esistente, il sistema mostra un messaggio di errore e blocca la conferma finché il problema non è risolto
2. **Visualizza Stato EH sulla mappa interattiva**
- Attore: Ospite autenticato
- Descrizione: L’utente consulta la mappa interattiva nella dashboard per monitorare in tempo reale lo stato dei EH.
- Trigger: L’utente autenticato accede alla dashboard.
- Precondizioni:
  - L’utente è autenticato.
  - L’amministratore ha assegnato una zona all’ospite
  - L’amministratore ha configurato gli EH della stanza dell’ospite
- Scenario principale:
  -  L’utente accede alla dashboard.
  - Il sistema mostra la piantina con zone e dispositivi EH.
  - Ogni EH è rappresentato da un’icona con indicatore di stato in tempo reale (verde se è attivo, rosso altrimenti).
  - L’utente clicca su un EH per vedere quanto sta consumando attualmente.

### **Mockup**
Dai use cases sono stati prodotti dei [mockup](./appendici/mockup) per supportare la fase di review del focus group.

### **POS**
Il PM scrive il [POS 0.2.5v](./appendici/pos-0-2-5v) inserendo l’analisi degli obiettivi.
---
