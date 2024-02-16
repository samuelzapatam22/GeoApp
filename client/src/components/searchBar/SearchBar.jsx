import "./SearchBar.css";

const SearchBar = ({ handleSearch }) => {
    return (
      <div className="SearchBar">
        <input
          name="query"
          type="text"
          placeholder="Countries..."
          onChange={handleSearch}
        />
      </div>
    );
  };

export default SearchBar;