import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  let btnName = "Login";
  const onLinestatus = useOnlineStatus();
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
    <div className="flex justify-between shadow-lg sm:bg-yellow-50 lg:bg-green-200">
      <div className="logo-container">
        <img alt="requested logo not found" className="w-56 " src={LOGO_URL}  />
      </div>
      <div className="flex items-center ">
        {/* the below <a></a> tag and <Link></Link> component are used to show the difference between the two */}
        <ul className="flex p-4 m-4 ">
          <li className="px-4">Online Status:{onLinestatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            {" "}
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="px-4">
            <a className="link" href="/about">
              About Us
            </a>
          </li>
          <li className="px-4">
            <Link className="link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link classNmae="link" to="/grocery">
              Grocery
            </Link>
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
