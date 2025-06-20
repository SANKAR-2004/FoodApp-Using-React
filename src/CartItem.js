import { useDispatch } from "react-redux";
import { removeItems } from "../ReduxStore/CartSlice";

const CartItem = (Component) => {

  const dispatch = useDispatch(); 
  const handleClick = (index) => {
    dispatch(removeItems(index));
    }

    return ({...props}) => {
      return (
        <div className="relative">
          <button onClick={() => handleClick(props.i)} className="absolute right-2 top-2 px-3 py-1 bg-red-500 text-white shadow-md rounded-md z-30">X</button>
          <Component {...props}/>
        </div>
      );
    };
     
    
}

export default CartItem;