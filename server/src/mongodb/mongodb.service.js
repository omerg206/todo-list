
let mongoClient;




function mongodbServicernit(client){
    mongoClient = client;
}


class MongodbService {
    _collections = {};
    

    constructor() {
        if (!MongodbService.instance) {
            MongodbService.instance = this;
        }

        Object.freeze(MongodbService.instance);
        return MongodbService.instance;  
    }

   


    addNewCollection(collectionName){
        if (this._collections[collectionName]) {
            console.error(`collection with name ${collectionName} already exsits`);
        } else {
            this._collections[collectionName] = mongoClient.collection(collectionName);
        }
    }
}

const instance = new MongodbService();


module.exports = {mongodbServicernit, MongodbService: instance};
