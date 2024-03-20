import User from "./User";

import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor() {
    super();
    console.log("parent constructor called");
  }
  componentDidMount() {
    console.log("Parent component did mount is called");
  }
  render() {
    console.log("Parent render is called");
    return (
      <div>
        <h1>About</h1>
        <h2>This is React Food Delivery Project</h2>
        {/* <User name={"sanjana Tyagi"}/> */}
        <UserClass
          name={"sanjana Tyagi (Class)(child1)"}
          location={" Dehradun(class)"}
        />
        
      </div>
    );
  }
}
export default About;

/*when the above About component is loaded then first "constructor" is called then
"render" is called and then it will see the UserClass component so at this point About component haven't
finished mounting so it will go to the UserClass component and triggers the 
lifecycle methods so therefore the "constructor" function of UserClass component
is called and then "render" and then "componentDidmount" of UserClass and now once the child i.e UserClass is mounted successfully then 
 the "ComponentDidMount" of parent component i.e About component is called */

