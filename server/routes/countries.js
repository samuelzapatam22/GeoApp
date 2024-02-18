const express= require('express')
const router = express.Router()
const {createCountry, getCountry, getCountryByCode, upDateCountries, deleteCountry} = require('../controllers/countries')

router.post('/create',createCountry)
router.get('/getCountries', getCountry)
router.get('/getCountriesId/:code', getCountryByCode)
router.put('/upDateCountriesId/:id', upDateCountries)
router.delete('/deleteCountry/:id', deleteCountry)

module.exports = router