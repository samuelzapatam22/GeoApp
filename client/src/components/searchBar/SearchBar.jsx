import "./SearchBar.css";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="SearchBar">
      <input
        className="input-SearchBar"
        name="query"
        type="text"
        placeholder="País"
        onChange={handleSearch}
      />
      <button className="Button">Buscar</button>
    </div>
  );
};

export default SearchBar;
