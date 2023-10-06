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

export default Card;
