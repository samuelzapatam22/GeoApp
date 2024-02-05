import "./SearchBar.css";

const SearchBar = (/* { onSearch } */) => {

/*     const [filterList, setFilterList] = useState(list);
 */
   /*  const handleSearch = (event) => {
        if (event.target.value === "") {
        } else {
            
        }
    }; */

    return (
        <div className='SearchBar'>
            <input name='query' type='text' placeholder='Countries...' /* onChange={ handleSearch } */ />
            <button className='Button' >Search</button>
        </div>
    );
};

export default SearchBar;