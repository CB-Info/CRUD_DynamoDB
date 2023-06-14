//AWS
const AWS = require("aws-sdk");
const { DocumentClient } = require('aws-sdk/clients/dynamodb');

//ID
const { v4: uuidv4 } = require('uuid');

//csv
const csv = require('csv-parser');
const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');

// Utilisation : spécifiez le nom de votre table DynamoDB et le chemin vers votre fichier CSV
const tableName = 'Contact';
const filePath = 'contacts_2.csv';

//swagger
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger.js');

//AWS config
AWS.config.update({
    region: "eu-west-3", // replace with your region in AWS account
    accessKeyId: 'AKIA3XXF7CLZDMW6MPIX',
    secretAccessKey: '0XWgEgxHhm6tZDfPR2OoBSR6KS3i/B0IyCQGlob9'
});

const DynamoDB = new AWS.DynamoDB();
const DynamoDBdoc = new DocumentClient();

const app = express();
app.use(bodyParser.json());

app.get('/api/contacts', async (req, res) => {
  try {
    const params = {
      TableName: "Contact",
    };
  
    DynamoDB.scan(params, function(err, data) {
      if (err) {
        res.status(500).json({error:error})
      } else {
        console.log(`Nombre de contacts: ${data.Count}`);
        res.status(200).json(data.Items)
      }
    });
  } catch (error) {
    res.status(500).json({error:error})
  }
})

app.get('/api/contact/:id', async (req, res) => {
  try {
    const params = {
      TableName: "Contact",
      Key: {
        id: { S: req.params.id },
      },
    };
  
    DynamoDB.getItem(params, function(err, data) {
      if (err) {
        res.status(500).json({error:error})
      } else {
        res.status(200).json(data.Item)
      }
    });
  } catch (error) {
    res.status(500).json({error:error})
  }
})

app.post('/api/contact', async (req, res) => {
  try {
    const id = uuidv4();

    const params = {
      TableName: "Contact",
      Item: {
        id: { S: id },
        title: { S: req.body.title },
        name: { S: req.body.name },
        adress: { S: req.body.adress },
        realAdress: { S: req.body.realAdress },
        departement: { S: req.body.departement },
        country: { S: req.body.country },
        tel: { S: req.body.tel },
        email: { S: req.body.email },
      },
    };
  
    DynamoDB.putItem(params, function(err) {
      if (err) {
        res.status(500).json({error:error})
      } else {
        res.status(200).json({message: 'Contact créé avec succès'})
      }
    });
  } catch (error) {
    res.status(500).json({error:error})
  }
})

app.post('/api/createTable', async (req, res) => {
  try {
    const params = {
      TableName: tableName,
      KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
      AttributeDefinitions: [
          { AttributeName: "id", AttributeType: "S" },
      ],
      ProvisionedThroughput: {
          ReadCapacityUnits: 10,
          WriteCapacityUnits: 10,
      },
  };

  DynamoDB.createTable(params, function (err, data) {
      if (err) {
        res.status(500).json({error:error})
      } else {
        res.status(200).json({message: `Table ${tableName} créée avec succès`})
      }
  });
  } catch (error) {
    res.status(500).json({error:error})
  }
})

app.post('/api/importContact', async (req, res) => {
  try {
    fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => {
      const id = uuidv4();
      // Mapper les données du fichier CSV aux attributs de la table DynamoDB
      const params = {
        TableName: tableName,
        Item: {
          id: id,
          title: data.title,
          name: data.name,
          adress: data.adress,
          realAdress: data.realAdress,
          departement: data.departement,
          country: data.country,
          tel: data.tel,
          email: data.email,
        },
      };

      // Insérer l'élément dans la table DynamoDB
      DynamoDBdoc.put(params, (err) => {
        if (err) {
          res.status(500).json({error:error})
        } else {
          //res.status(200).json({message: 'Contacts importés avec succès'})
        }
      });
    })
    .on('end', () => {
      res.status(200).json({message: 'Contacts importés avec succès'})
    });
  } catch (error) {
    res.status(500).json({error:error})
  }
})

app.delete('/api/deleteAllContacts', async (req, res) => {
  try {
    const scanParams = {
      TableName: tableName
    };
  
    DynamoDBdoc.scan(scanParams, function(err, data) {
      if (err) {
        res.status(500).json({error:error})
      } else {
        if (data.Items.length === 0) {
          res.status(500).json({error:error})
        } else {
          const deletePromises = data.Items.map(item => {
            const deleteParams = {
              TableName: tableName,
              Key: {
                id: item.id
              }
            };
            return DynamoDBdoc.delete(deleteParams).promise();
          });
  
          Promise.all(deletePromises)
            .then(() => {
              res.status(200).json({message: `La table ${tableName} a été vidée.`});
            })
            .catch(err => {
              res.status(200).json({message: `Erreur lors de la suppression des éléments de la table ${tableName}`, error: err});
            });
        }
      }
    });
  } catch (error) {
    res.status(500).json({error:error})
  }
})

app.delete('/api/contact/delete/:id', async (req, res) => {
  try {
    const params = {
      TableName: tableName,
      Key: {
        id: { S: req.params.id }
      },
    };
  
    DynamoDB.deleteItem(params, function(err) {
      if (err) {
        res.status(500).json({error:error})
      } else {
        res.status(200).json({message: `Le contact ${req.params.id} a été supprimé.`});
      }
    });
  } catch (error) {
    res.status(500).json({error:error})
  }
})

app.post('/api/contact/update/:id', async (req, res) => {
  try {
    const params = {
      TableName: "Contact",
      Item: {
        id: { S: req.params.id },
        title: { S: req.body.title },
        name: { S: req.body.name },
        adress: { S: req.body.adress },
        realAdress: { S: req.body.realAdress },
        departement: { S: req.body.departement },
        country: { S: req.body.country },
        tel: { S: req.body.tel },
        email: { S: req.body.email },
      },
      ReturnConsumedCapacity: "TOTAL",
    };
  
    DynamoDB.putItem(params, function(err) {
      if (err) {
        res.status(500).json({error:error})
      } else {
        res.status(200).json({message: `Le contact a été modifié.`});
      }
    });
  } catch (error) {
    res.status(500).json({error:error})
  }
})
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => {
  // importCSVToDynamoDB(tableName, filePath);
  console.log('Serveur démarré sur le port 3000');
});