const mongodbClient = require('mongodb').MongoClient;
const mongodbConfig = require('@src/services/config.service').getMongodbConfig();
const mongodbServicernit = require('@src/mongodb/mongodb.service').mongodbServicernit;
let mongoClientConnected; 



async function connectToMongodb(callbackFunc) {
    try {
        const client = await mongodbClient.connect(mongodbConfig.mongodbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
     
       onSuccessfulConnect(client, callbackFunc)

    } catch (err) {
        console.error(`Error connecting to the MongoDB: ${err}`);
    }
}

function onSuccessfulConnect(client, callbackFunc){
    mongoClientConnected = client;
    const db = client.db(mongodbConfig.dbName);
  
    process.on('exit', (code) => {
        dbClose();
    })

    mongodbServicernit(db);
    callbackFunc(db);
}

function dbClose() {
    if (mongodbClient && mongodbClient.isConnected()) {
        mongodbClient.close();
    }
}

module.exports = connectToMongodb;