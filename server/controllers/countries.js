const Country = require('../models/country')

const getCountry = async(req,res) => {
   try {
     const countries = await Country.find()
      res.json(countries)
   } catch (error) {
      console.log('error at get countries');
      res.status(500).json({message: "error at get countries"})
   }
}


const createCountry = async (req,res) => {
     try {
        const{code,name,capital,currency,languages,continent} = req.body

        const newCountry = new Country({
            code,
            name,
            capital,
            currency,
            languages,
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

 const getCountryByCode = async (req, res) => {
   try {
     const country = await Country.findOne({ code: req.params.code });
     res.json(country);
   } catch (error) {
     console.log('Error al obtener país por código', error);
     res.status(500).json({ message: 'Server error' });
   }
 };

 const upDateCountries = async(req, res) => {
   try {
      const {code, name, capital, currency, languages, continent} = req.body
      await Country.findByIdAndUpdate(req.params.id, {
         code,
         name,
         capital,
         currency,
         languages,
         continent
      })
      res.json({message: "Pais updated succes"})
   } catch (error) {
      console.log('error al actualizar pais', error);
      res.status(500)
   }
 }

 const deleteCountry = async(req, res) => {
   try {
      await Country.findByIdAndDelete(req.params.id)
      res.json({message: "user deleted success"})
   } catch (error) {
      console.log('error trying delete Country');
        res.status(500).json({error: "error al eliminar pais"})
   }
 }

 module.exports={createCountry,getCountry, getCountryByCode, upDateCountries, deleteCountry }