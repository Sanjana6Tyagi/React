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



