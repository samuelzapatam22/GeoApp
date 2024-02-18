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

  const [deleteCountry, setDeleteCountry] = useState(false)

  const handleChange = (e) => {
    setCountryData({ ...countryData, [e.target.name]: e.target.value });
  };

  const handleConsult = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3001/api/countries/getCountriesId/${countryData.code}`);
      setTimeout(()=>{
        setupDate('');
      }, 3000);
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
      setTimeout(() => {
        setupDate('');
      }, 3000);
    } catch (error) {
      console.error('Error al actualizar país', error);
    }
  };

  const handleDelete = async(e) => {
      e.preventDefault();
      try {
        await axios.delete(`http://localhost:3001/api/countries/deleteCountry/${countryData._id}`, deleteCountry);
        setDeleteCountry(true)
        setTimeout(() => {
          setDeleteCountry('');
        }, 3000);
        setCountryData({
          code: '',
          name: '',
          capital: '',
          currency: '',
          languages: '',
          continent: '',
        })
      } catch (error) {
        console.error('Error al eliminar país', error);
      }
  }

  return (
    <div className='slider-bar'>
      <SliderBar />
      <div className='UpdateCountryForm'>
        <div className='container-form-update'>
          <form onSubmit={handleSubmit}>
            <div className='field-code'>
              <label>Code country</label>
              <input type="text" name='code' placeholder='Code' value={countryData.code} onChange={handleChange} />
              <button className='btn-consult' onClick={handleConsult}>Consultar</button>
            </div>
            <div className='field-form-update'>
              <div className='box'>
              <div className='input-group'>
                <label>Nombre</label>
                <input type="text" name="name" placeholder='Name' value={countryData.name} onChange={handleChange} />
            </div>
              <div className='input-group'>
                <label>Capital</label>
                <input type="text" name="capital" placeholder='Capital' value={countryData.capital} onChange={handleChange} />
              </div>
            </div>
  <div className='box'>
  <div className='input-group'>
    <label>Lengua</label>
    <input type="text" name="languages" placeholder='Languages' value={countryData.languages} onChange={handleChange} />
  </div>
  <div className='input-group'>
    <label>Moneda</label>
    <input type="text" name="currency" placeholder='Currency' value={countryData.currency} onChange={handleChange} />
  </div>
  </div>
  <div className='box'>
  <div className='input-group'>
    <label>Continente</label>
    <input type="text" name="continent" placeholder='Continent' value={countryData.continent} onChange={handleChange} />
  </div>
  </div>
</div>
<div className='buttons'>
  <button className='btn-clean' onClick={handleDelete}>Eliminar</button>
  <button type="submit" className='btn-create'>Actualizar</button>
</div>
{upDate && <p className='alert-upDate'>pais actualizado</p>}
{deleteCountry && <p className='alert-delete'>Pais eleminado</p>}
</form>
</div>
</div>
</div>
  )
}

export default UpdateCountryForm;