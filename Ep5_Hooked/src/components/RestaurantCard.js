import   icon from "../../assets/icons/star.png"


const Restaurantcard = (props) => {
    // The below line show how we will do destructuring of an object and we can do directly in above round brackets by wrapping the resData in curly braces
    const { resData } = props;
    const { name, rating, deliveryTime, cuisine, restroAddress, image} = resData;
    const styleCard = {
        backgroundColor: "#f0f0f0",
        position:"relative"
      };
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
  export default Restaurantcard;