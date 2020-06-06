require('module-alias/register');

const ConfigService = require('@src/services/config.service');
const routes = require('@src/routes/routes.js');
const express = require('express');
const helmet = require('helmet');
const  bodyParser = require('body-parser');


const app = express();
app.use(helmet());
app.use(bodyParser.json());


app.use('/', routes); // all routes






app.listen(ConfigService.getConfigAttr('SERVER_PORT'),
   () => {
      console.log(` server listening at port ${ConfigService.getConfigAttr('SERVER_PORT')}`)
   });
