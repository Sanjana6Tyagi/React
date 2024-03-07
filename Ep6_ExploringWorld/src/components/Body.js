import Restaurantcard from "./RestaurantCard";
import obj from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredrestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  //useEffect hook will take two arguments one is arrow function and the other is the dependency array
  /*When the callback function inside useEffect will be called? It will call after our component renders.
  when the Body component will load, It will render the component and as soon as the render cycle finishes it will 
  call the calback function which we have passed in useEffect
  */
  //If you want to do something after rendering the component, you have to keep it inside useEffect.
  /*The below code is executed like as soon as the Body component rendered the code starts executing line by line 
    and as it sees the useEffect  it just keeps/save the callback function to call it after render and then it logs 
    in console "Body rendered" and then the JSX is rendered and we will see the UI on our webpage and after that the
     callback function will be executed and log "useEffect called" in console */
  /* Our browser is not allowing to call the API from one origin to another origin. so if there is an origin mismatch 
the browser blocks the api call. This is CORS policy  */
  //Now I will resolve this by installing an extension "CORS Chrome extension"
  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);
console.log(listOfRestaurants[1]?.info?.name,"sanjan")
  const fetchData = async () => {
    //The below api call is not happening because of the CORS restriction i have added the CORS allo extensu=ion but that also not working for me after that
    //I have click on the extension and there is one toggle so we need too on it and then the extension will change the colour means its activated so now for me it is workinf
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9505711&lng=77.64451679999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //Optional Chaining
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredrestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  console.log("Body rendered");

  /* showing the loader if the data is empty is old way now the latest way is "Shimmer UI" which resembles the
     page actual UI,so user will understand how quickly the web or mobile app will load even before the content
     has shown up, In this we have make a fake impression that the actual cards are coming up so this is the idea 
     behind showing shimmer UI*/
  //Below is the conditional rendering by using if and ternary operator, The rendering which depends on some condition is called conditional rendering.

  if (listOfRestaurants.length === 0) {
    return (
      //<h1>Loading......</h1>
      <Shimmer />
    );
  }
  return listOfRestaurants.length === 0 ? (
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
              const filteredRestaurants = listOfRestaurants.filter((res) =>
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

            const filteredList = listOfRestaurants.filter(
              (res) => res.rating > 4.2
            );

            setListOfRestaurant(filteredList);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((item) => (
          <Restaurantcard key={item.info.id} resData={item} />
        ))}
      </div>
    </div>
  );
};
export default Body;
