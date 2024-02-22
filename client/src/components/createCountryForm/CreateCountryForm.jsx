import React from 'react'
import './createCountryForm.css'
import '../sliderBar/SliderBar'
import SliderBar from '../sliderBar/SliderBar'
import { useState } from 'react'
import axios from 'axios'
import { useLazyQuery } from '@apollo/client';
import {GET_COUNTRY} from '../../App'

function CreateCountryForm() {
  const [created, setCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [capital, setCapital] = useState('');
  const [languages, setLanguages] = useState('');
  const [currency, setCurrency] = useState('');
  const [continent, setContinent] = useState('');

  const [getCountry, { loading, data }] = useLazyQuery(GET_COUNTRY, {
    onCompleted: (data) => {
      const countryData = data.country;
      setName(countryData.name);
      setCapital(countryData.capital);
      setLanguages(countryData.languages.map(language => language.name).join(', '));
      setCurrency(countryData.currency);
      setContinent(countryData.continent.name);
    },
    onError: (error) => {
      console.error('error:', error);
      setErrorMessage('error al obtener la información del país');
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
    },
  });

  const handleConsultClick = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/countries/getCountriesId/${code}`);
      if (response.data) {
        setErrorMessage('El país ya existe en la base de datos');
        setTimeout(() => {
          setErrorMessage('');
        }, 2000);
      } else {
        getCountry({ variables: { code } });
      }
    } catch (error) {
      console.error('Error fetching country:', error);
      setErrorMessage('error al obtener la información del país');
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
    }
  };
  

  const createCountry = async (e) => {
    e.preventDefault();
  
    if (!name || !capital || !languages || !currency || !continent) {
      setErrorMessage('completa todos los campos.');
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
      return;
    }

    if (!data || !data.country || !code || !name || !capital || !languages || !currency || !continent) {
      setErrorMessage('consulta un país válido antes de crearlo');
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
      return;
    }
  
    const countryData = {
      code,
      name,
      capital,
      languages,
      currency,
      continent
    }
  
    setCode('');
    setName('');
    setCapital('');
    setLanguages('');
    setCurrency('');
    setContinent('');
  
    try {
      const response = await axios.post('http://localhost:3001/api/countries/create', countryData);
      console.log(response.data);
      console.log('Creado exitosamente');
      setCreated(true);
      setTimeout(() => {
        setCreated(false);
        setErrorMessage('');
      }, 2000);
    } catch (error) {
      console.error('Error creating country:', error);
      setCreated(false);
      setErrorMessage('Error al crear el país');
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
    }
  }
  
  return (
    <div className='slider-bar'>
    <div className='CreateCountryForm'>
      <div className='container-form-create'>
        <form onSubmit={createCountry}>
          <div className='field-code'>
            <label>Codigo Pais</label>
            <input type="text" name='code' required value={code} onChange={e => setCode(e.target.value)} placeholder='Codigo' />
            <button className='btn-consult' onClick={handleConsultClick}>Consultar</button>
          </div>
          <div className='field-form-create'>
  
            <div className='box'>
              <div className='input-group'>
                <label>Nombre</label>
                <input type="text" value={name} disabled onChange={e => setName(e.target.value)} name="name" required placeholder='Nombre' />
              </div>
              <div className='input-group'>
                <label>Capital</label>
                <input type="text" name="capital" disabled required value={capital} onChange={e => setCapital(e.target.value)} placeholder='Capital' />
              </div>
            </div>
            
            <div className='box'>
              <div className='input-group'>
                <label>Idioma</label>
                <input type="text" name="languages" disabled required value={languages} onChange={e => setLanguages(e.target.value)} placeholder='Idioma' />
              </div>
              <div className='input-group'>
                <label>Moneda</label>
                <input type="text" name="currency" required value={currency} onChange={e => setCurrency(e.target.value)} placeholder='Moneda' />
              </div>
            </div>
  
            <div className='box'>
              <div className='input-group'>
                <label>Continente</label>
                <input type="text" name="continent" disabled required value={continent} onChange={e => setContinent(e.target.value)} placeholder='Continente' />
              </div>
            </div>
            
          </div>
          <div className='buttons'>
            <button className='btn-clean'>Limpiar</button>
            <button type='submit' className='btn-create'>Crear</button>
          </div>
        </form>
        {created && <p className='success-message'>País creado exitosamente</p>}
        {errorMessage && <p className='error-message'>{errorMessage}</p>}
      </div>
    </div>
  </div>
  );
}

export default CreateCountryForm