import UserContext from "../utils/UserContext";
import { useContext } from "react";

const FoodCard = ({
  id,
  name,
  locality,
  areaName,
  cloudinaryImageId,
  costForTwo,
  cuisines,
  avgRating,
}) => {
  //const { imgid, name, cuisine, amount, rating } = restraunt;
  let ratingStar;
  if (avgRating > 4 && avgRating < 5) ratingStar = "⭐⭐⭐⭐";
  if (avgRating > 3 && avgRating < 4) ratingStar = "⭐⭐⭐";
  const { userName, gender } = useContext(UserContext);

  return (
    <div className="hover:bg-yellow-100 text-sm/5 bg-red-100 flex flex-col justify-center gap-y-1 p-3 border-1 w-60 h-64  overflow-hidden">
      <img
        className="w-full h-40 mb-2 "
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h2
        className="text-l font-bold"
        value={undefined /*No Value attribute is there in DOM... */}
      >
        {name.length < 28 ? name : name.slice(0, 28) + "..."}
      </h2>
      {/* This also works fine.. <h3>{props.restraunt.name}</h3> */}
      {/* <h5>{costForTwo}</h5> */}
      <h4>{locality}</h4>
      {
        <h5 className="bg-green-400 pr-1 w-12 text-center m-0 ">
          {"⭐" + avgRating}
        </h5>
      }
      <h1>{userName }</h1>
      {/* <h6>{cuisines.join(", ")}</h6> */}
    </div>
  );
};

export default FoodCard;