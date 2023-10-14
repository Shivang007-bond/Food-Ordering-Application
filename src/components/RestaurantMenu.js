import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

function RestaurantMenu() {
  const { resID } = useParams();

  const resInfo = useRestaurantMenu(resID);


  const [showIndex , setShowIndex] = useState(null)

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold mt-6 text-xl">{name}</h1>
      <p className="font-semibold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {/* Accordian Item  */}
      {categories.map((category , index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showIndex={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
}

export default RestaurantMenu;
