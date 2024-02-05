import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SliderBar from '../sliderBar/SliderBar';

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
      <div className='ListCountries'>
        {lists.map((list) => (
          <div key={list._id}>
            <p>{list.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListCountries;
