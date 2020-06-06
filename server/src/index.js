require('module-alias/register');

const ConfigService = require('@src/services/config.service');
const routes = require('@src/routes/routes.js');
const express = require('express');
const helmet = require('helmet');
const  bodyParser = require('body-parser');
const initMongoConenction = require('@src/mongodb/mongodb').initMongoConenction;

const app = express();
app.use(helmet());
app.use(bodyParser.json());


app.use('/', routes); // all routes


initMongoConenction(lunchServer)

function lunchServer(){
   app.listen(ConfigService.getConfigAttr('serverPort'),
   () => {
      console.log(` server listening at port ${ConfigService.getConfigAttr('serverPort')}`)
   });
}


