const fs = require('fs');
const path = require('path');
require('module-alias/register');


class ConfigService {
     _config = {};
     _mongodb = {};

     constructor(){    
        if (!ConfigService.instance) {
            ConfigService.instance = this;
            this._setConfig();
        }

        Object.freeze(ConfigService.instance);
        return ConfigService.instance;  
    }


    _setConfig()  {
        const buffer =  fs.readFileSync(path.join(__dirname, '..', '..','assets', 'config.json')); 
        this._config = JSON.parse(buffer);
        this._mongodb = this._config.mongodb;
    }

    getConfig(){
        return this._config;
    }

    getConfigAttr(attr){
        return this._config[attr];
    }

    getMongodbConfig(){
        return this._mongodb;
    }

}

const instance = new ConfigService()


module.exports = instance
  