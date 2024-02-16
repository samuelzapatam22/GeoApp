import "./SearchBar.css";

const SearchBar = ({ handleSearch }) => {
    return (
      <div className="SearchBar">
        <div className="head-input">
        <input className="input-SearchBar"
          name="query"
          type="text"
          placeholder="País"
          onChange={handleSearch}
        />
        </div>
        <button className="Button">Buscar</button>
      </div>
    );
  };

export default SearchBar;