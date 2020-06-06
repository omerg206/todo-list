
const test = require('@src/controllers/test.controller');
const express = require('express');
const router = express.Router();

const app = express();


router.use('/test', test);

router.get('/', (req, res) => res.send('Hello World!'));


module.exports = router;