import "./SearchBar.css";
import { useState } from "react";
import axios from 'axios';
import samerica from '../../assets/AMERICA.png'
import europa from '../../assets/EUROPA.jpg'
import africa from '../../assets/AFRICA.jpg'
import asia from '../../assets/ASIA.jpg'
import oceania from '../../assets/OCEANIA.jpg'
import namerica from '../../assets/NAMERICA.jpeg'




const SearchBar = ({ handleSearch, setSelectedContinent }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleContinentClick = (continent) => {
    setSelectedContinent(continent);
    setShowPopup(!showPopup);
  };

  const handleButtonClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="SearchBar">
      <input
        className="input-SearchBar"
        name="query"
        type="text"
        placeholder="País"
        onChange={handleSearch}
      />
      <button className="Button" onClick={handleButtonClick}>Buscar</button>
      {showPopup && (
        <div className="popup">
          <div className="head-continent-popup">
            <h3>filtrar por continentes</h3>
            <div className="container-popup">
              <img className="europa" src={europa} alt="" onClick={() => handleContinentClick('Europe')} />
              <img className="asia" src={asia} alt="" onClick={() => handleContinentClick('Asia')} />
              <img className="oceania" src={oceania} alt="" onClick={() => handleContinentClick('Oceania')} />
              <img className="n-america" src={namerica} alt="" onClick={() => handleContinentClick('North America')} />
              <img className="s-america" src={samerica} alt="" onClick={() => handleContinentClick('South America')} />
              <img className="africa" src={africa} alt="" onClick={() => handleContinentClick('Africa')} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};



export default SearchBar;
