import { useState } from 'react';
import axios from 'axios';
import './UpdateCountryForm.css';
import SliderBar from '../sliderBar/SliderBar';

function UpdateCountryForm() {
  const [upDate, setupDate] = useState(false)
  const [countryData, setCountryData] = useState({
    code: '',
    name: '',
    capital: '',
    currency: '',
    languages: '',
    continent: '',
  });

  const handleChange = (e) => {
    setCountryData({ ...countryData, [e.target.name]: e.target.value });
  };

  const handleConsult = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3001/api/countries/getCountriesId/${countryData.code}`);
      setCountryData(response.data);
    } catch (error) {
      console.error('Error al consultar país', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/api/countries/upDateCountriesId/${countryData._id}`, countryData);
      console.log('País actualizado exitosamente');
      setupDate(true)
      // Puedes hacer algo después de actualizar el país, como mostrar un mensaje o redirigir a otra página
    } catch (error) {
      console.error('Error al actualizar país', error);
    }
  };

  return (
    <div className='slider-bar'>
      <SliderBar />
      <div className='UpdateCountryForm'>
        <div className='container-form-create'>
          <h1 className='title'>Update Country</h1>
          <form onSubmit={handleSubmit}>
            <div className='field-code'>
              <label>Code country</label>
              <input type="text" name='code' placeholder='Code' value={countryData.code} onChange={handleChange} />
              <button className='btn-consult' onClick={handleConsult}>Consult</button>
            </div>
            <div className='field-form-update'>
              <label>Name</label>
              <input type="text" name="name" placeholder='Name' value={countryData.name} onChange={handleChange} />
              <label>Capital</label>
              <input type="text" name="capital" placeholder='Capital' value={countryData.capital} onChange={handleChange} />
              <label>Languages</label>
              <input type="text" name="languages" placeholder='Languages' value={countryData.languages} onChange={handleChange} />
              <label>Currency</label>
              <input type="text" name="currency" placeholder='Currency' value={countryData.currency} onChange={handleChange} />
              <label>Continent</label>
              <input type="text" name="continent" placeholder='Continent' value={countryData.continent} onChange={handleChange} />
            </div>
            <div className='buttons'>
              <button className='btn-clean'>Delete</button>
              <button type="submit" className='btn-create'>Update</button>
            </div>
            {upDate && <p>pais actualizado</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateCountryForm;