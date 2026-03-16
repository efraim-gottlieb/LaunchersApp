import "./SearchBar.css"

function SearchBar({ DATA, seter } ) {
  // search by city
  const handleSearchCity = (event) => {
    const search = event.target.value.toLowerCase();
    const filteredData = DATA.filter((item) =>
      item.city.toLowerCase().includes(search)
    );
    seter(filteredData);
    };
  
    //filter by type
    const filterByType = () => {
      const filter = document.getElementById('type')
      const filteredData = DATA.filter((item) =>
        item.rocketType.toLowerCase().includes(filter.value.toLowerCase())
      );
      seter(filteredData);
    }
  

  return (
    <div className="search-bar">
      <div className="search-bar">

      <h3>Search</h3>
      <div>
        <label htmlFor="city">City:</label>
        <input id="city" type="text" placeholder="Search..." onChange={handleSearchCity} />
      </div>
      <div>
        <label htmlFor="type">Type:</label>
        <input id="type" type="text" placeholder="Search..."/>
      <button onClick={filterByType}>filter</button>
      </div>
      
      <button onClick={() => seter(DATA)}>All</button>
      </div>

    </div>
  )
}

export default SearchBar

