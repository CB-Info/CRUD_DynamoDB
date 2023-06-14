# Documentation de l'API Contact

Ce projet est une API permettant de gérer des contacts dans une table DynamoDB d'Amazon Web Services (AWS).

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
# Installation de Node.js et Git

Ce guide vous explique comment installer Node.js et Git sur votre système.

## Table des matières

- [Node.js](#nodejs)
  - [Windows](#windows)
  - [macOS](#macos)
  - [Linux](#linux)
- [Git](#git)
  - [Windows](#windows-1)
  - [macOS](#macos-1)
  - [Linux](#linux-1)

## Node.js

Node.js est une plateforme basée sur le moteur JavaScript V8 de Chrome permettant d'exécuter du code JavaScript côté serveur.

### Windows

1. Rendez-vous sur le site officiel de Node.js : [https://nodejs.org](https://nodejs.org).
2. Téléchargez la version recommandée pour Windows.
3. Exécutez le fichier d'installation téléchargé.
4. Suivez les instructions de l'assistant d'installation.
5. Vérifiez l'installation en ouvrant une fenêtre de terminal et en exécutant la commande suivante :
node --version

markdown
Copy code

### macOS

1. Utilisez Homebrew pour installer Node.js en ouvrant un terminal et en exécutant la commande suivante :
brew install node

markdown
Copy code
2. Vérifiez l'installation en exécutant la commande suivante :
node --version

markdown
Copy code

### Linux

1. Ouvrez un terminal.
2. Utilisez le gestionnaire de paquets de votre distribution pour installer Node.js. Par exemple, sur Ubuntu, exécutez :
sudo apt install nodejs

markdown
Copy code
3. Vérifiez l'installation en exécutant la commande suivante :
node --version

markdown
Copy code

## Git

Git est un système de contrôle de version largement utilisé pour le suivi des modifications du code source.

### Windows

1. Rendez-vous sur le site officiel de Git : [https://git-scm.com](https://git-scm.com).
2. Téléchargez la version recommandée pour Windows.
3. Exécutez le fichier d'installation téléchargé.
4. Suivez les instructions de l'assistant d'installation en acceptant les paramètres par défaut.
5. Vérifiez l'installation en ouvrant une fenêtre de terminal et en exécutant la commande suivante :
git --version

markdown
Copy code

### macOS

1. Installez Git en utilisant Homebrew en ouvrant un terminal et en exécutant la commande suivante :
brew install git

markdown
Copy code
2. Vérifiez l'installation en exécutant la commande suivante :
git --version

markdown
Copy code

### Linux

1. Ouvrez un terminal.
2. Utilisez le gestionnaire de paquets de votre distribution pour installer Git. Par exemple, sur Ubuntu, exécutez :
sudo apt install git

markdown
Copy code
3. Vérifiez l'installation en exécutant la commande suivante :
git --version

less
Copy code

C'est tout ! Vous avez maintenant installé Node.js et Git sur votre système.

Pour commencer à utiliser ces outils, consultez les documentations officielles de [Node.js](https://nodejs.org)
