/**
* @swagger
* swagger: "2.0"
* info:
*   version: "1.0.0"
*   title: API de gestion des contacts
* paths:
*   /api/contacts:
*     get:
*       summary: Récupérer tous les contacts
*       responses:
*         200:
*           description: Succès, renvoie la liste des contacts
*           schema:
*             type: array
*             items:
*               $ref: "#/definitions/Contact"
*         500:
*           description: Erreur du serveur
*   /api/contact/{id}:
*     get:
*       summary: Récupérer un contact par ID
*       parameters:
*         - in: path
*           name: id
*           required: true
*           type: string
*           description: ID du contact à récupérer
*       responses:
*         200:
*           description: Succès, renvoie le contact correspondant à l'ID
*           schema:
*             $ref: "#/definitions/Contact"
*         500:
*           description: Erreur du serveur
*   /api/contact:
*     post:
*       summary: Créer un nouveau contact
*       parameters: []
*       responses:
*         200:
*           description: Succès, renvoie un message de succès
*           schema:
*             type: object
*             properties:
*               message:
*                 type: string
*         500:
*           description: Erreur du serveur
*   /api/createTable:
*     post:
*       summary: Créer une nouvelle table DynamoDB
*       parameters: []
*       responses:
*         200:
*           description: Succès, renvoie un message de succès
*           schema:
*             type: object
*             properties:
*               message:
*                 type: string
*         500:
*           description: Erreur du serveur
*   /api/importContact:
*     post:
*       summary: Importer des contacts à partir d'un fichier CSV
*       parameters: []
*       responses:
*         200:
*           description: Succès, renvoie un message de succès
*           schema:
*             type: object
*             properties:
*               message:
*                 type: string
*         500:
*           description: Erreur du serveur
*   /api/deleteAllContacts:
*     delete:
*       summary: Supprimer tous les contacts
*       parameters: []
*       responses:
*         200:
*           description: Succès, renvoie un message de succès
*           schema:
*             type: object
*             properties:
*               message:
*                 type: string
*         500:
*           description: Erreur du serveur
*   /api/contact/delete/{id}:
*     delete:
*       summary: Supprimer un contact par ID
*       parameters:
*         - in: path
*           name: id
*           required: true
*           type: string
*           description: ID du contact à supprimer
*       responses:
*         200:
*           description: Succès, renvoie un message de succès
*           schema:
*             type: object
*             properties:
*               message:
*                 type: string
*         500:
*           description: Erreur du serveur
*   /api/contact/update/{id}:
*     post:
*       summary: Mettre à jour un contact par ID
*       parameters:
*         - in: path
*           name: id
*           required: true
*           type: string
*           description: ID du contact à mettre à jour
*       responses:
*         200:
*           description: Succès, renvoie un message de succès
*           schema:
*             type: object
*             properties:
*               message:
*                 type: string
*         500:
*           description: Erreur du serveur
* definitions:
*   Contact:
*     type: object
*     properties:
*       id:
*         type: string
*       title:
*         type: string
*       name:
*         type: string
*       adress:
*         type: string
*       realAdress:
*         type: string
*       departement:
*         type: string
*       country:
*         type: string
*       tel:
*         type: string
*       email:
*         type: string
*/