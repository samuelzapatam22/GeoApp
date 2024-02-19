import "./SearchBar.css";
import { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [showPopup, setShowPopup] = useState(false);

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
            <img className="asia" src="https://thumbs.dreamstime.com/b/europa-continente-con-los-contornos-de-pa%C3%ADses-dibujo-vectorial-forma-del-plan-distrito-la-isla-norte-sobre-fondo-blanco-l%C3%ADnea-226176348.jpg" alt="" />
          </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default SearchBar;
