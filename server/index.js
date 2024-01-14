const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
require('./models/country')

const app = express()
const PORT = 3001

app.use(bodyParser.json())

const countryRoutes = require('./routes/countries')
app.use('/api/countries',countryRoutes)

mongoose.connect('mongodb://127.0.0.1:27017/GeoApp')
.then(()=> console.log("Conected to DataBase"))
.catch((error)=> console.log(`error`+ error))
app.get('/',(req,res)=>{
    res.send('Hola mundo')

})

app.listen(PORT,()=>{
    console.log(`server run in port ${PORT}`)
})