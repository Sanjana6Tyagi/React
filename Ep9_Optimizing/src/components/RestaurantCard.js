import icon from "../../assets/icons/star.png";
import { CDN_URL } from "../utils/constants";
const Restaurantcard = (props) => {
  // The below line show how we will do destructuring of an object and we can do directly in above round brackets by wrapping the resData in curly braces
  const { resData } = props;
  const {
    name,
    avgRating,
    aggregatedDiscountInfoV3,
    cuisines,
    areaName,
    cloudinaryImageId,
    costForTwo,sla
  } = resData?.info;
  const styleCard = {
    // backgroundColor: "#f0f0f0",
    position: "relative",
  };
  console.log(props,"sale")
  return (
    <div className="res-card" style={styleCard}>
       
      <img
        alt="res-logo"
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        
      />
      
<div className="overlay"></div> 
      {aggregatedDiscountInfoV3?.header?(<h2 className="res-offer-heading">{aggregatedDiscountInfoV3?.header+" "+ aggregatedDiscountInfoV3?.subHeader} </h2>):(<></>)}

      <h3> {name}</h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "black",
          height: "0px",
          justifycontent:"center"
        }}
      >
        <img src={icon} alt="rating-icon" className="rating-icon" />
        <h4>{avgRating}</h4>
        <h1 style={{marginBottom:"19%",marginLeft:"4%"}}>.</h1>
        <h4 className="res-delivery-time">{sla.deliveryTime+" "+"minutes"}</h4>
      </div>

      <h4 className="res-cuisine-address">{cuisines.join(", ")}</h4>

      <h4 className="res-cuisine-address">{areaName}</h4>
      <h4 className="res-cuisine-address">{costForTwo}</h4>
      
    </div>
  );
};
export default Restaurantcard;
