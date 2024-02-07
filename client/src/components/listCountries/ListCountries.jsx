import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SliderBar from '../sliderBar/SliderBar';
import SearchBar from "../searchBar/SearchBar.jsx";
import './listCountries.css'
import Swal from "sweetalert2";

function ListCountries() {
  const [lists, setList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/countries/getCountries');
        setList(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getCountry();
  }, []);

  const handleCountryClick = (country) => {
    setSelectedCountry(country); 
  };

  const handleCloseDetails = () => {
    setSelectedCountry(null)
  }
  return (
    <div className='slider-bar'>
      <SliderBar />
      <div className='container-ListCountries'>
        <SearchBar/>
        <div className='ListCountries'>
          {lists.map((list) => (
            <div key={list._id} className='ListCountriesItem' onClick={() => handleCountryClick(list)}>
              <img src={`https://flagsapi.com/${list.code}/flat/64.png`} alt={list.name} />
              <p>{list.name}</p>
              <p>{list.continent?.name}</p>
            </div>
          ))}
        </div>
      </div>
      {selectedCountry && (
        <div className="country-details">
          <h2>{selectedCountry.name}</h2>
          <p>Currency: {selectedCountry.currency}</p>
          <button onClick={() => handleCloseDetails()}>cerrar</button>
        </div>
      )}
    </div>
  );
}

export default ListCountries;

