<!-- Class based components are the older way of creating components in react  -->
<!-- The functional component is basically a javascript function which will return a piece of JSX-->
<!-- A class based component is basically a class which extends React.component and has a render method that returns a piece of JSX.  -->
<!-- What is React.Component?: React.Component is basically a class which is given to us by React and userClass is inheriting some properties from it -->

<!-- Why to use super keyword? : so supppose we have a parent class with a constructor method -
class HeadPhone{
   constructor(){
     console.log("this is a parent class")
   }
}

so now we can extend this class with the extends keyword and when you extend a class it will inherit all the methods and properties from the extebded class-
class BrandA extends HeadPhone{

}
const brand=new BrandA();

so when it instantiates,it executes the class Headphone and its constructor method. we can also override the parent class constructor method by defining a constructor method inside the derived class-
class BrandA extends HeadPhone{
   constructor()
   {
      console.log("this is derived class BrandA");
   }
}

Javascript uses super() to call the parent constructor method in the child which inherits the parent-
class HeadPhone{
constructor(type)
{
   this.type=type;
}
}

Now if you want to create a different child classes by extending HeadPhone. Instead of defining type properties on each child class, we can extend the parent class type property and access it in child classes-
class brandA extend Headphone{
   constructor(props){
      super()
   }
   getType(){
      return this.type
   }
}
const A=new BrandA("overTheEar");
console.log(A.getType())

**The reason of writing super(props) is it allows accessing this.props in a constructor function. infact the super() functiion calls the constructor of the parent class-
class Person extends React.Component {
    constructor(props) {

        console.log(this.props);
    }
    render() {
        console.log(this.props);
        return null;
    }
}

This is because the child class constructor i.e. the Person Class here, will not recognize this keyword until super() function has been called. But the code outside the constructor will not get affected in any way. It will not affect the rendering or availability of this.props in the render() function.

class Person extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        console.log(this.props);
        return null;
    }
}
Now we are getting an output (here props have nothing in it, that’s why it is an empty object) which means the props are getting logged into the console. When we call this super(props), we are basically calling the constructor of React.Component. So we can say that super() is a reference to the parent class constructor i.e. React.Component in the above example, is also the base class for the Person component. So when we pass props to super, the props get assigned to this also.

So, to conclude, If we want to use this.props or simply this keyword inside the constructor, we need to pass the props coming from the parent class (React.Component in this case) in super.
 -->
<!-- LIFECYCLE METHODS -->
<!-- 1:> MOUNTING PHASE -->
<!-- When a class based component is instantiated or when an instance of class based component is created then firstly the "constructor" will be called and then the "render" method and once this component is on the DOM then this "componentDidMount" is called and this is the lifecycle of this class component -->
 <!-- componentDidMount is used to make API calls but now the question arises that why api call is made inside componentDidmount?:because first of all we will load the component and once the component is loaded with initial data then we will make an api call and the data returned from the api we will fill up this data in the component so that the component will load fast because react will not wait for the api call to return the result and then load the component  so thats why we are making an api call inside componentDidMount because i want to quickly render the component and then make an api call and then fill up the component with the data returned from an api -->
 <!-- If in our parent About component we will call two child UserClass component then what will be the order of the lifecyclemethods so below is the order:
 -parent About constructor
 -parent About render
   -child1 UserClass constructor
   -child1 UserClass render
   -child2 UserClass constructor
   -child2 UserClass render
   -child1 UserClass componentdidmount
   -child2 UserClass componentdidmount
-parent About componentdidmount -->
<!-- Now question arises why the order of the lifecycle methods is like this so for understanding this we will inderstand by one diagram and the link is given in assignment:
- so the mounting of a component will happen in two phases "Render phase" and "Commit phase"
- so when our component is mounting first "constructor" is called then the "render" method is called  and these two will come under the "Render Phase"
- Then the React will updates the DOM and then "componentDidMount" is called and these two will come under the "commit pahse"
-so now we can understnd through our code so first of all the About component will starts its mounting phase and parent constructor will be called and then the parent render is called and now it sees that there is a child UserClass  component so it goes to the first UserClass child component and starts the lifecycle of it and therefore constructor of first child is called and then the render of first child is called now because two children are present in prent About component so react will optimize this and will not calll the componentDidmount of child1 userclass component but it will patch the render phase of two child Userclass component so these two child render phase will happen first then commit pase will happen-->

<!-- 2> UPDATING PHASE: explanation in userclass component -->
<!-- 3 >UNMOUNTING PHASE: explanation in userclass component-->

Why we use super(props)?

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

Parent Constructor || Parent Render || First Child Constructor || First Child Render || Second Child Constructor || Second Child Render || First Child Componend did mount || Second Child Componend did mount || Parent Component did mount

1. **How do you create Nested Routes in react-router-dom configuration?**
   Nested routes in react-router-dom are routes that are defined within the scope of other routes. To create nested routes, you typically use the Route component inside the components rendered by other Route components. Heere's how you can create nested routes:

import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App(){
return(
<Router>
<Switch>
<Route path="/" exact component={Home}/>
<route path="/products" component={Productdetail}/>
</Switch>
</Router>
)
}

function products(){
return(

<div>
<h2>Products</h2>
<Route path="/products/:id" component={ProductDetail}/>
</div>
)
}

function productDetail({match}{
const{id}=match.patrams;
return <p>Product ID:{id}</p>
})

In this example, the Products component contains a nested route for ProductDetail.

2. **Read about createHashRouter and createMemoryRouter from React Router docs.**

- createHashRouter: is a router that uses the URL hash(e.g: /#/route) for routing. It's suitable for single-page applications(SPAs) that don't have server-side routing configured.
- createMemoryRouter: is a router that doesn't rely on the browser's URL. it's useful for testing,server-side rendering(SSR), and scenarios where you need routing in a non-browser environment.

3. **What is the order of life cycle method calls in Class-Based Components? Why do we use componentDidMount?**
   In class-based components, the order of lifecycle methods calls is typically as follows:
1. constructor(props)
1. static getDerivedStateFromProps(props,state)
1. render()
1. componentDidMount()

componentDidMount is called after the component has been rendered in the DOM. it's a common place to perform side effects such as data detching, setting up subscriptions, or interacting with the DOM. It's used for operations that should occur after the component has been mounted and is ready for interaction.

4. **Why do we use componentWillUnmount?how with an example.**
   componentWillUnmount is used to perform cleanup or teardown operation before a component is removed from the DOM. It's commonly used to cancel network requets, unsubscribe from event listeners, or release any resources held by the component.

   class Timer extends React.Component {
   constructor(props) {
   super(props);
   this.state = { seconds: 0 };
   }

componentDidMount() {
this.timerId = setInterval(() => {
this.setState({ seconds: this.state.seconds + 1 });
}, 1000);
}

componentWillUnmount() {
clearInterval(this.timerId); // Clean up the timer when the component is unmounted
}

render() {
return <div>Seconds: {this.state.seconds}</div>;
}
}
In this example, we set up a timer in componentDidMount and clear it in componentWillUnmount to prevent memory leaks when the component is removed.

5. **Research why do we use super(props) in constructor?**
   In class-based React components, when you define a constructor, you should call super(props) as the first statement within the constructor. This is necessary because it invokes the constructor of the parent class(React.component), which is essential for initializing the components correctly.

   passing props to super(props) ensures that the component inherits and properly intializes the props from its parent component. without it, you may encounter unexpected behavior or errors related to props usage.

6. **Research why can't we have the callback function of useEffect async?**
   In React's useEffect hook, you cannot define the callback function as async because React expects the callback function to return either nothing or a cleanup function (a function to clean up side effects). An async function always returns a Promise, and React doesnt handle Promises returned from the useEffect callback.
   To work with asynchronous operations within useEffect, you can define an inner async function and call it within the useEffect callback. For example:

   useEffect(() => {
   const fetchData = async () => {
   try {
   const response = await fetch('https://example.com/data');
   const data = await response.json();
   // Handle data...
   } catch (error) {
   // Handle errors...
   }
   };

fetchData();
}, []);

This pattern ensures that you can use async/await within the useEffect while still adhering to its expected callback structure.
