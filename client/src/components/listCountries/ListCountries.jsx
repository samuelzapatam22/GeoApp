import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SliderBar from '../sliderBar/SliderBar';
import SearchBar from "../searchBar/SearchBar.jsx";
import './listCountries.css'
import 'boxicons'

function ListCountries() {
  const [lists, setLists] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [filteredLists, setFilteredLists] = useState([]);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/countries/getCountries');
        setLists(response.data);
        setFilteredLists(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getCountry();
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    if (!query) {
      setFilteredLists(lists); // Mostrar la lista completa si el campo de búsqueda está vacío
    } else {
      const filtered = lists.filter(
        (item) =>
          item.name.toLowerCase().indexOf(query) !== -1
      );
      setFilteredLists(filtered);
    }
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const handleCloseDetails = () => {
    setSelectedCountry(null);
  };

  return (
    <div className='slider-bar'>
      <SliderBar />
      <div className='container-ListCountries'>
        <SearchBar handleSearch={handleSearch} />
        <div className='ListCountries'>
          {filteredLists.map((list) => (
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
          <button className='btn-close' onClick={() => handleCloseDetails()}><box-icon name="x"></box-icon></button>
          <h2>{selectedCountry.name}</h2>
          <div className='head-popup'>
            <img src={`https://flagsapi.com/${selectedCountry.code}/flat/64.png`} alt={selectedCountry.name} />
            <h2>{selectedCountry.continent?.name}</h2>
          </div>
          <div className='details-container'>
            <p>Currency: <span>{selectedCountry.currency}</span></p>
            <p>Language: <span>{selectedCountry.languages}</span></p>
            <p>Capital: <span>{selectedCountry.capital}</span></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListCountries;
