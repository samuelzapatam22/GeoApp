import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SliderBar from '../sliderBar/SliderBar';
import SearchBar from "../searchBar/SearchBar.jsx";
import './listCountries.css'
import Swal from "sweetalert2";


function ListCountries() {
  const [lists, setList] = useState([]);
  const [details, SetDetails] = useState(false);
  const [info, setInfo] = useState({});

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

  const handleCountryClick = () => {

    lists.map((list) => (
      <p>{list.currency}</p>
    ))
    SetDetails(false)
    console.log('click');
  };

  return (
    <div className='slider-bar'>
      <SliderBar />
      <div className='container-ListCountries'>
        <SearchBar/>
        <div className='ListCountries'>
        {lists.map((list) => (
          <div key={list._id} className='ListCountriesItem' onClick={handleCountryClick}>
            <img src={`https://flagsapi.com/${list.code}/flat/64.png`} />
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
