import Restaurantcard from "./RestaurantCard";
import obj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //State variable- super powerful  variable
  /*The below state variable and function of useState hook is known as array destructuring which is same as doing 
  const arr=useState(obj);
  const listOfRestaurants=arr[0];
const setListOfRestaurant=arr[1];*/
  const [listOfRestaurants, setListOfRestaurant] = useState(obj);

  //Normal JS variable how  to create and update

  let list = [];
  list = ["abc"];
  list.push("abc");

  return (
    <div className="body">
      <div className="filter">
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
        {/* Restaurant card */}
        {/* Below line shows how to pass a data object to component */}
        {listOfRestaurants.map((item) => (
          <Restaurantcard key={item.id} resData={item} />
        ))}
      </div>
    </div>
  );
};
export default Body;
/* React hook is a normal javascript utility functions which is given to us by react. 
- useState() = This is used to create superpowerful state variables in react
- useEffect() = 
*/
/* whenever a state variable updates/changes, React re-renders the component */

//React will make the DOM operations super fast and efficient.

/*React will keep your UI synk with the data layer, In the data layer when you have local 
state variable so as soon as your data layer updates, UI will update by re-rendering as soon 
as data changes react will re-render the code fastly and efficiently*/
