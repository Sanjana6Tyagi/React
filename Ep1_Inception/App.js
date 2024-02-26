const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from React!"
);
console.log(heading); //return object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// When we did reactElement it creates a js object which is a react element it is not a h1 tag means the heading is not the h1 tag
// This render method is responsible to take the object and convert it into that h1 tag and put it into DOM
//ReactElemet is an object and this react object becomes html that browser understand
// This is how the above code works behind the scenes
//If i want to create the bellow nested structure
/**
 *
 * <div id ="parent">
 *   <div id ="child">
 *   <h1>I am h1 tag</h1>
 *   <h2>I am h2 tag</h2>
 *   </div>
 * </div>
 *
 *
 *
 *
 *
 */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
   [React.createElement("h1", {}, "I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]
  )
);

console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)



// Suppose if we have two childs inside the parent child like the below  structure then if we will create the structure using js it will be complicated and confusing, 
//so to resolve this issue we will use "jsx" so this is the reason why jsx came into the picture
/**
 *
 * <div id ="parent">
 *   <div id ="child">
 *   <h1>I am h1 tag</h1>
 *   <h2>I am h2 tag</h2>
 *   </div>
 *  <div id ="child2">
 *   <h1>I am h1 tag</h1>
 *   <h2>I am h2 tag</h2>
 *   </div>
 * </div>
 *
 */

//Most people used to think that react can only be written using jsx but here we can see that react can be written using core js also 
//It is just that jsx will make our life easy when we have to create tagsoverride 
//createElement api takes in three arguments 
//first is name of the tag,second are the attributes which are objects which you will pass to the tags like id and classes or any attributes 
//and the third is children which can be the reactElement and if you are having multiple children then just pass them in an list/array
