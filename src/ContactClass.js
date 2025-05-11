import { Component } from "react";
import UserContext from "../utils/UserContext.js";

class ContactClass extends Component{
    render() {
        return (
            <div className="bg-amber-600 p-3 text-white">
                <h1>This is a Contact Page Created by class Component...</h1>
                <UserContext.Consumer>
                    {({ userName, gender }) =>  <h1>{userName+" "+gender }</h1> }
                </UserContext.Consumer>
            </div>
        );
   }
}

export default ContactClass;