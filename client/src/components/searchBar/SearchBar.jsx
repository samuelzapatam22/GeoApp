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
    setShowPopup(false);
  };

  const handleButtonClick = () => {
    setShowPopup(!showPopup);
  };

  const limpiar = () => {
    setSelectedContinent(null)
    setShowPopup(false)
    console.log("limpiando")
  }
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
            <div className="header-popup">
            <h3>filtrar por continentes</h3>
            <p className="limpiar" onClick={limpiar}>Limpiar</p>
            </div>
            <div className="container-popup">
              <div className="continents">
                <div className="boxx">
              <img className="europa" src={europa} alt="" onClick={() => handleContinentClick('Europe')} />
              <p>Europa</p>
              </div>
              <div className="boxx">
              <img className="asia" src={asia} alt="" onClick={() => handleContinentClick('Asia')} />
              <p>Asia</p>
              </div>
              <div className="boxx">
              <img className="oceania" src={oceania} alt="" onClick={() => handleContinentClick('Oceania')} />
              <p>Oceania</p>
              </div>
              <div className="continents">
              <div className="boxx">
              <img className="n-america" src={namerica} alt="" onClick={() => handleContinentClick('North America')} />
               <p>Norte America</p>
               </div>
               <div className="boxx">
              <img className="s-america" src={samerica} alt="" onClick={() => handleContinentClick('South America')} />
              <p>Sur America</p>
              </div>
              <div className="boxx">
              <img className="africa" src={africa} alt="" onClick={() => handleContinentClick('Africa')} /> 
              <p>Africa</p>
              </div>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
