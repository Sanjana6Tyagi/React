1: **What is Emmet?**
Emmet is just a productivity tool for web developers that allows them to write HTML and CSS code using a shorthand syntax and then expand it into full-fledged code snippets with just a few keystrokes

2: **Difference between a library and framework?**
Think of a library as a collection of ready-made tools or functions what you can use when building up something.Its like having a toolbox with various tools, You can decide which tools to use and how to use them. You have more freedom to choose and use only the parts you need, Libraries provide specific functionalities like reading files or making network requests
whereas imagine a Framework as a recipe for making cake. The recipe tells you the steps,the ingredients,and how to put everything together. A framework is a more complex package. It's like following a set structure or pattern to build your application. It provides a skeleton or structure for your project

3: **What is CDN? Why do we use it?**
CDN stands for Content Delivery Network, It is like having the copies of your favourite book stored in different libraries all around the world. Instead of going to the main library (your website's server) every time you want to read the book, you can grab it from the library that is closest to you.
CDN consists of servers located globally, each containing copies of your website content. Rather than relying on your main server, which can be far for some users,CDNs distribute copies to servers closer to different regions. This setup ensures that when someone accesse your website, they retrieve its content from a nearby server, reducing loading time of the website ,increasing the website performance,and improve the overall user experience by minimizing the distance between the user and the content

4: **Why is React known as React?**
The name "React" for the Javascript library developed by facebook is derived from the way it handles changes to a user interface. Instead of updating the entire user Interface when data changes, React selectively "reacts" to changes and effeciently updates only the necessary parts of the interface, making it highly performant and responsive.

5: **What is the cross-origin in the script tag?**
In the context of <script> tag the "cross origin" refers to making request to fetch the Javascript files from a different domain than the one from which the webpage is served. Due to the security reasons, modern web browsers restrict cross-origin requests for scripts. To allow the cross-origin scripts, the server needs to include the appropriate CORS (Cross-Origin Resource sharing) headers, or the scripts must be served from a domain that allows cross-origin requests.

6: **What is the difference between Reactt and ReactDOM?**
React and ReactDOM are both parts of the React library, but they serves different purposes. React is the core library responsible for handling the component-based architecture, virtual DOM, and managing application state. ReactDOM on the other hand, is designed for interacting with the DOM, enabling React to render components into the actual browser DOM. It provides methods like render() to update the DOM with React's virtual DOM representation

7: **What is the difference between react.development.js aand react.production.js files via CDN?**
When using CDN, the "react.development.js" file is used for development purposes. It includes additional warnings and debugging information to help the developers identify and address the  potential issues during the development phase, The code is not minifies or optimized for size making it more human-readable and aiding in debugging. whereas, the "react.production.js" file is optimized for production use. It excluded development-specific warning,debug information, and additional features that are beneficial during development but add unnecessary overhead in a prod environment, The code is minified and may undergo other optimizatuons to reduce the size and improve runtime performance.

8: **What are async and defer?**
"async" and "defer" are the attributes used in <script> tags when lloading external Javascript files. When a script is marked with the "async" attribute, it will be downloaded asynchronously while the HTML parsing continues. Once the script is downloaded, it will pause the HTMl parsing and execute the script immediately, potentially before the entire page is loaded.
On the other hand, when a script is marked with "defer" attribute, it will also be downloaded asynchronously but will be executed after the HTML parsing is complete. "defer" ensures that the scripts executed in the order they appear in the HTML, and it waits for the entire page to be parsed before executing



