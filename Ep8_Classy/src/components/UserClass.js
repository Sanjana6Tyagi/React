import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      count: 10,
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "dummy image",
      },
    };
    console.log("constructor is called");
  }
  async componentDidMount() {
    console.log("componentDidMount called");
    //Make an Api call
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json, "ab");
     this.timer=setInterval(()=>{
      console.log("time intervak after every one second")
    },1000)
  }

  componentDidUpdate(prevProps,prevState) {
    if(this.state.count!=prevState)
    {

    }
    console.log("componentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("componentwillunmount called");
    clearInterval(this.timer)
  }

  render() {
    // const { name,location } = this.props;
    const { count } = this.state;
    const { location, avatar_url } = this.state.userInfo;
    console.log("render function is called");

    return (
      <div className="user-card">
        <h1>count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <img src={avatar_url} />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h3>location:{location}</h3>
        <h4>Contact: sanjana2123</h4>
      </div>
    );
  }
}
export default UserClass;
/* Whenever you are loading a class-based component it means you are creating
an instance of that class and whenever the instance is created the constructor function is called 
so the constructor is the best place to create state variables and to receive props */
// Never update state variable directly for example: this.state.count=this.state.count+1

/**
  -As soon as the UserClass will be loaded the constructor will be called and the state variablle will  be created
 with some initial/default values. then render function will be called and as you know the state variables
 at this point have default values so our component renders will happen with the default values which means the
 react will update the DOM with the default/dummy/initial data. Now the componentDidMount will be called 
 and the api call happen,and when the api call was made it call setstate so now when the setState will be called
 "Updating" phase will begin.
 -and when setState will called we are updating the state variable and as the state variable updates
 react will triggers the render function once again i.e again re-render the component and then calculates 
 the diff by reconciliation process and updates the actual DOM with the updated value so whenever setState call
 it will triggers the reconciliation process and update phase
 -After this in updating phase we have "componentDidUpdate"(you can refer the diagram given in the assignment solution of rahul)
 */
/**"Mounting" means showing onto the UI and "unmounting" means removing from the UI  and when will the component will remove from the 
 * Ui? It will remove when we will move to the different page and at this time componentwillUnmount will be called
*/

/*
*(MOUNTING CYCLE)
*
* constructor(dummy data)
* Render(dummy data)
*   <HTML Dummy data></HTML>
* ComponentDidMount
*    <API call make>
*     <this.setState>
*
*(UPDATE CYCLE)
*
* Render(new data from API call)
* <HTML new api data></HTML>
* componentDidUpdate
*
*(UNMOUNTING CYCLE)

*/
