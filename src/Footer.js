import React from "react";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Footer = () => {
  const h2_styling = {
    fontSize: "35px",
    textAlign: "center",
    padding: "20px",
  };
  // let count = 0;
  let [count, setCount] = React.useState(0);
  const { userName, gender } = useContext(UserContext);
  
  return (
    <div>
      {/* <h2 style={h2_styling}>{count}</h2>

       <button
        style={h2_styling}
        onClick={ () => {
          setCount(count = count + 1);
          //console.log(count);
        } }
      >
        Click Me
      </button>  */}
    
      <h2>Footer { userName}</h2>
    </div>
  );
};

export default Footer;