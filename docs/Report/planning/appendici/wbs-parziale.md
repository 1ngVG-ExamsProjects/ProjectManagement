# **WBS (parziale)**

# **Work Breakdown Structure**

## Sommario:

[**Auth microservice	1**](#auth-microservice)

[**User microservice	2**](#user-microservice)

[**Map microservice	3**](#map-microservice)

| Auth microservice |
| :---- |

| \#1 Progettazione |
| :---- |
| Domain Driven Design Revisione del glossario Revisione del event storming Context map Revisione indipendenza dagli altri contesti Definizione degli eventi e comandi Definizione degli eventi interni ed esterni Definizione dei comandi Definizione dell’architettura logica Definizione delle componenti Creazione dei UML Progettazione architettura Creazione dei UML Design API |

| \#2 Setup ambiente di lavoro |
| :---- |
| Creazione repository Setup descrizione e licenza Setup build automation Setup branches Setup github page di documentazione Setup CI/CD Setup git actions Setup git hooks Setup semantic release Setup docker Setup documentazione Inserire documenti di progettazione Setup documentazione API  Definizione delle regole per la qualità del codice Definizione regole commit Definizione regole formattazione del codice Definizione regole commenti per la generazione automatica della documentazione |

| \#3 Backend |
| :---- |
| Sviluppo delle componenti del dominio Sviluppo classi e interfacce dei elementi del modello di dominio Il sistema deve permettere la registrazione di utenti Registrazione degli amministratori al primo login Import degli ospiti dai database di RR  Il sistema deve permettere l’accesso alla piattaforma agli utenti Implementazione della richiesta al SSO di RR per ottenere l’accesso al login Implementazione dell’analisi del token di accesso dal SSO di RR Test di verifica di collegamento al SSO Funzionalità di logout sicuro Implementazione meccanismo per invalidare la sessione corrente Sistema di emergenza per il login degli amministratori Configurazione credenziali di default per gli amministratori Sistema di accesso in caso di mancata connessone al SSO di RR Assegnazione automatica dei ruoli (Amministratore/Ospite) in base alle credenziali Implementazione dell’analisi del token di accesso dal SSO di RR per la verifica del ruolo dell’utente Test di verifica del ruolo del token |

| \#4 Frontend |
| :---- |
| Implementazione pagina di login Implementazione pagina di login di emergenza Implementazione funzionalità di verifica del ruolo |

| User microservice |
| :---- |

| \#1 Progettazione |
| :---- |
| Domain Driven Design Revisione del glossario Revisione del event storming Context map Revisione indipendenza dagli altri contesti Definizione degli eventi e comandi Definizione degli eventi interni ed esterni Definizione dei comandi Definizione dell’architettura logica Definizione delle componenti Creazione dei UML Progettazione architettura Creazione dei UML Design API |

| \#2 Setup ambiente di lavoro |
| :---- |
| Creazione repository Setup descrizione e licenza Setup build automation Setup branches Setup github page di documentazione Setup CI/CD Setup git actions Setup git hooks Setup semantic release Setup docker Setup documentazione Inserire documenti di progettazione Setup documentazione API  Definizione delle regole per la qualità del codice Definizione regole commit Definizione regole formattazione del codice Definizione regole commenti per la generazione automatica della documentazione |

| \#3 Backend |
| :---- |
| Sviluppo delle componenti del dominio Sviluppo classi e interfacce dei elementi del modello di dominio Il sistema deve permettere gestire la stanza dell’ospite Implementazione dell’assegnazione della residenza Implementazione dell’assegnazione della stanza Implementazione modifica della residenza Implementazione modifica della stanza  |

| \#4 Frontend |
| :---- |
| \------------------ |

| Map microservice |
| :---- |

| \#1 Progettazione |
| :---- |
| Domain Driven Design Revisione del glossario Revisione del event storming Context map Revisione indipendenza dagli altri contesti Definizione degli eventi e comandi Definizione degli eventi interni ed esterni Definizione dei comandi Definizione dell’architettura logica Definizione delle componenti Creazione dei UML Progettazione architettura Creazione dei UML Design API |

| \#2 Setup ambiente di lavoro |
| :---- |
| Creazione repository Setup descrizione e licenza Setup build automation Setup branches Setup github page di documentazione Setup CI/CD Setup git actions Setup git hooks Setup semantic release Setup docker Setup documentazione Inserire documenti di progettazione Setup documentazione API  Definizione delle regole per la qualità del codice Definizione regole commit Definizione regole formattazione del codice Definizione regole commenti per la generazione automatica della documentazione |

| \#3 Backend |
| :---- |
| Sviluppo delle componenti del dominio Sviluppo classi e interfacce dei elementi del modello di dominio Il sistema deve permettere la creazioni di piani Implementazione caricamento della piantina Implementazione inserimento delle informazioni del piano Test creazione e corretto salvataggio di un piano Test per verificare il corretto formato della piantina Il sistema deve permettere di gestire un piano Implementazione modifica delle informazioni Implementazione rimozione del piano.  Test modifica e rimozione di un piano Il sistema deve permettere di creare una zona Implementazione salvataggio del poligono Implementazione inserimento delle informazioni della zona Test creazione e corretto salvataggio di una zona Il sistema deve permettere di associare una zona ad un ospite Comunicazione con il microservizio utenti per ottenere tutti gli utenti della residenza Comunicazione con il micro servizio utenti per associare la zona Test comunicazione con il microservizio utenti Test per verificare il corretto salvataggio dell’assegnazione Il sistema deve permettere di gestire una zona Implementazione modifica delle informazioni Implementazione rimozione della zona.  Test modifica e rimozione di una zona Il sistema deve permettere di posizionare gli EH Comunicazione con il microservizio EH per ottenere tutti gli EH Comunicazione con il microservizio EH per associare una zona Test comunicazione con il microservizio EH  Test per verificare il corretto salvataggio dell’assegnazione Il sistema deve permettere di modificare gli EH Implementazione modifica della posizione Implementazione rimozione del EH Test modifica e rimozione Test di verifica del microservizio Verifica rispetto dei requisiti Verifica architettura  |

| \#4 Frontend |
| :---- |
| Implementazione pagina di setup iniziale Implementazione step indicator Implementazione navigazione tra gli step Implementazione pagina di configurazione dei piani Implementazione caricamento piantina Implementazione form per inserimento delle informazioni Implementazione modifica del piano Implementazione eliminazione del piano Test di verifica del formato della piantina Testi di verifica delle informazioni Implementazione pagina di configurazione delle zone Implementazione editor per creare poligoni all’interno della piantina Implementazione form per inserimento delle informazioni Implementazione modifica della zona Implementazione editor per rimuovere i poligoni dalla piantina Implementazione eliminazione della zona Testi di verifica delle informazioni Implementazione recupero degli ospiti Implementazione associazione zona ad un ospite Implementazione pagina di configurazione degli EH Implementazione recupero degli EH Implementazione editor per posizionare elementi nella piantina Implementazione editor per rimuovere elementi dalla piantina Test di integrazione con il backend Test con focus group per verificare l’UI e UX |
