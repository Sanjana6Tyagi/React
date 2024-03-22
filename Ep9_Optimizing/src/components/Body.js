import Restaurantcard from "./RestaurantCard";
import obj from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { RESTAURANT_CARD_API } from "../utils/constants";

const Body = () => {
  
   
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredrestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onLineStatus = useOnlineStatus();
  const list = useRestaurantMenu("", RESTAURANT_CARD_API);
  useEffect(() => {
    if (list != null) {
      setFilteredrestaurants(
        list?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    }
  }, [list]);
  // useEffect(() => {
  //   console.log("useEffect called");
  //   fetchData();
  // }, []);

  console.log(list,filteredRestaurants,"nn")
  //console.log(listOfRestaurants[1]?.info?.name, "sanjan");
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9505711&lng=77.64451679999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //Optional Chaining
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredrestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log("Body rendered");

  if (list === null) {
    return (
      //<h1>Loading......</h1>
      <Shimmer />
    );
  }

  if (onLineStatus === false)
    return (
      <h1>
        Looks like you're offline!!! Please check your internet connection
      </h1>
    );
  return list=== null ? (
    <Shimmer />
  ) : (
  
    <div className="body">
      
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter the restaurant card and update the UI
              console.log(searchText);
              const filteredRestaurants = list?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredrestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //Filter Logic Here

            const filteredList = list?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants.filter(
              (res) => res.rating > 4.2
            );

            setFilteredrestaurants(filteredList);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((item) => (
        <>

        {console.log("inside card",item)}
          <Link
            key={item.info.id}
            to={"/restaurants/" + item.info.id}
            className="link"
          >
            {" "}
            <Restaurantcard resData={item} />
          </Link>
          </>
        ))}
      </div>
    </div>
  );
};
export default Body;
/**- The additional feature we are building by using customHooks is online/offline like my website should know that whether the user is online
  or offline or the user internet is active or inactive in Body component. */
