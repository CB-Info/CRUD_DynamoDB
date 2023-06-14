# Documentation de l'API Contact

Ce projet est une API permettant de gérer des contacts dans une table DynamoDB d'Amazon Web Services (AWS).

## Table des matières

- [Installation de Node.js et Git](#installation-de-node.js-et-git)
  - [Node.js](#nodejs)
    - [Windows](#windows)
  - [Git](#git)
    - [Windows](#windows-1)
- [Étapes préliminaires](#Étapes-préliminaires)
- [Configuration](#configuration)
- [Dépendances](#dépendances)
- [Installation](#installation)
- [Points de terminaison de l'API](#points-de-terminaison-de-l'api)
- [Documentation Swagger](#documentation-swagger)
- [Exemples de requêtes](#exemples-de-requêtes)
  - [Récupérer tous les contacts](#récupérer-tous-les-contacts)
  - [Récupérer un contact par ID](#récupérer-un-contact-par-id)
  - [Créer un nouveau contacts](#Créer-un-nouveau-contacts)
  - [Supprimer un contact par ID](#Supprimer-un-contact-par-ID)
  - [Mettre à jour un contact par ID](#Mettre-à-jour-un-contact-par-ID)
    
# Installation de Node.js et Git

Ce guide vous explique comment installer Node.js et Git sur votre système.

## Node.js

Node.js est une plateforme basée sur le moteur JavaScript V8 de Chrome permettant d'exécuter du code JavaScript côté serveur.

### Windows

1. Rendez-vous sur le site officiel de Node.js : [https://nodejs.org](https://nodejs.org).
2. Téléchargez la version recommandée pour Windows.
3. Exécutez le fichier d'installation téléchargé.
4. Suivez les instructions de l'assistant d'installation.
5. Vérifiez l'installation en ouvrant une fenêtre de terminal et en exécutant la commande suivante :
```javascript
node --version
```
## Git

Git est un système de contrôle de version largement utilisé pour le suivi des modifications du code source.

### Windows

1. Rendez-vous sur le site officiel de Git : [https://git-scm.com](https://git-scm.com).
2. Téléchargez la version recommandée pour Windows.
3. Exécutez le fichier d'installation téléchargé.
4. Suivez les instructions de l'assistant d'installation en acceptant les paramètres par défaut.
5. Vérifiez l'installation en ouvrant une fenêtre de terminal et en exécutant la commande suivante :
```javascript
git --version
```
## Étapes préliminaires
Accédez au site web d'Amazon Web Services à l'adresse suivante : **https://aws.amazon.com**.

Cliquez sur le bouton **"Créer un compte gratuit"** pour commencer le processus de création de compte. Suivez les instructions à l'écran pour vous inscrire.

Une fois votre compte créé, connectez-vous à la console AWS à l'adresse suivante : **https://console.aws.amazon.com**.

## Configuration

Avant d'utiliser cette API, assurez-vous de configurer correctement vos informations d'identification AWS. Dans le fichier **'app.js'**, vous devez mettre à jour les valeurs suivantes :

```javascript
AWS.config.update({
    region: "eu-west-3", // Remplacez par votre région dans votre compte AWS
    accessKeyId: 'VOTRE_ACCESS_KEY_ID',
    secretAccessKey: 'VOTRE_SECRET_ACCESS_KEY'
});
```

## Dépendances
Ce projet utilise les dépendances suivantes :

- <ins>**AWS SDK**</ins> : SDK AWS pour interagir avec DynamoDB.
- <ins>**uuid**</ins> : Génération d'identifiants uniques.
- <ins>**csv-parser**</ins> : Analyseur CSV pour importer des contacts à partir d'un fichier CSV.
- <ins>**express**</ins> : Framework Node.js pour créer l'API.
- <ins>**body-parser**</ins> : Middleware pour analyser les corps de requête JSON.
- <ins>**swagger-ui-express**</ins> : Affichage de la documentation Swagger.

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
Le serveur sera accessible à l'adresse **'http://localhost:3000'**.

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
Une documentation Swagger est disponible à l'adresse **'http://localhost:3000/api/docs'**. Elle fournit des informations détaillées sur chaque point de terminaison de l'API.

## Exemples de requêtes
Voici quelques exemples de requêtes que vous pouvez effectuer avec l'API :

### Récupérer tous les contacts
```javascript
GET /api/contacts
```
### Récupérer un contact par ID
```javascript
GET /api/contact/:id
```
### Créer un nouveau contact
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
### Supprimer un contact par ID
```javascript
DELETE /api/contact/delete/:id
```
### Mettre à jour un contact par ID
```javascript
POST /api/contact/update/:id
{
  "title": "Mme",
  "name": "Jane Doe",
  "address": "789 New St"
}
```
