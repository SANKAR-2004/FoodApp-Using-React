import { createContext } from "react"

const UserContext = createContext({
    userName: "Sankar",
    gender:"Male"
});

export default UserContext;