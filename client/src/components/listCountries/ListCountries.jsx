import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SliderBar from '../sliderBar/SliderBar';
import SearchBar from "../searchBar/SearchBar.jsx";

function ListCountries() {
  const [lists, setList] = useState([]);

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
  }, []);  // Empty dependency array to run useEffect only once

  return (
    <div className='slider-bar'>
      <SliderBar />
      <SearchBar/>
      <div className='ListCountries'>
        {lists.map((list) => (
          <div key={list._id}>
            <p>{list.name}</p>
            <p>{list.continent?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListCountries;
