import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const toggleBtn = () => {
    loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
  };

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-gray-200 shadow-lg m-3 rounded-md">
      <div className="flex rounded-sm">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex px-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
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
          <li className="px-4">
            <Link>Cart</Link>
          </li>
          <button className="flex px-3 py-0.5 h-8 bg-gray-700 text-cyan-50 rounded-md" onClick={toggleBtn}>
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
