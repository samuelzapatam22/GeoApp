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
      console.error('Error fetching country:', error);
      setErrorMessage('Error al obtener la información del país. Verifica el código e inténtalo nuevamente.');
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
    },
  });

  const handleConsultClick = () => {
    getCountry({ variables: { code } });
  };

  const createCountry = async(e) => {
    e.preventDefault()
    
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
      setErrorMessage('Error al crear el país. Verifica los datos e inténtalo nuevamente.');
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
    }
  }

  return (
    <div className='slider-bar'>
      <SliderBar />
      <div className='CreateCountryForm'>
        <div className='container-form-create'>
          <h1 className='title'>Create Country</h1>
          <form onSubmit={createCountry}>
            <div className='field-code'>
              <label>Code country</label>
              <input type="text" name='code' required value={code} onChange={e => setCode(e.target.value)} placeholder='Code' />
              <button className='btn-consult' onClick={handleConsultClick}>Consult</button>
            </div>
            <div className='field-form-create'>
              <label>Name</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} name="name" required placeholder='Name' />
              <label>Capital</label>
              <input type="text" name="capital" required value={capital} onChange={e => setCapital(e.target.value)} placeholder='Capital' />
              <label>Languages</label>
              <input type="text" name="languages" required value={languages} onChange={e => setLanguages(e.target.value)} placeholder='Languages' />
              <label>Currency</label>
              <input type="text" name="currency" required value={currency} onChange={e => setCurrency(e.target.value)} placeholder='Currency' />
              <label>Continent</label>
              <input type="text" name="continent" required value={continent} onChange={e => setContinent(e.target.value)} placeholder='Continent' />
            </div>
            <div className='buttons'>
              <button className='btn-clean'>Clean</button>
              <button type='submit' className='btn-create'>create</button>
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