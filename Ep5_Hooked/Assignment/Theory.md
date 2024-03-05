<!-- There are two ways to export your functions/components one is default export and other is named export in one file there can only be one default so if you want to export multiple functions/component/constatnts from the same file then you should use named exports and  a named export is imported in curly braces.

-Default export/import
export default xyx
import xyz from "../path"

-Named export/import
export const xyz
import {xyz} from "../path"
-->

<!-- React use something known as Reconciliation algorithm and This algorithm is also known as React Fiber.
We have a DOM and It is like a tree so auppose we have res-container in a tree as node which have 7 res-cards as child nodes so now my UI changes from filtering these 7 res-cards to 3 res-cards, so now we will see that what React do and Why React is fast:
First of all whenever you have a UI, React creates a Virtual DOM.
Virtual DOM is not an actual DOM, it is just a representation or a copy of an actual DOM. Virtual DOM is basically an object, It is those React elements which we used to create by React.createElement -->

<!-- Diff Algorithm: It finds out the difference between the updated virtual DOM and the previous virtual DOM and updates the actual DOM efficiently -->

<!-- In react 16 a new algorithm to update the DOM came in which is "Reconciliation" after React 16 This algorithm is known as "React Fiber" so This react fiber is a new way of finding the diff and updation the DOM-->
<!-- finding out the difference between two Div's is difficult but finding out the diff between two object is fast  -->
<!-- so React  will keep the track of all the UI/DOM nodes/HTML as a virtual DOM and Virtual DOM is kind of a object representation of the DOM->
<!-- so as soon as we click on the "Top Rated Restaurant" button on our website, a new object is formed and now react will find out the difference between these objects and then actually updates the DOM-->
<!-- whenever there is some change in state variable React will find out the difference between virtual DOM and will re-render the component/update the DOM -->

<!-- React fiber is an ongoing implementation, It started whenever React 16 came in -->
<!-- Incremental Rendering:(feature of React fiber) The ability to split the rendering work into chunks and spread it out over multiple frames so It is a new way efficient way of maipulating the DOM-->

<!-- Why React is Fast? because React is doing efficient DOM manipulation and it has a virtual DOM and have a diff algorithm which is very efficient and can do efficient DOM manipulation -->

1. **What is the difference between Named Export, Default export and \* as export?**

- **Named export**: Named exports allow you to export multiple values from a module and import them using corresponding names. You can have multiple named exports in a single module, and when importing, you need to use curly braces {} to specify the exported names.

example:

//module.js
export const foo=42;
export const bar="hello";

//another file
import {foo,bar} from "./module.js";

- **Default export**: Default exports allows you to export a single value from a module without giving it a specific name. You can have only one default export per module, and when importing you can choose any name for the imported value.

Example:

//module.js
const myDefault="default value";
export default mydefault;

//another file
import myalias from './module.js';

- **\*as export**: The \* as syntax is used to import all exports from a module into a single namespace(object), It is useful when you want to import multiple values from a module without knowing their specific names.

Example:

//module.js
export const foo=42;
export const bar="hello";

// another file
import \* as myModule from './module.js;;
console.log(myModule.foo); //42
console.log(mymodule.bar); //"hello"

2. **Importance of config.js file?**
   A config.js file is often used to centralize and manage configuration settings and environmental variable for an application. It allows developers to define various settings, such as API endpoints, authentication tokens, feature toggles, and other runtime configurations, in one place. This approach promotes maintainability, as changes to configuration settings can be made in a single file rather than scattered throughout the codebase. additionally, it provides a way to manage configuration for development, staging, and production environment, simplifying the deployment process.

3. **What are React Hooks?**
   React Hooks are Javascript utility function introduced in React 16.8 that allows functional components to have state and lifecycle features that were previously only available in class components. Hooks provide a way to use React features, such as state management, lifecycle methods, context and more without writing the class. They encourage code reuse, modularity, and better organization of logic within functional componenst.

4. **Why do we need a useState Hook?**
   The useState Hook is one of the most commonly used React Hooks. It enables functional components to have stateful behaviour by adding local state management. with useState, you can initialize and update state within a functional component without converting it to a class component. It simplifies the process of handling state and re-renders in react applications, making the code more concise and easier to understand. By using useState, developers can avoid the complexities of managing state using traditional class-based components and lifecycle methods.
