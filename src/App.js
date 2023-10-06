//using core react
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Shimmer from "./components/Shimmer";

// import Grocery from "./components/Grocery";

//Chunking
//Code Splitting
//Dynamic Bundling
//Lazy Loading
//On-demand Loading

const About = lazy(() => import("./components/About"));
const Grocery = lazy(() => import("./components/Grocery"));

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const App = () => {
  return (
    <div className="app-cntnr">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={ <Shimmer /> }>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={ <Shimmer /> }>
            <Grocery />
          </Suspense>
        ),
      },
      // {
      //   path: "/restaurant/:resID", //dynamic route
      //   element: <RestaurantMenu />,
      // },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
