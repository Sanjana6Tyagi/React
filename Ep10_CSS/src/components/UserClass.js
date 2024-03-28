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
    this.timer = setInterval(() => {
      console.log("time intervak after every one second");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count != prevState) {
    }
    console.log("componentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("componentwillunmount called");
    clearInterval(this.timer);
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
