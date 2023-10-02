import { RES_LOGO } from "../utils/constants";

const Card = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData;

  return (
    <div className="card-cntnr">
      <img className="res-logo" src={RES_LOGO + cloudinaryImageId} />
      <h4>{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default Card;
