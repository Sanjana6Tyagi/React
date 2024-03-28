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
    <div className="m-4 p-4 w-[250px] h-[350px]" style={styleCard}>
       
      <img
        alt="res-logo"
        className="rounded-2xl w-[210px] h-[160px]  shadow-md"
        src={CDN_URL + cloudinaryImageId}
        
      />
      
<div className="bg-gradient-to-b from-transparent to-black via-transparent bg-opacity-0.95 h-[18%] w-[84%] bottom-[170] absolute rounded-b-2xl "></div> 
      {aggregatedDiscountInfoV3?.header?(<h2 className="text-white font-extrabold absolute bottom-[178px] pl-2">{aggregatedDiscountInfoV3?.header+" "+ aggregatedDiscountInfoV3?.subHeader} </h2>):(<></>)}

      <h3 className="font-bold  text-lg text-gray-700 pt-2"> {name}</h3>
      <div
        className="flex items-center "
      >
        <img src={icon} alt="rating-icon" className="w-5 h-5 mx-1" />
        <h4 className="mr-1 font-medium text-gray-700">{avgRating}</h4>
        <h1 className="font-black text-xl pb-2 text-gray-700">.</h1>
        <h4 className="ml-1 font-medium text-gray-700">{sla.deliveryTime+" "+"minutes"}</h4>
      </div>

      <h4 className="font-light text-gray-600">{cuisines.join(", ")}</h4>

      <h4 className="font-light text-gray-600">{areaName}</h4>
      <h4 className="font-light text-gray-600">{costForTwo}</h4>
      
    </div>
  );
};
export default Restaurantcard;
