# **RBS**

# **Requirements Breakdown Structure**

# Business requirements

1. La piattaforma deve prevedere due ruoli distinti, Amministratore e Ospite, ciascuno con viste e permessi differenziati, in base alle rispettive responsabilità e ambiti di accesso.
2. L’amministratore deve poter configurare una residenza definendo i piani, le zone e gli EH
3. La piattaforma deve permettere la visualizzazione di una mappa interattiva delle piantine e delle zone con lo stato in tempo reale dei EH
4. La piattaforma deve fornire un monitoraggio in tempo reale dei consumi attuali delle utenze.
5. La piattaforma deve fornire metriche di consumo in tempo reale relative alle utenze.
6. La piattaforma deve consentire l’accesso ai dati storici di consumo.
7. La piattaforma deve consentire il monitoraggio dei consumi sia globali che per singoli piani e singole zone.
8. La piattaforma deve fornire un'ottimizzazione dei consumi prevedendo il consumo futuro.
9. La piattaforma deve permettere di gestire più residenze
10. La piattaforma deve fornire agli amministratori un elenco degli studenti indicizzato per consumi
11. La piattaforma deve notificare tempestivamente gli utenti quando i consumi i consumi predetti, tramite un sistema di allerta automatico.


# RBS

| Legenda: |
| :---- |
| Goal Requirement Function Feature |


1) **(B1) La piattaforma deve prevedere due utenti distinti, Amministratore e Ospite, ciascuno con viste e permessi differenziati, in base alle rispettive responsabilità e ambiti di accesso.**
   1) Differenziazione dei ruoli (Amministratore/Ospite)
      1) Autenticazione
         1) Il sistema deve permettere l’accesso alla piattaforma agli utenti
            1) Collegarsi al SSO di RR
         2)  Funzionalità di logout sicuro.
         3) Sistema di emergenza per il login degli amministratori
      2) Autorizzazione
         1) Assegnazione automatica dei ruoli (Amministratore/Ospite) in base alle credenziali
      3) Permessi
         1) Dashboard personalizzata in base al ruolo:
            1) **Ospite**: Visualizzazione della propria camera e dei propri consumi.
            2) **Amministratore**: Accesso completo alla configurazione e al monitoraggio.



2) **(B2) L’amministratore deve poter configurare una residenza definendo i piani, le zone e gli EH**
   1) Definizione della residenza
      1) Il sistema deve permettere la creazione di una nuova residenza
      2) Il sistema deve permettere la gestione delle residenze
   2) Definizione dei piani
      1) Il sistema deve permettere la creazione di una nuovo piano
   3) Definizione delle zone
      1) Il sistema deve permettere la creazione di una nuova zona
      2) Il sistema deve permettere l’assegnazione di una zona ad un ospite
   4) Definizione EH
      1) Collegamento dei dispositivi EH al sistema.
      2) Posizionamento degli EH sulle mappe per riferimento spaziale.





3) **Visualizzazione interattiva dei dati**
   1) **(B3)** Mappa interattiva con stato EH in tempo reale
      1) Monitoraggio spaziale
         1) **Amministratore**:
            1) Accesso alla mappa completa di tutti i piani/zone per controllo generale.
         2) **Ospite**:
            1) Visualizzazione della mappa della zona assegnata con dettaglio dei consumi per EH.
            2) Allerta per consumi anomali.

4) **Monitoraggio dei consumi**
   1)  Dati in tempo reale e storici
      1) Analisi energetica
         1) **(B4)** Sistema di raccolta dati dagli EH
         2) **(B5)** Metriche di consumo in tempo reale per utenze.
         3) **(B6)** Accesso ai dati storici dei consumi.
         4) **(B7) Amministratore**:
            1) Dashboard con panoramica globale dei consumi della residenza.
            2) Filtri per visualizzare dati per singolo piano/zona.
   2) **(B10)** Tabulato indicizzato dei consumi per ogni Ospite
5) **(B8) Previsioni consumi futuri**
6) **(B9) Gestione di più residenze**
   1) Interfaccia con panoramica sulle residenze
   2) Possibilità di selezione della residenza
7) **(B11) Sistema di notifiche**
   1) Notifiche broadcast per comunicazioni
   2) Notifiche Mirate

**Riepilogo requisiti soddisfatti da EcoDomus con riferimento alle User Stories**
\- **B4-B5-B6** (Monitoraggio consumi in tempo reale, metriche, dati storici) → Coperti da EcoDomus.
\- **B7** (Monitoraggio consumi globali e per aree) → Parzialmente coperto da EcoDomus, ma richiede personalizzazione per piani/zone.
