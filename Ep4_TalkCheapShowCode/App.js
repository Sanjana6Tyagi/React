import React from "react";
import ReactDOM from "react-dom/client";
import icon from "./assets/icons/star.png";
/**
 * Header
 *   - Logo
 *   - Nav items
 * Body
 *   - search
 *   - RestaurantContainer
 *       -RestaurantCard
 *            - Image
 *            - Name of Restaurant, Star Rating, cuisine etc
 *
 * Footer
 *    - Copyright
 *    - Address
 *    - Contact
 */
const styleCard = {
  backgroundColor: "#f0f0f0",
  position:"relative"
};
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const Restaurantcard = (props) => {
  // The below line show how we will do destructuring of an object and we can do directly in above round brackets by wrapping the resData in curly braces
  const { resData } = props;
  const { name, rating, deliveryTime, cuisine, restroAddress, image} = resData;
  return (
    <div className="res-card" style={styleCard}>
      <img
        alt="res-logo"
        className="res-logo"
        src={image}
        
      />
     
     <h2 className="res-offer-heading" >50% OFF UPTO ₹80 </h2>

      
      <h3> {name}</h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "black",
          height: "0px",
        }}
      >
        <img src={icon} alt="rating-icon" className="rating-icon" />
        <h4>{rating}</h4> <h4 className="res-delivery-time">{deliveryTime}</h4>
      </div>
      <h4 className="res-cuisine-address">{cuisine}</h4>
      <h4 className="res-cuisine-address">{restroAddress}</h4>
    </div>
  );
};
const obj = [
  {
    name: "Meghana Foods",
    cuisine: "North Indian, Biryani, Asian",
    rating: "4.4",
    deliveryTime: "38 minutes",
    restroAddress: "Shanti Nagar",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wet9zrjusmdtkk16jlrz",
    id:"1"
  },
  {
    name: "Bangalore Bistro",
    cuisine: "Italian, Continental",
    rating: "4.2",
    deliveryTime: "45 minutes",
    restroAddress: "MG Road",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
    id:"2"
  },
  {
    name: "Spice Junction",
    cuisine: "South Indian, Chinese",
    rating: "4.6",
    deliveryTime: "30 minutes",
    restroAddress: "Koramangala",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/96aaf72372ad1b0297b7cc304ced7e33",
    id:"3"
  },
  {
    name: "Tandoor Palace",
    cuisine: "Mughlai, Kebabs",
    rating: "4.0",
    deliveryTime: "50 minutes",
    restroAddress: "Indiranagar",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/94654fdf308764cd0faf83dba35bcdc3",
    id:"4"
  },
  {
    name: "Urban Spice",
    cuisine: "Mexican, Thai",
    rating: "4.5",
    deliveryTime: "40 minutes",
    restroAddress: "Whitefield",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/m6jahioyu7zrodei5pcq",
    id:"5"
  },
  {
    name: "Chilli Express",
    cuisine: "Szechuan, Fast Food",
    rating: "4.2",
    deliveryTime: "35 minutes",
    restroAddress: "Marathahalli",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e8f48a82caf1cdc428448f64dba7b61e",
    id:"6"
  },
  {
    name: "Flavors of India",
    cuisine: "Indian, Street Food",
    rating: "4.3",
    deliveryTime: "42 minutes",
    restroAddress: "BTM Layout",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bfcea2108aea7a98f2b370b78b2fdac0",
    id:"7"
  },
  {
    name: "Pasta Paradise",
    cuisine: "Pasta, Italian",
    rating: "4.7",
    deliveryTime: "28 minutes",
    restroAddress: "Jayanagar",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e62351117b87978ba8af4c541d834053",
    id:"8"
  },
  {
    name: "Crispy Corner",
    cuisine: "Fast Food, Burgers",
    rating: "4.1",
    deliveryTime: "48 minutes",
    restroAddress: "Malleshwaram",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aff0be3ebc62e299701c087b8dcd1c0d",
    id:"9"
  },
  {
    name: "Green Leaf Cafe",
    cuisine: "Vegetarian, Healthy",
    rating: "4.5",
    deliveryTime: "33 minutes",
    restroAddress: "Yeshwantpur",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xasb3saoezi04u4c76u0",
    id:"10"
  },
  // Add more restaurant objects as needed
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* Restaurant card */}
        {/* Below line shows how to pass a data object to component */}
        {obj.map((item)=>
        <Restaurantcard key={item.id}resData={item} />
)}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
/*whenever you have to pass data dynamically to you components then you can pass
them as props*/
/*config driven UI: our website UI is driven by config and config is data coming from backend  like you know if we are at a different 
location then we will not create a separate website we will use one website for every location, We have wriiten the Ui once and now according 
to the data coming from backend our UI is getting changed and this is known as config driven UI*/

/* whenever you are looping over anything you have to always give a key.we will understand by an example suppose under container we have 4 restro cards
and we havent given any unique id so if any new restro card comes in it will re-render all of the previous restro cards also as it couldn't identify which one is new 
but if you give each of them unique id so now if any new card will come with an id:"xyz" so now react will know that previous id are already there and it will render only
one restro card which has come as a new restro card. This is a big optimization technique while building apps */ 
// React say that dont put indexes for keys cze the order of items may change
