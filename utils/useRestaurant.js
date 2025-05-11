import { useState,useEffect } from "react";

const useRestaurant = (id) => {
    let [hotelDetails, sethotelDetails] = useState([]);
    useEffect(() => {
      getHotelDetails();
    }, []);
    
    async function getHotelDetails() {
      const RestaurantApi = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.934591&lng=79.13655899999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      );
      const HotelData = await RestaurantApi.json();
      sethotelDetails(
        HotelData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      );
    }
    return hotelDetails;
}
export default useRestaurant;