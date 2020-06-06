require('module-alias/register');
const ConfigService = require('@src/services/config.service')


const express = require('express')
const app = express();


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(ConfigService.getConfigAttr('SERVER_PORT'),
   () => {
      console.log(` server listening at port ${ConfigService.getConfigAttr('SERVER_PORT')}`)
   });
