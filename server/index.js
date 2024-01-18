const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
require('./models/country')

const app = express()
const PORT = 3001

app.use(bodyParser.json())

const countryRoutes = require('./routes/countries')
app.use('/api/countries',countryRoutes)

mongoose.connect('mongodb+srv://deivypr28:c7SSt7DL081PP1yN@cluster0.sxdtfez.mongodb.net/GeoApp')
.then(()=> console.log("Conected to DataBase"))
.catch((error)=> console.log(`error`+ error))
app.get('/',(req,res)=>{
    res.send('Hola mundo')

})

app.listen(PORT,()=>{
    console.log(`server run in port ${PORT}`)
})