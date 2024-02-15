import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SliderBar from '../sliderBar/SliderBar';
import SearchBar from "../searchBar/SearchBar.jsx";
import './listCountries.css'
import Swal from "sweetalert2";

function ListCountries() {
  const [lists, setList] = useState([]);
  const [filteredLists, setFilteredLists] = useState([]);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/countries/getCountries');
        setList(response.data);
        setFilteredLists(response.data); // Inicialmente, mostrar todos los países
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

  const handleCountryClick = (list) => {
    console.log('Click on country:', list.name);
    // Aquí puedes manejar la lógica para mostrar los detalles del país seleccionado
  };

  return (
    <div className='slider-bar'>
      <SliderBar />
      <SearchBar handleSearch={handleSearch} />
      <div className='container-ListCountries'>
        <div className='ListCountries'>
          {filteredLists.map((list) => (
            <div key={list._id} className='ListCountriesItem' onClick={() => handleCountryClick(list)}>
              <img src={`https://flagsapi.com/${list.code}/flat/64.png`} alt={`${list.name} flag`} />
              <p>{list.name}</p>
              <p>{list.continent?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default ListCountries;
