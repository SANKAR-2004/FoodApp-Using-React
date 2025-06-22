import { Provider } from "react-redux";
import AppStore from "../ReduxStore/AppStore.js";
import UserContext from "../utils/UserContext.js";
import useOnline from "../utils/useOnline.js";
import { Outlet } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";

const Body = () => {
  if (!useOnline())
    return (
      <h2 className="text-2xl">
        No Internet Connection !! 🚨🚨 Let me build a game here...
      </h2>
    );
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
};


export default Body;