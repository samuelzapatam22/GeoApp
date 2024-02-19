import React, { useState, useEffect } from 'react';
import axios from 'axios';
import no_found from '../../assets/not_found.png'
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

  const fetchImages = async (country) => {
    const searchTerm = `landscape ${country.name}`;
    const pixabayResponse = await axios.get(`https://pixabay.com/api/?key=41410303-8519e05926d07343adf71a333&q=${searchTerm}&image_type=photo&category=places`);
    const imageHits = pixabayResponse.data.hits;
    const imageURL = imageHits.length > 0 ? imageHits[0].webformatURL : no_found;
    return imageURL;
  };

  useEffect(() => {
    const fetchCountriesWithImages = async () => {
      const promises = filteredLists.map(async (country) => {
        const imageURL = await fetchImages(country);
        return {
          ...country,
          imageURL: imageURL
        };
      });
      const countriesWithImages = await Promise.all(promises);
      setFilteredLists(countriesWithImages);
    };

    fetchCountriesWithImages();
  }, [lists]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    if (!query) {
      setFilteredLists(lists); 
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
      <div className='container-ListCountries'>
        <SearchBar handleSearch={handleSearch} />
        <div className='ListCountries'>
          {filteredLists.map((list) => (
           <div className={`ListCountriesItem ${selectedCountry === list ? 'card-active' : ''}`} onClick={() => handleCountryClick(list)}>
              <div className='image-head'>
              <img src={list.imageURL} className='img-country' alt={list.name} />
              </div>
              <div className='footer-card'>
                <div className='bandera-cad'>
              <img src={`https://flagsapi.com/${list.code}/flat/64.png`} alt={list.name} />
              </div>
              <div className='info-card'>
              <h2>{list.name}</h2>
              <p>{list.continent}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedCountry && (
        <div className={`country-details ${selectedCountry ? 'show-details' : ''}`}>
          <button className='btn-close' onClick={() => handleCloseDetails()}><box-icon name="x"></box-icon></button>
          <img src={selectedCountry.imageURL} className='img-country-details' alt={selectedCountry.name} />
          <div className='head-popup'>
          <div className='name-details'>
          <img src={`https://flagsapi.com/${selectedCountry.code}/flat/64.png`} alt={selectedCountry.name} />
          </div>
          <div className='continent.popup'>
          <h2>{selectedCountry.name}</h2>
          <p>{selectedCountry.continent}</p>
          </div>
          </div>
          <div className='details-container'>
          <p className='p-details'>Capital: <span>{selectedCountry.capital}</span></p>
            <p className='p-details'>Currency: <span>{selectedCountry.currency}</span></p>
            <p className='p-details'>Language: <span>{selectedCountry.languages}</span></p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListCountries;
 