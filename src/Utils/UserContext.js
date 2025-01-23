import { createContext } from "react";

const userContext = createContext({
    userName: "default user"
})

export default userContext;