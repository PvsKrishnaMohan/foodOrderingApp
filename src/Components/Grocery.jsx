import React, { useContext } from "react";
import { TestContext } from "../Utils/TestContext";
import { useReducer } from "react";

const reducer = (state, action) => {
  // console.log(state,"state")
  // console.log(action,"action")
  if (action.type === "DELETE_USER") {
    const userToDelete = state.data.filter(
      (eachItem) => eachItem.id != action.payload
    );
    // return userToDelete
    return {
      ...state,
      data: userToDelete,
      length: state.length - 1,
    };
  }
  return state;
};

const Grocery = () => {
  const { testData } = useContext(TestContext);
  const initialState = {
    data: [
      { id: "eer4f2435", name: "krishna", email: "krishna@gmail.com" },
      { id: "htygfr65654gr", name: "mohan", email: "mohan@gmail.com" },
    ],
    length: 2,
  };
  // const test = useReducer(reducer,initialState)
  //test gives us an array with initial state, a function (we call dispatch)
  //so it comes as below
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_USER",
      payload: id,
    });
  };
  return (
    <div className="flex flex-col justify-evenly items-center border rounded-3xl shadow-2xl shadow-gray-400 mt-24 p-4 m-52">
      <h1 className="p-16 text-green-900 font-normal text-lg">
        This is a grocery delivery store, below are the details of customer{" "}
      </h1>

      <h1 className="text-2xl text-blue-500 font-bold text-center">
        {testData.name}
      </h1>
      <h1 className="text-xl text-orange-500 text-center">{testData.email}</h1>

      <h1 className="text-center text-green-600 font-mono">
        length :{state.length}
      </h1>
      <h1>This is made of useReducer</h1>
      <div>
        {state.data.map((eachItem) => {
          return (
            <div
              className="text-start font-mono border shadow rounded p-3 m-3 bg-slate-200"
              key={eachItem.id}
            >
              <h2>Name : {eachItem.name}</h2>
              <h2>Email : {eachItem.email}</h2>
              <button
                className="bg-red-500 text-slate-300 font-medium p-2 m-2"
                onClick={() => handleDelete(eachItem.id)}
              >
                Delete
              </button>
              {/* <button
                className="bg-sky-300 text-black-300 rounded font-medium p-2 m-2"
                onClick={() => handleDelete(eachItem.id)}
              >
                edit
              </button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Grocery;
