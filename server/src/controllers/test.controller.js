const express = require('express')
const router = express.Router();

router.get('/', function test(req, res) {
    return res.send('server is up')
})





module.exports = router;