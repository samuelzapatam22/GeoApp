import { useState } from 'react';
import axios from 'axios';
import './UpdateCountryForm.css';
import SliderBar from '../sliderBar/SliderBar';

function UpdateCountryForm() {
  const [upDate, setupDate] = useState(false)
  const [countryNoFind, setCountryNofind] = useState(false)
  const [deleteCountry, setDeleteCountry] = useState(false)
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
      const response = await axios.get(`https://geoapp-k79v.onrender.com/api/countries/getCountriesId/${countryData.code}`);
      if (response.data) {
        setCountryData(response.data);
      } else {
        setCountryNofind(true)
        setTimeout(()=> {
          setCountryNofind('')
        },3000)
        console.log('País no encontrado');
        setCountryData({
          code: '',
          name: '',
          capital: '',
          currency: '',
          languages: '',
          continent: '',
        });
      }
    } catch (error) {
      console.error('Error al consultar país', error);
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://geoapp-k79v.onrender.com/api/countries/upDateCountriesId/${countryData._id}`, countryData);
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
        await axios.delete(`https://geoapp-k79v.onrender.com/api/countries/deleteCountry/${countryData._id}`, deleteCountry);
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
      <div className='UpdateCountryForm'>
        <div className='container-form-update'>
          <form onSubmit={handleSubmit}>
            <div className='field-code'>
              <label>Codigo Pais</label>
              <input required type="text" name='code' placeholder='Codigo' value={countryData.code} onChange={handleChange} />
              <button className='btn-consult' onClick={handleConsult}>Consultar</button>
            </div>
            <div className='field-form-update'>
              <div className='box'>
              <div className='input-group'>
                <label>Nombre</label>
                <input required type="text" name="name" placeholder='Nombre' value={countryData.name} onChange={handleChange} />
            </div>
              <div className='input-group'>
                <label>Capital</label>
                <input required type="text" name="capital" placeholder='Capital' value={countryData.capital} onChange={handleChange} />
              </div>
            </div>
  <div className='box'>
  <div className='input-group'>
    <label>Idioma</label>
    <input required type="text" name="languages" placeholder='Idioma' value={countryData.languages} onChange={handleChange} />
  </div>
  <div className='input-group'>
    <label>Moneda</label>
    <input required type="text" name="currency" placeholder='Moneda' value={countryData.currency} onChange={handleChange} />
  </div>
  </div>
  <div className='box'>
  <div className='input-group'>
    <label>Continente</label>
    <input required type="text" name="continent" placeholder='Continente' value={countryData.continent} onChange={handleChange} />
  </div>
  </div>
</div>
<div className='buttons'>
  <button className='btn-clean' onClick={handleDelete}>Eliminar</button>
  <button type="submit" className='btn-create'>Actualizar</button>
</div>
{upDate && <p className='alert-upDate'>pais actualizado</p>}
{deleteCountry && <p className='alert-delete'>Pais eleminado</p>}
{countryNoFind && <p className='alert-no-find'>Pais no encontrado</p>}
</form>
</div>
</div>
</div>
  )
}

export default UpdateCountryForm;