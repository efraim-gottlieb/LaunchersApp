import "./SearchBar.css";

function SearchBar({ DATA, seter }) {
  // search by city
  const handleSearchCity = (event) => {
    const search = event.target.value.toLowerCase();
    const filteredData = DATA.filter((item) =>
      item.city.toLowerCase().includes(search),
    );
    seter(filteredData);
  };

  //filter by type
  const filterByType = () => {
    const filter = document.getElementById("type");
    const filteredData = DATA.filter((item) =>
      item.rocketType.toLowerCase().includes(filter.value.toLowerCase()),
    );
    seter(filteredData);
  };

  // fiter destroyed
  const filterByDestroyed = () => {
    const filteredData = DATA.filter((item) => item.destroyed);
    seter(filteredData);
  };

  return (
    <div className="search-bar">
      <label htmlFor="city">City:</label>
      <input
        id="city"
        type="text"
        placeholder="Search..."
        onChange={handleSearchCity}
      />
      <label htmlFor="type">Type:</label>
      <input id="type" type="text" />
      <button onClick={filterByType}>Filter</button>
      <button onClick={filterByDestroyed}>Destroyed</button>
      <button onClick={() => seter(DATA)}>All</button>
    </div>
  );
}

export default SearchBar;
