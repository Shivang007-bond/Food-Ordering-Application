
import ItemList from "./ItemList";

function RestaurantCategory({ data, showIndex, setShowIndex }) {

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* Accordian Header*/}
      <div
        className="w-6/12 bg-blue-400 p-3 my-4 mx-auto shadow-lg rounded-md text-white cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <span className="font-bold text-white">
            {data.title} ({data.itemCards.length})
          </span>
        </div>

        {showIndex && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
}

export default RestaurantCategory;
