import { createContext, useState } from "react";

export const TestContext = createContext();

export const TestContextProvider = ({children}) => {
    const [testData, setTestData] = useState({})
    return (
        <TestContext.Provider value={{setTestData, testData}}>
            {children}
        </TestContext.Provider>
    )
}