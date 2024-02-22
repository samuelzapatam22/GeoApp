const mongoose = require('mongoose')
const countrySchema = new mongoose.Schema({
    code: String,
    name: String,
    capital: String,
    currency : String,
    languages: String,
    continent: String
})
const Country = mongoose.model('paises',countrySchema)
module.exports= Country
