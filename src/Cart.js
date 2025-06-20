import { useSelector,useDispatch } from "react-redux";
//import AppStore from "../ReduxStore/AppStore";
import ItemList from "./ItemList";
import CartItem from "./CartItem.js";
import { clearItems } from "../ReduxStore/CartSlice.js";


const Cart = () => {
    const cartData = useSelector((store) => store.cart.items);  

    const ItemComponent = CartItem(ItemList);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(clearItems());
    }
     
    if(cartData.length == 0) return <h2 className="text-2xl font-bold p-2 text-center" >Cart is Empty</h2>
    return (
        <div className="relative">
            <p className="text-2xl text-center p-4">Cart Page</p>
            <button onClick={handleClick} className="absolute right-48 text-white bg-red-500 px-4 py-1">Clear Cart</button>
            {cartData.map((item, index) => {

                return (
                    <div key={(item?.id == undefined)?item?.name:item.id} className="w-6/12 mx-auto">
                    <ItemComponent {...item} mode="remove" i={index}/>
                </div>
                );

            })} 
            {/*cartData.map((e,index) => {
               return <h2>Working</h2>
            })*/}
        </div>
    )
}

export default Cart;