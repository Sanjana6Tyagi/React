import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  let btnName = "Login";
  const [btnNameReact, setBtnname] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img alt="requested logo not found" className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          {/* I want that as soon as i click on the button the "login" should change to "logout" and again if i click the "logout"  should change to "login".
          Now we will try to update the button name by using normal javascript variable and then by state variable using useState Hook and we have seen
          when using normal javascript variable the btnname is changing on button click but the UI is not updating with the change btnName because the 
          change in normal variable does not causing a re-render of the component and if I use useState then when the state variable changes it will
          re-render the component with the updated value in the UI */}
          {/* React will have the track of the local state variablle and as soon as you will click on the button the local state variable changes and re-renders the
          Header component and findd the diff between the older version and the newer version and find out that in the diff only button is getting updated, this is diff algorith and
          reconciliation process and  now in the UI only the  button name  will be updated */}
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
