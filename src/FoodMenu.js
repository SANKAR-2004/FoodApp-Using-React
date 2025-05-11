import React, { useEffect, useState } from "react";
//import { foodData } from "../constants.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router";
import { FOOD_DATA_API } from "../constants.js";
import useOnline from "../utils/useOnline.js";
import uselocalStorage from "../utils/uselocalStorage";
import FoodCard from "./FoodCard.js";
import PromotedCard from "../utils/PromotedCard.js";

//--------------------------FoodMenu

const SearchBar = ({ TextValue, setTextValue, allData, setfilterData }) => {
  return (
    <div className="p-2.5 m-2">
      <input
        type="text"
        value={TextValue}
        className="focus:outline-0 p-1.5 bg-gray-100 border-1 m-1"
        onChange={(e) => {
          setTextValue(e.target.value);
          console.log(TextValue);
        }}
        placeholder="Enter Shop Name"
      />
      <button
        className="hover:bg-blue-500 p-1.5 bg-violet-950 cursor-pointer text-white border-1"
        onClick={() => {
          const data = filterList(allData, TextValue);
          setfilterData(data);
        }}
      >
        Search
      </button>
    </div>
  );
};

const filterList = function (foodDataCopy, TextValue) {
  // const firstLetter = TextValue.charAt(0).toUpperCase();
  // const remaining = TextValue.slice(1);
  // TextValue = firstLetter + remaining;
  //console.log("All Data", foodDataCopy);

  return foodDataCopy.filter((data, index) => {
    return data?.info?.name?.toLowerCase().includes(TextValue.toLowerCase());
  });
};




const FoodMenu = () => {
  //foodDataCopy is similar as AllFoods...

  let [foodDataCopy, setfoodDataCopy] = useState([]);
  let [TextValue, setTextValue] = React.useState("");
  let [filterData, setfilterData] = React.useState([]);

  const PromotedFoodCard = PromotedCard(FoodCard);
 
  // -------UseEffect------
  if (!useOnline()) return <h2>No Internet Connection !! 🚨🚨</h2>;
  const [ getData, setData ] = uselocalStorage();
  setData("key2", "LYY");

  useEffect(() => {
    if(useOnline)
    getRestaurant();    
   // console.log("Inside UseEffect!!!");
   // setfoodDataCopy(foodData); //All Restaurants
   // setfilterData(foodData); //Filtered Restaurants
  }, []);
  
  
  async function getRestaurant() {
    
    const Api   = await fetch(FOOD_DATA_API);
    const ApiData = await Api.json();
   
   // console.log(ApiData.data.cards.map((obj)=>{return obj["card"]["card"]["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"}));
   setfoodDataCopy(ApiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setfilterData(ApiData?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants);
   
  }

  // useEffect(() => {
  //   console.log("Outside UseEffect!!");
  // }, []);
  //After the Initial render the use effect function will be called...
  //that is check will be printed first and the 'Inside UseEffect','Outside useEffect'
  //    console.log("CHECK");
  
  if (!foodDataCopy) return null; //Avoid Rendering or early return(For Understanding.. No Impact on Code)
  // if (filterData.length == 0 && foodDataCopy.length > 0) return <h2>No Foods Found!!!</h2>;
  
  return foodDataCopy.length === 0 ? (
    <Shimmer />
  ) : (
    <React.Fragment>
      <SearchBar
        TextValue={TextValue}
        setTextValue={setTextValue}
        allData={foodDataCopy}
        setfilterData={setfilterData}
      />

      {filterData.length == 0 ? (
        <h2>No Foods Found!!</h2>
      ) : (
        <div className="flex flex-wrap gap-5 py-5 bg-amber-50 justify-center items-center">
          {filterData.map((food,index) => {
            return (
              <Link to={"/restaurants/" + food.info.id} key={food.info.id}>
                {(index%3 == 0) ? <PromotedFoodCard {...food.info} /> : <FoodCard {...food.info} />}
              </Link>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
}
//------------UseEffect

//-------------------Search Bar




export default FoodMenu;