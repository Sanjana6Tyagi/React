import React from "react";
import ReactDOM from "react-dom/client";

//React Element is not an HTML element they are objects and when we render this element onto the DOM then it becomes a HTML element

const heading = React.createElement("h1", { id: "heading" }, "Namaste React!");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
console.log(heading);

// when react was build the above code is core of react this is how you will make react elements but soon react developers realised that
// If we are going to make the h1,div,span and many more tags like the above by using React.createElement it will look clumsy
// and hard to read also it is not developer friendly suppose if we want to build a nested structure it will become very confusing and clumsy
// if you will make the elements using react.createElement so to help all the developer community facebook developers created something known as "JSX"

// JSX is the javascript syntax which is easy to create react elements, Alot of developers think that JSX is a part of react but the answer
// is no, react is different and jsx is different. Many developers think that we can't write react without jsx nbut we can write react without jsx
//also, but jsx makes developers life easy

//JSX is a covention where we will merge the HTML and JS together, JSX is not like HTML  inside Javascript. It is HTML or XML like syntax.

const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);
console.log(jsxHeading);

//any piece of JS code is such that jS engine can understand it,The above jsxHeadinng line code will not be understand by JS engine because JS engine will understand ES6
//language and the jsxHeading line code is not a pure javascript  but if the JS engine is not able to read the above piece of code then how this code is working
//now where the parcel comes into picture, It is the parcel which is doing the job behind the scenes.
//Even before this JSX code will go to the js engine It is transpiled(transpiled means the code will convertes to the code which browser can understand) before it goes
//to JS engine and now the js engine will receive the code that browser can understand and the transpiling is not only done by parcel,
//Parcel have its own helpers like Babel(JS package/compiler/transpiler) and when the parcel is building the code then the babel is fastly
//transpiling the code.

//Now we will see how this JSX code is working behind the scenes: The JSX code is  transpiled to React.createElement and then this ReactElement will give object which
//will rendered on the DOM as a HTML element and the Babel is doing all of these conversions

//if i have give attributes to JSX then you have to give in camelCase wheres in HTML no camelcase required like one example is
//we will give classname in HTML whereas ClassName in JSX.
//If you want to write JSX in a multiple line then we will wrap code inside round brackets.

//React Components
//Class based component
//Functional Component= is a normal JS function that returns a JSX code or React element
//If you want to return multiple line of code then wrap in curly brackets otherwise no need to wrap
//The below code is Component composition as we are calling Title component inside HeadingComponent

const number = 200;
const HeadingComponent = () => {
  return (
    <div>
      {number}
      {console.log("sanjana")}
      <div>{100 + 20}</div>

      <h1>Namaste React functional compoennt</h1>
      <Title />
      {/* or */}
      <Title></Title>
      {/* or */}
      {Title()}
    </div>
  );
};
root.render(<HeadingComponent />);

//or

// const HeadingComponent = () => (
//   <div>
//     <h1>Namaste React functional compoennt</h1>
//     <Title />
//   </div>
// );

// root.render(<HeadingComponent />);

const HeadingComponent2 = () => <h1>Namaste React functional compoennt</h1>;

const Title = () => (
  <div className="head" tabIndex="5">
    <h1>I am title</h1>
  </div>
);

//You can render your component like you render your react element we will render the component like the "root.render(<HeadingComponent/>)"
//In JSX if you add curly braces then inside those curly braces you can write any javascript piece of code
//When something is wrapped inside the curly braces the JSX/browser will not blindly run it it, It will sanitize the data and prevent cross-site-scripting attacks
