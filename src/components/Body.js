import Card from "./Card";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
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
    // console.log(json);

    setRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div className="about-cntnr">
        <h1>
          Unable to load data. Looks like you're offline , check your internet
          connection
        </h1>
      </div>
    );
  }

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
    let filteredRestaurant = restaurant.filter((res) => res.info.avgRating > 4);
    setFilteredRestaurant(filteredRestaurant);
  };

  return restaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex p-4 mx-4">
        <input
          type="text"
          className="border-black border-solid p-1 mr-2 w-80 h-8"
          placeholder="search"
          value={searchText}
          onChange={handleChange}
        />
        <button
          className="px-2 py-0=1 bg-gray-700 text-cyan-50 rounded-sm h-8"
          onClick={handleSearch}
        >
          Search Restaurant
        </button>

        <div className="flex">
          <button
            className="px-2 py-1 mb-3 mx-12 bg-gray-700 text-cyan-50 rounded-sm h-8"
            onClick={handleFilter}
          >
            Top Restaurant
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 ml-16">
        {filteredRestaurant.map((restaurant) => (
          //Not using Key(not acceptable) <<<< Use Index as key(bad practice) <<<< Unique Id as key (perfect)
          <Card key={restaurant?.info.id} resData={restaurant?.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
