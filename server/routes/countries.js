const express= require('express')
const router = express.Router()
const {createCountry} = require('../controllers/countries')

router.post('/create',createCountry)
module.exports = router