import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  //Subscribing the STORE using SELECTOR
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  const { loggedInUser } = useContext(UserContext);
  // console.log(data);

  const toggleBtn = () => {
    loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
  };

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-gray-700 shadow-lg m-3 rounded-md text-white">
      <div className="flex rounded-sm">
        <img className="w-40 " src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex px-4 m-4">
          <li className="px-4 font-extrabold">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 text-lg font-extrabold">
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>
          <button
            className="flex px-3 py-0.5 h-8 bg-black text-cyan-50 rounded-md"
            onClick={toggleBtn}
          >
            {loginBtn}
          </button>
          <li className="px-4 font-extrabold">
            <Link>{loggedInUser}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
