
class MongodbService {
    _db;
    _collections = {};
    _mongodbClient = require('mongodb').MongoClient;
    _mongodbConfig = require('@src/services/config.service').getMongodbConfig();

    constructor() {
        // if (!MongodbService.instance) {
        //     this._connect().finally(() => {
               
        //     })
           
        // }

        // // return MongodbService.instance;
    }

    async _connect(callbackFunc) {
        try {
            const client = await this._mongodbClient.connect(this._mongodbConfig.mongodbUrl, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
         
            this.onSuccessfulConnect(client, callbackFunc)

        } catch (err) {
            console.error(`Error connecting to the MongoDB: ${err}`);
        }
    }


    dbClose() {
        if (mongodbClient && mongodbClient.isConnected()) {
            mongodbClient.close();
        }
    }

    onSuccessfulConnect(client, callbackFunc){
        this.mongodbClient = client;
        this._db = client.db(this._mongodbConfig.dbName);
        MongodbService.instance = this;
        Object.freeze(MongodbService.instance);

        process.on('exit', (code) => {
            this.dbClose();
        })
        
        callbackFunc();
     
      
    }

    addNewCollection(collectionName){
        if (this._collections[collectionName]) {
            console.error(`collection with name ${collectionName} already exsits`);
        } else {
            this._collections[collectionName] = this._db.collection(collectionName);
        }
    }
}

const instance = new MongodbService();


module.exports = {
    initMongoConenction: instance._connect.bind(instance),
    MongodbService: instance
};