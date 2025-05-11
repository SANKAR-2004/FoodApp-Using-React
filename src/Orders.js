import { useParams } from "react-router-dom";

const Orders = () => {
   console.log(useParams());
  const { id } = useParams(); //Object Destructuring
  
   console.log(id);
    return (
        <div>
          <h1>Orders Page</h1>
        </div>
    );
}

export default Orders;