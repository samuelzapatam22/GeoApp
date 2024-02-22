require('dotenv').config();
const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

const countryRoutes = require('./routes/countries')
app.use('/api/countries',countryRoutes)

mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("Conected to DataBase"))
.catch((error)=> console.log(`error`+ error))
app.get('/',(req,res)=>{
    res.send('Hola mundo')

})

app.listen(PORT,()=>{
    console.log(`server run in port ${PORT}`)
})