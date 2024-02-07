const express= require('express')
const router = express.Router()
const {createCountry, getCountry} = require('../controllers/countries')

router.post('/create',createCountry)
router.get('/getCountries', getCountry)
module.exports = router