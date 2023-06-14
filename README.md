# Documentation de l'API Contact

Ce projet est une API permettant de gérer des contacts dans une table DynamoDB d'Amazon Web Services (AWS).

## Configuration
Avant d'utiliser cette API, assurez-vous de configurer correctement vos informations d'identification AWS. Dans le fichier **app.js**, vous devez mettre à jour les valeurs suivantes :

```javascript
AWS.config.update({
    region: "eu-west-3", // Remplacez par votre région dans votre compte AWS
    accessKeyId: 'VOTRE_ACCESS_KEY_ID',
    secretAccessKey: 'VOTRE_SECRET_ACCESS_KEY'
});
```

## Dépendances
Ce projet utilise les dépendances suivantes :

- <ins>AWS SDK</ins> : SDK AWS pour interagir avec DynamoDB.
- <ins>uuid</ins> : Génération d'identifiants uniques.
- <ins>csv-parser</ins> : Analyseur CSV pour importer des contacts à partir d'un fichier CSV.
- <ins>express</ins> : Framework Node.js pour créer l'API.
- <ins>body-parser</ins> : Middleware pour analyser les corps de requête JSON.
- <ins>swagger-ui-express</ins> : Affichage de la documentation Swagger.

## Installation
1. Clonez le dépôt GitHub :
```javascript
git clone <lien-du-depot>
cd <nom-du-repertoire>
```
2. Installez les dépendances :
```javascript
npm install
```
3. Démarrez le serveur :
```javascript
npm start
```
Le serveur sera accessible à l'adresse **http://localhost:3000**.

## Points de terminaison de l'API
- **GET /api/contacts** : Récupère tous les contacts.
- **GET /api/contact/:id** : Récupère un contact par ID.
- **POST /api/contact** : Crée un nouveau contact.
- **POST /api/createTable** : Crée une nouvelle table DynamoDB.
- **POST /api/importContact** : Importe des contacts à partir d'un fichier CSV.
- **DELETE /api/deleteAllContacts** : Supprime tous les contacts de la table.
- **DELETE /api/contact/delete/:id** : Supprime un contact par ID.
- **POST /api/contact/update/:id** : Met à jour un contact par ID.

## Documentation Swagger
Une documentation Swagger est disponible à l'adresse http://localhost:3000/api/docs. Elle fournit des informations détaillées sur chaque point de terminaison de l'API.

## Exemples de requêtes
Voici quelques exemples de requêtes que vous pouvez effectuer avec l'API :

### Récupérer tous les contacts :
```javascript
GET /api/contacts
```
### Récupérer un contact par ID :
```javascript
GET /api/contact/:id
```
### Créer un nouveau contact :
```javascript
POST /api/contact
{
  "title": "M.",
  "name": "John Doe",
  "address": "123 Main St",
  "realAddress": "456 Real St",
  "department": "Example Department",
  "country": "Example Country",
  "tel": "555-1234",
  "email": "john@example.com"
}
```
### Supprimer un contact par ID :
```javascript
DELETE /api/contact/delete/:id
```
### Mettre à jour un contact par ID :
```javascript
POST /api/contact/update/:id
{
  "title": "Mme",
  "name": "Jane Doe",
  "address": "789 New St"
}
```
