# **Project Proposal**


EcoDomus v2.0
Preparato da: \[PM\]
Data: 02/04/2025
Versione 1.0

1. # Sommario

Il Progetto consiste nell’estensione e miglioramento della piattaforma EcoDomus, prodotto già presente nel catalogo di EcoConn. In particolare si tratta di una nuova piattaforma strutturata su microservizi per la gestione dei consumi di residenze per studenti.
Il progetto nasce da una richiesta di RR che sta attualmente costruendo tre nuove residenze universitarie, nelle quali intende installare dispositivi EH forniti da EC per monitorare in modo dettagliato i consumi di acqua, gas ed energia elettrica. La scelta è motivata da una duplice esigenza: da un lato, ogni studente ha a disposizione un quantitativo annuo di risorse, e il superamento di tale soglia comporta una sanzione economica; dall’altro, RR vuole promuovere una maggiore consapevolezza nei confronti dell’uso delle risorse.

## Scopo:

RR vuole  aumentare la consapevolezza degli studenti nella gestione delle risorse che spera comporti una riduzione del 15% dei consumi energetici totali nel primo anno, e una riduzione del 50% degli studenti che superano la soglia nel primo anno; numeri che si aspetta migliorare con il passare del tempo.

## Business case:

Per EcoConn il progetto è favorevole in quanto permette di ristrutturare il software EcoDomus creando un’architettura a microservizi e facilmente espandibile.  Con l’aggiunta delle nuove funzionalità inoltre riuscirebbe ad accedere ad un nuovo segmento di mercato: condomini ed edifici plurifamiliari.

2. # Background e Problema

## Contesto:

Il sistema attuale non permette la gestione di strutture con più utenti e quindi una separazione dei consumi in base alla zona; inoltre non è presente un sistema di previsione dei consumi futuri.
EcoDomus è una piattaforma web progettata per la visualizzazione e il monitoraggio dei dati generati dai EH. Sviluppata internamente dal reparto software, la piattaforma è operativa da quattro mesi ed è attualmente utilizzata in ambiente domestico, tramite l’installazione di un mini server presso le abitazioni dei clienti. Nel mini server è installata la versione più aggiornata di EcoDomus ed include un sistema di comunicazione integrato che consente di interfacciarsi con i dispositivi EH. La piattaforma offre una dashboard che consente di visualizzare in tempo reale i consumi attuali dei principali consumi (gas, luce e acqua), accompagnata da grafici interattivi che permettono di analizzare l’andamento dei consumi. Oltre alla dashboard, la piattaforma include una sezione dedicata alla gestione degli EH registrati, attraverso la quale l’utente può:

- Registrare nuovi EH rilevati dal mini server assegnandogli un nome
- Modificare il nome degli EH registrati
- Eliminare gli EH non più attivi

Inizialmente, ogni piattaforma viene configurata con un account con credenziali di default, modificabili dal pannello impostazioni della piattaforma.

## Criticità attuali
Dato il set di skill del reparto software di EC, EcoDomus è stata sviluppata con lo stack MEVN (MongoDB, Express, Vue e Node) ed è stato sviluppato come monolite principalmente per ragioni legate ai tempi di sviluppo e all’assenza di una figura dedicata all’architettura software all'interno del team; di conseguenza sarà importante dedicare del tempo per ristrutturare l’architettura.

## Opportunità

Il progetto consiste nella realizzazione di un nuovo software modulare che ci permette di estenderlo e mantenerlo in modo semplice, migliorando anche la qualità del servizio attualmente fornito; inoltre da accesso ad un nuovo e ampio segmento di mercato.

3. # Obiettivo e Scope

## Obiettivi SMART:

1. Integrare l’autenticazione con il sistema di autenticazione RR per agevolare l’accesso e per avere ruoli differenziati.
2. Sviluppare un editor per caricare/mappare piani, zone e dispositivi EH.
3. Fornire visualizzazioni real-time e storiche dei consumi, filtrate per piano/zona.
4. Notificare possibili eccessi.
5. Fornire previsioni sui consumi futuri
6. Creare una piattaforma accattivante e facile da utilizzare.

## In Scope:

- Sviluppo frontend e backend.
- Integrazione con dispositivi EH tramite API esistenti.
- Riuso moduli EcoDomus.

## Out of Scope:

- Sviluppo hardware dispositivi EH.
- Formazione del personale RR.

4. # Solution Overview

## Tecnologie:

- Git e GitHub per CI/CD
- Si mantengono le stesse tecnologie utilizzate per la realizzazione di EcoDomus (MEVN (MongoDB, Express, Vue e Node)
- Architettura a microservizi con l’utilizzo di Rest API
- Docker

## Innovazione:

- La componente innovativa di questo progetto si trova soprattutto nella parte di forecasting, che effettuerà previsioni sui consumi futuri grazie ad un algoritmo di AI dedicato.

5. # Deliverable finale

Al termine del progetto il cliente riceverà:

- Software
- Documentazione
- Installazione

6. # Project Timeline & Milestone

**Project timeline:** \[[Link](https://pollen-punch-1ce.notion.site/220b3342170f80408bf6e2227b8c703f?v=220b3342170f8070a775000c066447dd)\]

| Data | Milestone |
| :---- | :---- |
| 24/04/2025 | Accesso con SSO e visualizzazione dati amministratori e ospiti |
| 07/05/2025 | Configurazione residenza |
| 09/05/2025 | Visualizzazione consumi futuri ospiti |
| Dal 16/05/2025 in accordo con RR | Risultato finale |

7. # Budget e risorse

## Budget:

Il Budget per il progetto (deciso ed approvato con il cliente) è di 55.000€ e comprende:

- Stipendio di tutti i componenti del team per le ore occupate nello sviluppo
- Attrezzature e spazi utilizzati
- Licenze relative ai software necessari

## Risorse:

- PM
- Architetto: Contratto a chiamata per riprogettare EcoDomus e supportare il team nello sviluppo
- Team di sviluppo:
  - Dev1: Esperto Backend \[Auth, Forecasting, Test finale\]
  - Dev2: Full Stack \[User, Monitoring, Mansion\]
  - Dev3: Esperto Frontend \[Map, Supporto\]
  - Tirocinante: \[Alerting, Supporto\]

8. # Stakeholder and Communication Plan

Lavorando in modo agile lo stakeholder potrà interagire con EcoConn in 2 modi:

- Nelle fasi di approvazione del frontend per mano del focus group
- Alla consegna delle milestone

9. # Metriche di successo

Al fine di considerare il progetto ultimato e il cliente soddisfatto sono state sottoscritte le seguenti metriche di successo e KPI:

- 70% degli utenti attivi mensili durante tutto l’anno
- Accesso medio \>= 2 volte a settimana durante tutto l’anno
- 90% degli utenti soddisfatti (survey post-deploy) a fine anno.
- Aumento del 25% delle recensioni positive a fine anno.
- Punteggio medio di soddisfazione \> 4 su 5 nei sondaggi interni a fine anno
- Precisione \>= 85% sulle previsioni mensili/annuali durante tutto l’anno
- Riduzione del 15% dei consumi energetici totali nel primo anno.
- Riduzione del 50% degli studenti che superano la soglia nel primo anno.

10. # Approval

Approvato da:
	Ernesto Conti, CEO di EcoConn, Timbro \[03/04/2025\]
