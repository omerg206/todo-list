const fs = require('fs');
const path = require('path');
require('module-alias/register');


class ConfigService {
     _config = {};

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
    }

    getConfig(){
        return this._config;
    }

    getConfigAttr(attr){
        return this._config[attr];
    }

}

const instance = new ConfigService()


module.exports = instance
  