//using core react
import React, { Suspense, lazy, useEffect } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Shimmer from "./components/Shimmer";
import RestaurantMenu from "./components/RestaurantMenu";
import { useEffect, useState, useContext } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import Store from "./utils/Store";

// import Grocery from "./components/Grocery";

//Chunking
//Code Splitting
//Dynamic Bundling
//Lazy Loading
//On-demand Loading

const About = lazy(() => import("./components/About"));
const Grocery = lazy(() => import("./components/Grocery"));

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Cart from "./components/Cart";

const App = () => {
  const [userName, setUserName] = useState("");

  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    //fetch API
    const data = {
      name: "Shivang",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={Store}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div className="app-cntnr">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
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
          <Suspense fallback={<Shimmer />}>
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
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resID", //dynamic route
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
