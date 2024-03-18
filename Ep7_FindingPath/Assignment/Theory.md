<!-- Installed react router dom library for routing. Whenever you have to develop routed you have to do routing configuration in your app.js/root file.-->
<!-- When we give random URL then it will shows a error page and this page is given to us by react router DOM, now we will build our own error page -->
<!-- React router DOM gives one more feature in terms of error : It gives us an access to a hook which is "useRouterError" so by using this hook it will provide more information about the error and I have implemented this hook in my Error.js component file-->
<!-- We will also implement that how can we create children routes in our app so before moving to child routes we will see that if i want my header to be intact and below body should change according to the path so suppose if I am at my about page then the about page should load below header component which means header should be sticked at the top so to make this type of functionality I have to create children routes so in my code i will create children routes for applayout-->
<!--react-router-dom gives us a component called as outlet, whenever there is chainge in the path the outlet will filled with the children according to the path  so like in our code whenever we are on path / our body will be filled inside outlet and same for /about, /contacts  -->

<!-- In html you will not see your outlet because it will get replaced by the component dpending on what path we are  -->

<!-- when you are using react and you want to route to some other page like in our project code clicking on header buttons like about,contact,home we need to route to the pages respectively so for this routing we will never use <a> tag because when we going to about page by using <a> tag the whole page is getting refreshed -->
<!-- There is something by which we can navigate or route to a page without reloading the whole page and that is "link" coming from react-router-dom and works exactly same as <a></a> tag, the only difference is in <a></a> tag we have "href" whereas in <link> component we have "to"-->
<!-- if i use <a></a> tag it reloads the whole page whereas if I use <Link> it just refreshes the component and that is why our react applications are known as "single page application" -->
<!--The applayout in our code is a single component and all the routings, new pages are just components interchanging themselves, so if i go to a new route it just changing the component not reloading the new page   -->
<!-- Traditionally in older days we used to have different html pages like index.html,about.html,contact.html and we have <a> tags and if we click on about page then the whole page will load once again -->
<!-- There are two types of routing in web apps:
-client side routing: In this type of routing we are not making any network calls because all of the components are already loaded to our app, when we load our website for first time  all of the code for aboutUs is present here so it just loads the aboutUs component
-server side routing: suppose you have index.html, about.html, contact.html and if i click on my <a></a> tag it reloads the whole page, sends a network call to about.html, fetches the html and render to the webpage-->

<!-- Dynamic Routing:  -->

1. **What are various ways to add images intoo our App? Explain with code examples?**
   a. **Inline Images:** You can use inline images by including them as data URLs in your HTML or CSS.
   <img src="data:image/png:......" alt="Inline Image"/>

b. **Local Images:** Store images in your project directory and reference them with relative paths.

import React from 'react';
import imageSrc from "./path/to/image.png";

function App(){
return <img src={imageSrc} alt="Local Image/>
}

c. **External Images:** Use external image URLs directly.

import React from 'react';

function App(){
return <img src="https://example.com/image.png" alt="External Image" />
}

2. **What would happen if we do console.log(useState())?**
   console.log(useState()) would log an array containing two elements to the console: the current state value and a function to update the state value. The output might look like this:

[initialStateValue, function]

3. **How will useEffect behave if we don't add a dependency array?**
   If you don't have a dependency array to the useEffect hook(i.e you omit the second argument), the effect will run after every render, including the initial render.

4. **What is SPA?**
   SPA stand for Single Page Application. It is a web application or website that loads a single HTML page and dynamically updates its content as the user interacts with it, without requiring the full page reload. SPAs use Javascript to fetch and render data, making the user experience faster and more fluid.

5. **Difference between Client Side routing and Server Side Routing**

- **Client Side Routing:** In client-side routing, navigation between different views or pages of a web application is handled on the client side(in the browser) using Javascript. When a user clicks on a link or enters a URL, Javascript changes the view without making a request to the server for a new HTML page. Common libraries for client-side routing include React Router and Vue router. Client-side routing is faster and provides a smoother user experience but may require more initial loading time.

- **Server Side routing:** In server-side routing, navigation triggers requests to the server, which responds with the appropriate HTML page for the requested route. Each route corresponds to a separate server-side route on the server. Server-side routing is typically associated with traditional multi-page applications (MPAs). It can be slower because it involves server requests for each page change, but it's also more SEO-friendly and can work without Javascript enabled on the client side.
