import { useDispatch } from "react-redux";
import { RES_LOGO } from "../utils/constants";
import { addItem } from "../utils/CartSlice";

function ItemList({ items }) {
  //   console.log(items);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item)); //whatever is passed in it , will go inside the reducer function
  };

  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-white-300 border-b-2 text-left flex justify-between"
          key={item.card.info.id}
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{item.card.info.name}</span>
              <span className="font-bold">
                - ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-2">
            <div className="absolute">
              <button
                className="p-1 mx-14 my-auto bg-white bg-opacity-40 text-black font-semibold shadow-lg rounded-md"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img src={RES_LOGO + item?.card?.info?.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
