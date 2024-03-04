1. **Is JSX mandatory for React?**
   No,JSX is not mandatory for React, but it is highly recommended and widely used. JSX provides a more readable and expressive syntax for defining React components and their UI. Without JSX, you would need to use "React.createElement" calls directly to create React elements, which can be less intuitive and more cumbersome.

2. **Is ES6 mandatory for React?**
   ES6 (ECMAScript 2015) features are not mandatory for React, but they are commonly used and highly beneficial. ES6 introduces modern Javascript suntax, arrow functions, classes, destructuring, and more, making the code readable, cleaner, more maintainable and easier to understand. React components and projects can be written in ES5, but leveraging ES6 feature is strongly encouraged.

3. **How can I write comments in JSX?**
   In JSX, you can write comments within curly braces "({/_ your comment here _/})" or a single-line comment using "//" outside the JSX expression.

4. **What is "<React.Fragment></React.Fragment>" and "<></>"?**
   "<React.Fragment>" and "<></>" are used to wrap multiple JSX elements without introducing an extra DOM node. They act as invisible containers. "<React.Fragment>" is the traditional syntax, and "<></>" is a shorthand for the same purpose introduced in React 16.2.

5. **What is Virtual DOM?**
   The Virtual DOM is a concept used by React to improve performance. It is a lightweight copy of the actual DOM and keeps the track of the state of React components. when the component state changes, React creates a new virtual DOM, compares it with the previous one using a process called "reconciliation", and efficiently updates only the necessary changes in the actual DOM. This process avoid unnecessary DOM manipulations and enhances rendering speed.

6. **What is Reconciliation in React?**
   Reconciliation is the process by which the React updates the actual DOM based on the changes detected in the virtual DOM. During reconciliation, React identifies which parts of the DOM need to be updated to match the current state of the components. This processs will optimize the rendering perdormance and avoid full re-renders of components when possible

7. **Why do we need Keys in React? When do we need Keys in React?**
   Keys in React are used to uniquely identify elements within a list of components. They help React to efficiently update and re-render the components when the list changes. Keys are crucial when rendering list of items to maintain stable component identities, optimize performance, and prevent potential issues when rendering or removal of list items.

8. **What is React Fiber?**
   React Fiber is a reimplementation of the React reconciliation algorithm. It was introduced in React 16 to improve how React handles components updates and rendering. Fiber allows the React to perform asynchronous rendering, prioritization, and interruption of rendering tasks, making applications more responsive and avoiding the main thread.

9. **What is Props in React? Ways to use Props in React?**
   Props(short for properties) are a mechanism in React to pass data from a parent component to its child components. They are read-only and help in creating reusable and configurable coomponents. Props can be used in functional components as function arguments or in class components using "this.props".

10. **What is Config Driven UI?**
       A Config Driven UI refers to an approach where the user interface of an application defined and configured using external configuration files or datat rather than hardcoding the Ui components and layouts in the codebase. This approach allows for greater flexibility, easier customization, and dynamic changes to the UI without modifying the application's code.

11. **Can we use index as Keys in React?**
    Using array index as keys in React is generally discouraged. While it may work in certain cases, it can lead to unstable and inefficient rendering, especially when the list order changes. It is better to use stable and unique identifiers associated with the data of each item as keys.
