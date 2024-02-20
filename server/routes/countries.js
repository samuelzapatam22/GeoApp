const express= require('express')
const router = express.Router()
const {createCountry, getCountry, getCountryByCode,getCountriesByContinent, upDateCountries, deleteCountry} = require('../controllers/countries')

router.post('/create',createCountry)
router.get('/getCountries', getCountry)
router.get('/getCountriesId/:code', getCountryByCode)
router.put('/upDateCountriesId/:id', upDateCountries)
router.delete('/deleteCountry/:id', deleteCountry)
router.get('/filterByContinent/:continent',getCountriesByContinent)

module.exports = router