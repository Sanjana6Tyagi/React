import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId,MENU_API);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);

  //   const json = await data.json();

  //   console.log(resInfo, json, "a");
  //   setResInfo(json.data);
  // };
  if (resInfo == null) return <Shimmer />;
  const {
    name,
    cuisines,

    costForTwoMessage,
  } = resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards, "menu");
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            <h3>{item.card.info.name}</h3>
            <p>
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}{" "}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

/*
- Here we are going to create our own custoom hooks and then use it in this restaurantmenu component.
- Creating a custom hook is not a mandatory thing but it is a good thing because that will make your code 
  look more readable,modular and reusable.
- If you see there are two major responsibility of this restaurantmenu component first is fetching the data
  and other is displaying the data onto the UI but the restaurantMenu component should only focus on displaying
  the data.
  - so now our RestaurantMenu component is following the single responsibility principle as we have abstracted the
  fetching functionality in a customHook and now the restaurantmenu is only responsible for displaying the menu.
  - The other feature we are building by using customHooks is online/offline like my website should know that whether the user is online
  or offline or the user internet is active or inactive in Body component.
*/
