require('module-alias/register');

const ConfigService = require('@src/services/config.service');
const routes = require('@src/routes/routes.js');
const express = require('express');
const helmet = require('helmet');
const  bodyParser = require('body-parser');
const connectToMongodb = require('@src/utils/mongodb.utils');

const app = express();
app.use(helmet());
app.use(bodyParser.json());


app.use('/', routes); // all routes


connectToMongodb(lunchServer);

function lunchServer(db){
   app.listen(ConfigService.getConfigAttr('serverPort'),
   () => {
      console.log(` server listening at port ${ConfigService.getConfigAttr('serverPort')}`)
   });

   const bla = require('@src/mongodb/mongodb.service').MongodbService;
   bla.addNewCollection("asd")
}

