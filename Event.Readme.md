## PROJET DE GESTION D'ÉVÈNEMENTS

I. RÈGLES DE GESTION

1. En tant qu'utilisateur de l'application, je dois être capable d'enregistrer un évènement.

   - Un évènement est référencé par le type d'évènement, la data prévue de l'évènement, la localisation (lieu)
   - Plusieurs évènements peuvent être crées dans la même journée.
   - Un évènement ne peut être reporté et annulé

2. En tant qu'utilisateur de l'application, je dois pouvoir m'inscrire pour la première fois sur l'application
   - L'utilisateur renseigne son nom, son email, son pseudo (facultatif) et son mot de passe. En cas d'oublie du mot de passe,
     il sera possible de récupérer un nouveau mot de passe qui sera envoyé à l'adresse mail de l'utilisateur et celui-ci pourra changer son mot
     de passe une fois connecté.
   - L'utilisateur n'aura qu'une seule adresse email par compte crée.
   - Ajouter un évènement en y précisant le nom de l'évènement, la date de l'évènement, la durée, le type d'évènement (meet up, soirée, casting, forum, concert)
   -
3. En tant qu'utilisateur de l'application, je dois pouvoir ajouter des personnes qui souhaitent participer à l'évènement dont j'en suis le créateur.

II. Spécifications techniques & fonctionnelles

### Spécifications techniques

- L'application tournera sur un serveur Javascript côté Back-end avec NodeJS
- L'application devra être codé sur une architecture hexagonale
- Un SGBD pour assurer le stockage des données, dans notre cas ce sera MongoDB
- L'interface utilisateur sera codé en Javascript côté Front-end avec la librairie React (Redux saga)

### Specifications fonctionnelles

- CRUD d'évènements
- Planifier un évènement (en utilisant l'api de Google Calendar pour valider les dates )
- L'évènement sera automatiquement supprimé une fois qu'il est passé.
- CRUD des membres
- Envoyer des invitations
