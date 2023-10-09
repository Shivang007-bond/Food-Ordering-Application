
//Single Responsibility Principle 

import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";


function useRestaurantMenu(resID) {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resID);
    const json = await data.json();

    setResInfo(json.data); 
  };

  return resInfo;
}

export default useRestaurantMenu;
