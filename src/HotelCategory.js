import { useState } from "react";
import ItemList from "./ItemList"; 
    
const HotelCategory = ({ card,onShow,isActive }) => {
    
  
    return (
      <div
        className=" bg-white border-2 my-4 w-7/12 text-left mx-auto"
      >
        <div className="flex flex-row justify-between">
          <h2 className="font-bold p-4">{card?.card?.title}</h2>
          <span
            className="cursor-pointer text-2xl p-3"
            onClick={() => {
              onShow(); 
            }}
          >
            ⬇️
          </span>
        </div>
        {card.card.itemCards.map((listitem) => {
          return (
            isActive && (
              <ItemList
                {...listitem?.card?.info}
                key={listitem?.card?.info?.id}
                mode="add"
              />
            )
          );
        })}
      </div>
    );
}

export default HotelCategory;
