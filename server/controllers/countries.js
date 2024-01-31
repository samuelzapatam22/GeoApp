const Country = require('../models/country')

const createCountry = async (req,res) => {
     try {
        const{code,name,capital,currency,languages,continent} = req.body

         const arrayLanguages = languages.map((lang)=>({name: lang}))
        const newCountry = new Country({
            code,
            name,
            capital,
            currency,
            languages: arrayLanguages,
            continent
        })
        console.log(newCountry)

         const saveCountry = await newCountry.save()
         res.status(200).json(saveCountry)
      } catch (error) {
         console.log(error)
         res.status(500).json({message: "server error"})     
         
      }
 }
 module.exports={
    createCountry,
 }