import { ITEMLIST_IMG_API } from "../constants";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../ReduxStore/CartSlice";

const ItemList = ({ name, price, description, imageId, ratings,mode }) => {
  const dispatch = useDispatch();
  const handleClick = (...dataObj) => {
    dispatch(addItems(...dataObj));
    }

    return (
      <div className="flex flex-row justify-between border-b-2 shadow-2xl w-full border-gray-300 p-4 bg-white mx-auto">
        <div className="w-9/12 leading-7">
          <p className="font-bold"> {name}</p>
          <span>₹ {price/100}</span>
          <h6 className="text-sm text-gray-500">{description}</h6>
          <span className="px-2 text-center text-gray-600 bg-green-100">⭐{ ratings?.aggregatedRating?.rating }</span>
        </div>
        <div className="relative">
          <img className="w-40 min-h-full" src={ITEMLIST_IMG_API + imageId} />
          <div className="absolute top-0 right-0">
            {
              (mode == "add") && <button onClick={() => handleClick({ name, price, description, imageId, ratings })} className=" px-4 py-2 border-2 rounded-2xl text-white bg-green-500">
              Add
            </button>
            }
          </div>
        </div>
      </div>
    );
};

export default ItemList;