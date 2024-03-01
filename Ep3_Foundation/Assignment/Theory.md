1: **What is JSX?**
JSX (Javscript XML) is an extension to javascript used in React. It allows developers to write HTML-like syntax within Javascript code. JSX makes it easier to describe the structure of React components and their UI in a more declarative and intuitive manner.

2: **React.createElement vs JSX**
"React.createElement" is a method provided by React to create React elements programmatically without using JSX.JSX, on the other hand is a syntax extension that allows developers to write React elements using HTML-like syntax directly in their Javascript code. JSX is then transpiled by tools like Babel to convert it into "React.createElement" calls before execution.

3: **Benefits of JSX**
- JSX provides a more familiar and expressive syntax, making the code easier to read and understand.
- It allows developers to write UI components in a way that closely resembles to HTML templates.

4: **Behind the scenes of JSX**
During the build process, JSX is transpiled by tools like "Babel" into regular Javascript code. Each JSX element is converted into a corresponding "React.createElement", which creates a React element object representing the components and its props.

5: **Babel and Parcel role in JSX**
Babel is a Javascript compiler that can tranpile JSX code into standard Javascript code. parcel is a build tool that among other things will handle the JSX transpilation using Babel as part of its bundling process. together, they ensure that JSx code is converted to compatible Javascript code before the app is run on browser.

6: **what are components?**
Componenets in React are reusable building blocks that encapsulating logic and UI. They can be class-based or functional components.

7: **What are Functional Components?**
Functional Components are written as functions and return JSX to define the UI. They are simpler,lightweight and dont have state ppor lifecycle methods

8: **What are Composing Compoenents?**
It means that using one component inside other to build complex UI.

9: **Role of type attribute in script tag?What otions can I use there?**
The "type" attribute in the "<script>" tag specifies the MIME(multipurpose internet mail extensions) type of the script being included. The most common options are:
-  "type="text/javascript""(default): indicates Javascript code
- "type="module"": indicate the ECMAScript module file
- "type="text/babel": Used in Babel to transpile the JSX code in the browser(not recommended for production)

10: **{Componenet()} vs {} vs {} in JSX**
- {Component()}: Renders the result of a function call Component() within the JSX.
- {<TitleComponent/>}: Renders the JSX component <TitleComponent/>.
- {<TitleComponent><TitleComponent/>}: This will throw a syntax error because JSX elements must be self-closing or have a closing tag. A proper usage would be {<TitleComponent><ChildComponenet/></TitleComponent>}
