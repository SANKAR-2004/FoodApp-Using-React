import React from "react";//Make Sure to Give it inside the String cotation(" ")
import ReactDOM from "react-dom/client";
import Header from "./Header.js";
import FoodMenu from "./FoodMenu.js";
import Footer from "./Footer.js";
// import { createBrowserRouter } from "react-router";
 //import { RouterProvider } from "react-router-dom";
 import Contact from "./Contact.js";
// import { Link } from "react-router";
import { createBrowserRouter, RouterProvider } from "react-router"; 
import AboutUs from "./AboutUs.js";
import Orders from "./Orders.js";
import Error from "./Error.js";
import { Outlet } from "react-router";
import HotelPage from "./HotelPage.js";
import Login from "./Login.jsx";
import ContactClass from "./ContactClass.js";
//import Instamart from "./Instamart.js";
const Instamart = React.lazy(() => import("./Instamart.js"));
import Shimmer from "./Shimmer.js";
import useOnline from "../utils/useOnline.js";
import './index.css';
import UserContext from "../utils/UserContext.js";
import Cart from "./Cart.js";
import { Provider } from "react-redux";
import AppStore from "../ReduxStore/AppStore.js";

const Body = () => {
  if (!useOnline()) return <h2 className="text-2xl">No Internet Connection !! 🚨🚨 Let me build a game here...</h2>;
  return (
    <>
      <UserContext.Provider value={{ userName: "Rajesh" }}>

        <Provider store={AppStore}>
          <Header />
          <Outlet />
        </Provider>
        
      </UserContext.Provider>

      <Footer />
    </>
  );
}

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <Body />,
      errorElement: <Error />,
      children: [
        {
          path: "/aboutus",
          element: <AboutUs />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/restaurants/:id",
          element: <HotelPage />,
        },
        {
          path: "/orders/:id",
          element: <Orders />,
        },
        {
          path: "/contact",
          element: <ContactClass />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/instamart",
          element: (
            <React.Suspense fallback={<Shimmer />}>
              <Instamart />
            </React.Suspense>
          ),
        },
        {
          path: "/",
          element: <FoodMenu />,
        },
      ],
    },
  ],

  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);
 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider
    router={appRouter}
    future={{
      v7_startTransition: true,
    }}
  />
);

//Basics Codes (Practice)

//     const h1=React.createElement(
//       "h1",{},"Working!!!"
//     );
//     const li1=React.createElement("li",{"key":"orange"},"Oranges");
//     const li2=React.createElement("li",{key:"apple"},"Apples");
//     const g=null;
    
//   // console.log(g.name);
//   //  console.log(arr);
//   //After the above errors (it can be any errors Reference,type,syntax)
// //the below line are not executed...
  
//     const ul=React.createElement("ul",{key:"ul1"},[li1,li2]);
//     //whenever you want to pass multiple childrens as like li1,li2 use array parenthesis and send it as array... that's it.
//     //the same will be applicable for creating a div with many elements.
//     const root=ReactDOM.createRoot(document.getElementById("root"));
//     let yu=800;
//     root.render(h1);
//     root.render(ul);
// console.log(root);
// console.log("Not Shown Because of Babel!!");
// //I have installed babel plugin and not configured it (.babelrc)

// const list1 = (<ul>
//   <li>Home</li>
//   <li>Orders</li>
//   <li>About</li>
// </ul>);
// console.log("Below is the list 1");
// console.log(list1);


// //Functional Components

// const Container = () => {
//   const style_h1 = {
//     backgroundColor: "skyblue",
//     color: "brown",
//     padding: "40px",
//     fontSize:"26px"
//   }
//   return (
//     <>
//       <h2 className="heading1" style={style_h1}>
//         I create a functional components!!
//       </h2>
//       <h3 style={style_h1}>It is working!!!</h3>
//     </>
//   );
// }

// const Container_2 = ()=> {
//   return (
//     <>
//       <>
//       <h2>INSIDE FRAGMENTS OF FRAGEMENTS</h2>
//       </>
//       <h2>I create a functional components 2!!</h2>
//       <h3>It is working 2!!!</h3><br/>
//     </>
//   );
// };



// console.log(Container_2);

// const Container_3 = () => (
//   <>
//     {/*  <Container /> */}
//     {Container()} {/* It also Works fine.... */}
//     <Container_2 />
//     {console.log("I am from JSX in Container 3!!!")}
//     <h2>I create a functional components 3!!</h2>
//     <h3>It is working 3!!!</h3>
//   </>
// );

// //root.render(Container());//Work fine but not good practice
// //root.render(<Container/>)
// //root.render(<Container_2 />);
// root.render(<Container_3 />);


//  ./ in above line is very very important.....
// Make sure to include a require function wherever you want to use the image path or URL..




// One of the Ways to do it
// const FoodCard = ({ restraunt }) => {
//   const {imgid,name,cuisine,amount,rating} = restraunt;
//   return (
//     <div className="FoodCard">
//       {console.log(restraunt)}
//       <img src={restraunt.imgid} />
//       <h3>{restraunt.name}</h3>
//       {/* This also works fine.. <h3>{props.restraunt.name}</h3> */}
//       <h4>{restraunt.cuisine}</h4>
//       <h5>{restraunt.amount}</h5>
//       <h5>{restraunt.rating} Star</h5>
//     </div>
//   );

// };


// Same using object destructuring.

// const FoodCard = ({ restraunt }) => {
//   const { imgid, name, cuisine, amount, rating } = restraunt;
//   return (
//     <div className="FoodCard">
//       {console.log(restraunt)}
//       <img src={imgid} />
//       <h3>{name}</h3>
//       {/* This also works fine.. <h3>{props.restraunt.name}</h3> */}
//       <h4>{cuisine}</h4>
//       <h5>{amount}</h5>
//       <h5>{rating} Star</h5>
//     </div>
//   );
// };

//Same using different ways


//Some Cool Developers Use this using Spread Operators!!!

// const FoodMenu = () => (
//   <div className="FoodMenu">
//     <FoodCard {...foodData[0]} />
//     <FoodCard {...foodData[1]} />
//     <FoodCard {...foodData[2]} />
//   </div>
// );

//Creating FoodCard Using Loops or Map



