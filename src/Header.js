import { useState } from "react";
//import {url} from "../constants.js";
//import { Logo } from "../constants";
import LogoURL from "../assets/LOGO.jpg";
import { Link } from "react-router";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
  
const LogoImg = () => (
 
  <div className="gap-x-2.5 p-2 flex items-center bg-amber-300">
    <img src="../FOOD_VILLA.jpg" className="h-14" alt="Logo" />
     
    <h2 className="text-3xl font-bold">EasyBuy</h2>
  </div>
);

const ListItems = () => {

  const toggleMenu = () => {
    const loginbtn = document.getElementById("loginbtn");
    const navItems = document.getElementById("nav-items");
    if (navItems.classList.contains("hidden")) {
      navItems.classList.remove("hidden");
      loginbtn.classList.remove("hidden");
    }
    else {
      navItems.classList.add("hidden");
      loginbtn.classList.add("hidden");
    }
    }

  //  let btnName = "LogIn";
  let [btnName, setbtnName] = useState("Login");


  const { userName, gender } = useContext(UserContext);
  
  const cartData = useSelector((store) => store.cart.items);
  console.log(cartData);
  
  return (
    <div className="bg-white z-300 sm:p-0 pt-4 flex flex-col  bg-red  sm:flex-row-reverse h-12">
      <h1>{userName}</h1>
      <ul
        id="nav-items"
        className="hidden z-10 bg-white text-center flex-col sm:inline-flex sm:flex-row  sm:p-0 pt-7 items-center"
      >
        <Link to="/">
          {" "}
          <li className="hover:bg-sky-200 px-20 py-3 sm:px-6 w-50 sm:w-30 border-violet-600 sm:border-l-4 sm:border-r-2">
            Home
          </li>
        </Link>
        <Link to="/contact">
          {" "}
          <li className="hover:bg-sky-200 px-20 py-3 sm:px-6 w-50 sm:w-30 border-violet-600 sm:border-x-2">
            Contact
          </li>
        </Link>
        <Link to="/orders">
          {" "}
          <li className="hover:bg-sky-200 px-20 py-3 sm:px-6 w-50 sm:w-30 border-violet-600 sm:border-x-2">
            Orders
          </li>
        </Link>
        <Link to="/aboutus">
          {" "}
          <li className="hover:bg-sky-200 px-20 py-3 sm:px-6 w-50 sm:w-30 border-violet-600 sm:border-x-2">
            About Us
          </li>
        </Link>
        <Link to="/cart">
          {" "}
          <li className="flex hover:bg-sky-200 px-20 py-3 sm:px-6 w-50 sm:w-30 border-violet-600 sm:border-x-2">
            <span className="text-2xl mx-1"><FaCartShopping /></span> {cartData.length + " Items"}
          </li>
        </Link>
        <Link to="/instamart">
          {" "}
          <li className="hover:bg-sky-200 px-20 py-3 sm:px-6 w-50 sm:w-30 sm:border-l-2 border-violet-600 sm:border-r-4">
            Instamart
          </li>
        </Link>
      </ul>
      <button
        id="loginbtn"
        className="z-30 hidden sm:block hover:bg-green-300 bg-green-400 sm:w-25 p-3 sm:px-6 cursor-pointer"
        onClick={() => {
          if (btnName == "Login") setbtnName("Logout");
          else setbtnName("Login");
        }}
      >
        {btnName}
      </button>
      <span
        onClick={toggleMenu}
        className="z-20 menu-button absolute top-2 right-2  text-4xl cursor-pointer sm:hidden"
      >
        <IoMenuSharp />
      </span>
      <span
        onClick={toggleMenu}
        className="hidden absolute top-2 right-2 text-5xl cursor-pointer sm:hidden"
      >
        <IoMdClose />
      </span>
    </div>
  );
};

const Header = () => {

  return (
    <div className="flex items-center bg-gray-100 justify-between">
      <LogoImg />
      <ListItems />
    </div>
  );
};

export default Header;
