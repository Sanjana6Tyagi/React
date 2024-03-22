<!--
Single Responsibility Principle: means suppose you have a function/cllass/or any single identity of your code that should have a single responsibility. for example: in our project we have restaurantcard component which is a function so it has only one responsibility that is displaying the restaurantscard and same as header component so basically for each component which we will create, we should give them a single responsibility and if you are doing multiple things in one component then you should break it down into different components.
- Distributing the code into smaller pieces and keeping it modular keeps the code testable and maintainable.
- if you write code in a modular way or follow single responsibilty principle then you get feature of reusability.
 -->

 <!-- 
 In this episode we are going to see how can we create custom hooks and then use these hooks to make our code modular.
  -->

  <!--
  - When you are building large scale applications how can you improve the performance: as you can see that the parcel have bundled all pur application code into one js file but as the size of the application increases the size of this one js file will also increase so now the question arises that we should do bundling or not so the answer is yes we should do bundling because suppose if 1000 components are present in our code we dont want 1000 js files loading onto the webpage and we will not put all of these 1000 components in 1 file so what should we do then?
  - We will try to make smaller bundles of these files. This process is known as "CHUNKING" or "CODE SPLITTING" or "DYNAMIC LOADING" or "LAZY LOADING" or "ON_DEMAND LOADING" or "DYNAMIC BUNDLING" and many more.
  - suppose in our application we have a grocery store just like in swiggy we have instamart so now like in our application for the food delivery business we have 10 components and suppose for the grocery business also we have approax 10 components now we will make separate bundles for  the food delivery components and separate for grocery store components .
  - But we will see that the grocery component code which we have included in our app code is still inside the js bundle means in 1 js file.
- so now we have to logically distribute my application that my grocery and all the components of grocery should be come from a different js file/bundle
- so we can achieve this by lazy loading means as in my app.js file I will not import my grocery component normally but will import by using lazy loading.
- why it is called lazy loading? is because when my app will load initially means the app homepage will load, it will not load the code for grocery. Only when i go to the grocery link then only the grocery code will be loaded
 - in app.js I will import my grocery by using lazy function which comes from react library and takes a callback function and this callback function uses the function import and this import will take the path to the grocery component.  
 - By doing this you can see in the network tab also and in the dist folder  you can see now two separate bundles each for food delivery and grocery respectively which will be helpful in reducing the bundle size and optimizing our application. 
 - but when we are clicking on grocery it is throwing an error this error is coming because when we are at home page only the food delivery js bundle//file is present and as soon as we click on grocery link the react is so fast that it will try to render the webpage but till the time the data didnt arrive because the grocery bundle will take some time to come and meanwhile react will throw an error because it couldn't find the data in between the time frame so to get away from this error we use something known as "suspense". 
 - Suspense is a component which comes from the react library and we wil wrap our grocery component by suspense
 - In suspense component we will give a fallback or placeholder in whic we can give a peice of JSX which will be render on the screen when the data haven't arrive-->

1.  **Why do we need lazy()?**
    The lazy() function is used to implement code splitting in React. Code splitting is a technique of splitting your Javascript bundle into smaller, more manageable chunks that are loaded on-demand. You can use lazy() when you want to load a component asynchronously, usually for optimizing the initial load time of your application.

    For example, if you have a lare component that is rarely used or only needed in certain routes, you can use lazy() to load it only when it's actually required, reducing the initial bundle size and improoving the app's performance.

    2. **What is suspense?**
    Suspense is a feature in React that allows component to wait for something before rendering. It was primarily introduced to handle asynchronous data fetching and lazy loading of components. Suspense enables smoother user experience by diplaying fallback content (e.g., loading spinners) while waiting for data or code to load.

    3. **Why do we get this error: "A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition?" How does suspense fix this error?**
    This error occurs when a component starts an asynchronous operation (like data fetching) while responding to a synchronous user input event (like a click). In such cases, the rendering of the components is suspended, caausing the UI to freeze or show a loading indicator.

    Suspense, with the startTransition function, helps solve this issue by allowing you to prioritize which updates should be synchronous and which ones should be asynchronous. You can wrap the asynchronous part of your component with startTransition to indicate that it's not a critical update and can be delayed until the main work is complete, ensuring he UI remains responsive.

    4. **Advantages and disadvantages of using this code splitting pattern?**
    **Advantages:**
    - **Improved Initial Load Time:** Code splitting reduces the initial bundle size, leading to faster page loads, especially on slower network connections.
    - **Better Resource management:** It loads only the required code when needed, saving memory and bandwidth.
    - **Enhanced User Experience:** components loads faster,and users see content more quickly, leading to a better experience.
    - **Simplified Maintenance:** Smaller code bundles are easier to manage and debug.

    **Disadvantages**
    - **Complexity:** Implementing code splitting with lazy() and suspense can add complexity to your codebase.
    - **Potential for Loading Delays:** If not managed well, code splitting can introduce loading delays when navigating between routes or using components.

    5. **When do we and why do we need suspense?**
    You need suspense in your React application when you want to 
    - handle asynchronous data fetching in a more organized and declarative way.
    - Implement lazy loading of components to improve performance.
    - Avoid issues like "flash of loading content" by displaying the fallback UI while waiting for the data or component to load.

    Suspense simplifies handling asynchronous operations, helps prevent the UI freezes, and leads to a ssmoother user experience y displaying the loading indicators or fallback content when needed. It's particularly valuable when working with large applications or when opttimizing the performance

