import { RES_LOGO } from "../utils/constants";

const Card = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData;

  return (
    <div className="p-4 m-4 w-72 rounded-md bg-blue-100 hover:shadow-xl">
      <img className="rounded-md w-64" src={RES_LOGO + cloudinaryImageId} />
      <h4 className="font-bold py-2 text-lg text-center">{name}</h4>
      <h5 className="font-semibold py-1 text-md text-center">
        {cuisines.join(", ")}
      </h5>
      <h5 className="font-semibold py-1 text-md text-center">
        {avgRating} stars
      </h5>
      <h5 className="font-semibold py-1 text-md text-center">{costForTwo}</h5>
    </div>
  );
};

//Higher-Order Component
// Card ==> Input -- Output ==> isOpenCard
export const isOpenCard = (Card) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 mx-4 rounded-md bg-opacity-50"> Open Now</label>
        <Card {...props}/>
      </div>
    );
  };
};



export default Card;
