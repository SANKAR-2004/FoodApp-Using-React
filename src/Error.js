import { useRouteError } from "react-router"; 

const Error = () => {
    const {status, statusText} = useRouteError();
    console.log(useRouteError());
  return (
    <div className="ErrorDiv">
          <h2> Enter the correct Path👀</h2>
          <h3>{status+ " "}{" "+statusText}</h3>
    </div>
  );
};

export default Error;
