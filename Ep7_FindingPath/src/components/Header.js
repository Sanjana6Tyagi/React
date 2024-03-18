import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  let btnName = "Login";
  const [btnNameReact, setBtnname] = useState("Login");
  /*when you don't pass a dependency array in useeffect then the useEffect will be called after every render of 
the component*/
  /* if we pass an empty dependency array then the useEffect will be called only on initial render and just once when
the component is render for the first time */
  /* If we pass some value in the dependency array then the useffect will called when the value changes/updated */
  useEffect(() => {
    console.log("useffect header called");
  }, [btnNameReact]);
  return (
    <div className="header">
      <div className="logo-container">
        <img alt="requested logo not found" className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        {/* the below <a></a> tag and <Link></Link> component are used to show the difference between the two */}
        <ul>
          <li> <Link to="/">Home</Link></li>
          <li><a href="/about">About Us</a></li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>

          <button
            className="login-btn"
            onClick={() => {
              btnName = "Logout";
              btnNameReact === "Login"
                ? setBtnname("Logout")
                : setBtnname("Login");
              console.log(btnName);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
