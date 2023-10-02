import Card from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  
  //local state variable

  const [restaurant, setRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    dataFetched();
  }, []);

  const dataFetched = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.765844&lng=83.3732&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    const filteredRestaurant = restaurant.filter((res) =>
      res.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredRestaurant(filteredRestaurant);
  };

  const handleFilter = () => {
    let filteredRestaurant = restaurant.filter((res) => res.info.avgRating >= 4);
    setRestaurant(filteredRestaurant);
  };

  return restaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-cntnr">
      <div className="search-box">
        <input
          type="text"
          className="input"
          placeholder="search"
          value={searchText}
          onChange={handleChange}
        />
        <button onClick={handleSearch}>Search Restaurant</button>
      </div>

      <div className="filter">
        <button onClick={handleFilter}>Top Restaurant</button>
      </div>
      <div className="restaurant-cntnr">
        {filteredRestaurant?.map((restaurant) => (
          //Not using Key(not acceptable) <<<< Use Index as key(bad practice) <<<< Unique Id as key (perfect)
          <Card key={restaurant?.info.id} resData={restaurant?.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
