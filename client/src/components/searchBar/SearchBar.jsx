import "./SearchBar.css";
import { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = ({handleSearch}) => {
  const [lists, setList] = useState([]);
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/countries/getCountries"
        );
        const countries = response.data.map((country) => ({
          name: country.name
        }));
        setList(countries);
        setFilterList(countries);
        console.log(countries);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getCountry();
  }, []);


  return (
    <div className="SearchBar">
      <input
        name="query"
        type="text"
        placeholder="Countries..."
        onChange={handleSearch}
      />

     
      <button className="Button">Search</button>
    </div>
  );
};

export default SearchBar;
