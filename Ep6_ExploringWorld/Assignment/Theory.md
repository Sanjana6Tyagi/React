<!--Monolith Architecture: Traditionally, when web apps were developed , they all were developed using the monolith architecture. earlier, we used to have a huge big project and suppose we are building an application so this huge big project used to have small pieces like we have a code of api , UI code, authentication code, notificationn code, back-end code and many more. If we want to make a single change like changing the colour of a button so for this we have to build/compile this whole big project  so This is called a "Monolith Architecture".-->

<!--In today's time the world is moving towards the "Microservices Architecture"-->

<!-- Microservice Architecture: In this we have different services for different jobs so we have a service like backend service,authentication service, Ui service, SMS sending service, notification services and many more and all these services combined together forms a big app. All these microservices talk to eachother depending on the use cases, This is known as "Separation of Concerns" and  "single Responsibility principle"  where eac and every service have its own job -->

<!-- How these services interact with each other?: These services have to interact with each other to make the whole application work, like the UI service will talk to backend to fetch the data and show it on UI, The backend service need to talk to DB , authentication.   -->

<!-- You can suppose that  the project we are making  is a UI microservice and this microservice is written in React, and the advantage of microservice architecture is that you can have different techstack for diff things suppose in monolith architecture you have one big project, a Java application so everything should be written in Java but In this microservice architecture you can have UI written in React, Backend written in Java, databse written in python, SMS written in golang and so on   -->

<!-- How these microservices are connected with each other?: suppose like our namaste food app that is Ui service is deployed on port:1234. similarly, all  these services run on their own specific ports. suppose your BE service is deployed on port:1000, SMS service on port:3000 soon different ports you can deploy diff services and at the end of the day all these ports can be mapped to domain name. suppose the BE is mapped to "/api", SMS is mapped to "/SMS", Ui is mapped to "/" and now how these service are connect, they will make call to diff URls so if UI wants to connects to BE they will make a call to "/api" or call port:1000  -->

<!-- The Two approaches of how the web apps or UI application fetches the data from backend:
1: As soon as the page load we can make the API call wait for data to coome and then we will render the UI. suppose, if API call takes 500ms then what will happen is our page will load and then wait for 500ms and after 500ms render the UI

2: As soon as the page loads we will just render the UI, after quickly rendering the UI now we will call the API and as soon as we get the result from the API we will re-render the application with the new data

-In React we will always be using the second approach because this will give you the better UX because In the approach 1 for 500ms or till the data will come from the API our page is completely frozen, we cannot see anything on the page and as soon as the data come from the api then we will suddenly see the UI on the page so thats the poor UX.Instead, In the second apprach we will load the page and  render whatever we have on the web page so atleast user can see something on the webpage instead of seeing nothing or blank like in approach 1
- React is so fast because its render cycles are very fast, It has one of the best rendering mechanisms so therefore rendering two times is okay-->
<!-- to get rid of CORS error instead of adding CORS extension in your browser we can bypass this CORS issue throught a different method by corsproxy.io we just have to go to the website and copy the corsproxy.io URL and append this before your api but for my browser i am unable to open the corsproxy.io website -->

1. **What is Microservice?**
   Microservices is a software architectural style where an application is built as a collection of loosely coupled, independently deployable services. Each service focused on a specific business capability and communicates with each other services through well-defined APIs. Microservices promotes modularity,scalability, and ease of development by breaking down an application into smaller, manageable components.

2. **What is Monolith Architecture?**
   A Monolith architecture is also a software architecture style where an application is built as a single, self contained unit where all functionalities are tightly integrated and share the same codebase. In a monolith, different components, modules, and features are often interconnected, making the application's codebase large and complex.

3. **Difference between Monolith and Microservice?**

- **Monolith**: A single,tightly integrated application. Changes or updates affect the entire application as all modules, components are interconnected.

- **Microservice**: Composed of loosely coupled, independently deployable services, where each service can be independently developed, deployed and scaled. Changes to one service have inimal impact on other.

4. **Why do we need useEffect Hook?**
   The useEffect Hook in React is used to perform the side effects in functional components. Side effects can include data fetching, DOM manipulations, subscriptions, and more. useEffect ensures these side effects are performed after rendering, avoiding blocking the main thread. It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.

5. **What is Optional Chaining?**
   Optional Chaining is a feature in Javascript that allows you to access properties or methods of an object without causing an error if the property or method is undefined or null. It uses the "?." syntax.

6. **What is Shimmer UI?**
   Shimmer UI is a loading animation technique used to provide visual feedback to users while content or data is being fetched or loaded. It displays a placeholder animation that mimics content loading, reducing the perceived delay and improving user experience.

7. **Difference between JS expression and JS statement?**

- **Expression**: Produces a value. For example: 2+2 or myFunction()
- **statement**: Produces an action. For example: if statement, for loop, function declaration

8. **What is Conditional Rendering, explain with a code example?**
   Conditional Rendering is the practice of displaying different UI components or content based on some conditions. Example:

function Greeting(props){
if(props.isLoggedIn){
return <h1>Welcome back!</h1>
}else{
return <h1>Please log in</h1>
}
}

9. **What is CORS?**
   Cross-Origin Resource Sharing (CORS) is a security feature that control how web browsers allows web pages from one origin to request resources (like data) from another origin. It prevents unauthorized access to resources and enhanced the security of web applications.

10. **What is async and await?**
    async and await are features in Javascript that simplifies working with asynchronous code, especially Promises. An async function returns a Promise, and within an async function, you can use the await keyword to pause the execution until a Promise is resolved.

11. **What is the use of **const json = await data.json()**?**
    In the context of a function like getRestaurants(), await data.json() is used to asynchronously wait for the response data to be converted from a JSON string to a Javascript object using the .json() method. The result, assigned to the json constant, represents the parsed JSON data, which can be further processed and used in the code.
