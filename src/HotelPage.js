import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer.js";
import useRestaurant from "../utils/useRestaurant.js";
import ItemList from "./ItemList.js";
import HotelCategory from "./HotelCategory.js";
 

const HotelPage = () => {
    const { id } = useParams();
    const HotelDetail = useRestaurant(id);
    const [showItems, setshowItems] = useState(-1);
    const Categories = HotelDetail.filter((hotel) => {
    return (
      hotel?.card?.card["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });
    
    if (!HotelDetail) return <h1>Swiggy has Different Json Data Format!!</h1>; //Problem with the API JSON Data....

  return Categories.length === 0 ? (
    <Shimmer />
  ) : (
      Categories.map((categ,index) => {
        return <HotelCategory {...categ} isActive={index == showItems ? true : false} onShow={() => { (showItems == index) ? setshowItems(-1): setshowItems(index) }} key={categ?.card?.card?.title} />;          
      }) 
    
    );
};

export default HotelPage;