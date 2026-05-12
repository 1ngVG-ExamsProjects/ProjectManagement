# **RASCI matrix**


## Legenda:

**R: Responsible**: Responsabile dell’attività
**A: Accountable**: Incaricato dell’approvazione del risultato dell’attività
**S: Support**: Affianca il responsabile dell’attività. Tra i due sviluppatori coinvolti, assume il ruolo di supporto quello con minore esperienza o competenza nell’ambito specifico del task
**C: Consulted**: Per le attività di integrazione, gli sviluppatori che hanno realizzato il microservizio interessato forniscono supporto tecnico e chiarimenti.
**I: Informed**: Membro che deve essere tenuto informato sullo stato di avanzamento.

# Auth microservice

|  | Guglielmo Cancelli | Marco Zuccarini | Stefano Lavori | Lorenzo Pagina | Architetto | PM | FG\#1 | FC\#2 |
| ----- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Test SSO RR | R  |  |  |  |  | I |  |  |
| Progettazione  |  |  |  |  | R  | I |  |  |
| Setup  | R  |  |  |  | C | I |  |  |
| Backend  | R  |  | S |  | C,A | I |  |  |
| Frontend  | R  |  | C |  | C | I |  |  |
| Integrazione Backend e Frontend | R  |  | S |  | I,C | I |  |  |

# User microservice

|  | Guglielmo Cancelli | Marco Zuccarini | Stefano Lavori | Lorenzo Pagina | Architetto | PM | FG\#1 | FC\#2 |
| ----- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Progettazione  |  |  |  |  | R  | I |  |  |
| Setup  |  | R  |  |  | C | I |  |  |
| Backend  |  | R  |  |  | C,A | I |  |  |
| Integrazione con Auth | C | R  |  |  | I,C | I |  |  |

# Map

|  | Guglielmo Cancelli | Marco Zuccarini | Stefano Lavori | Lorenzo Pagina | Architetto | PM | FG\#1 | FC\#2 |
| ----- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Progettazione  |  |  |  |  | R  | I |  |  |
| Setup  |  |  | R  |  | C | I |  |  |
| Backend  | R  |  | S |  | C,A | I |  |  |
| Frontend  | S |  | R  |  | C | I | A |  |
| Sviluppo editor |  |  | R  |  |  | I |  |  |
| Integrazione Backend e Frontend | C |  | R  |  | I,C | I |  |  |
| Integrazione con Auth microservice | C |  | R  |  | I,C | I |  |  |
| Integrazione con User microservice |  | C | R  |  | I,C | I |  |  |

# Monitoring

|  | Guglielmo Cancelli | Marco Zuccarini | Stefano Lavori | Lorenzo Pagina | Architetto | PM | FG\#1 | FC\#2 |
| ----- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Progettazione  |  |  |  |  | R  | I |  |  |
| Setup  |  | R  |  |  | C | I |  |  |
| Backend  |  | R  |  | S | C,A | I |  |  |
| Frontend  |  | R  |  |  | C | I | A | A |
| Integrazione Backend e Frontend |  | C |  | R  | I,C | I |  |  |
| Integrazione con User microservice |  | C |  | R  | I,C | I |  |  |

# Forecasting

|  | Guglielmo Cancelli | Marco Zuccarini | Stefano Lavori | Lorenzo Pagina | Architetto | PM | FG\#1 | FC\#2 |
| ----- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Progettazione  |  |  |  |  | R  | I |  |  |
| Setup  |  |  |  | R  | C | I |  |  |
| Sviluppo algoritmo di forecasting | R  | S | S |  |  | I |  |  |
| Backend  | R  |  |  | S | C, A | I |  |  |
| Frontend  | R  |  |  |  | C | I | A | A |
| Integrazione Backend e Frontend | R  |  |  | C | C | I |  |  |
| Integrazione con Monitoring microservice | R  | C |  | C | I,C | I |  |  |
| Integrazione con User microservice | R  | C |  |  | I,C | I |  |  |

# Alerting

|  | Guglielmo Cancelli | Marco Zuccarini | Stefano Lavori | Lorenzo Pagina | Architetto | PM | FG\#1 | FC\#2 |
| ----- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Progettazione  |  |  |  |  | R  | I |  |  |
| Setup  |  |  |  | R  | C | I |  |  |
| Backend  | R  |  |  | S | C,A | I |  |  |
| Frontend  | R  |  |  |  | C | I |  | A |
| Integrazione Backend e Frontend | R  |  |  | C | C | I |  |  |
| Integrazione con Forecasting microservice | R  | C |  |  | I,C | I |  |  |

# Mansion

|  | Guglielmo Cancelli | Marco Zuccarini | Stefano Lavori | Lorenzo Pagina | Architetto | PM | FG\#1 | FC\#2 |
| ----- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Progettazione  |  |  |  |  | R  | I |  |  |
| Setup  |  | R  |  |  | C | I |  |  |
| Backend  |  | R  |  |  | C,A | I |  |  |
| Frontend  |  | R  |  |  | C | I |  |  |
| Integrazione Backend e Frontend |  | R  |  |  | I,C | I |  |  |
| Integrazione Map microservice | C | R  | C |  | I,C | I |  |  |
