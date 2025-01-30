import React, { useReducer } from "react";
import { TestContext } from "../Utils/TestContext";
import { useContext, useEffect, useState } from "react";

const Contact = () => {
  const { setTestData } = useContext(TestContext);
  const contObj = {
    name: "Krishna",
    email: "krishna@gmail.com",
  };

  const reducer = (state, action) => {
    if (action.type === "UPDATE_USER_DATA") {
      return {
        ...state,
        userData: action.payload,
      };
    }
    if (action.type === "DELETE_USER") {
      // Check if the ID exists before filtering
      const existingUser = state.userData.find(
        (item) => item.id === action.payload
      );
      if (!existingUser) {
        console.error(`User with ID ${action.payload} not found.`);
        return state; // Return the current state if the user is not found
      }
      const filteredData = state.userData.filter(
        (eachItem) => eachItem.id !== action.payload
      );
      // console.log(filteredData, "fd");
      return {
        ...state,
        userData: filteredData,
      };
    }
    if (action.type === "LOADING") {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    if (action.type === "ERROR") {
      return {
        ...state,
        isError: action.payload,
      };
    }
    if (action.type === "EDIT_USER") {
      return {
        ...state,
        isEditing: action.payload,
      };
    }
    if (action.type === "UPDATE_USER") {
      // debugger
      const newUsers = state.userData.map((eachItem) => {
        if (eachItem.id === action.payload.id) {
          return {
            id:action.payload.id,
            name:action.payload.name,
            email:action.payload.email,
            username:action.payload.username
          }
        } else {
          return eachItem;
        }
        
      });
      
      return {
        ...state,
        userData: newUsers
      }
    }
  };

  const initialState = {
    userData: [],
    isLoading: false,
    isError: { status: false, msg: " " },
    isEditing: { status: false, id: "", name: "", email: "", username:"" },
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchUserData = async () => {
    dispatch({ type: "LOADING", payload: true });
    dispatch({ type: "ERROR", payload: { status: false, msg: "" } });
    try {
      const Apiurl = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await Apiurl.json();
      // console.log(data,"dd");
      dispatch({ type: "UPDATE_USER_DATA", payload: data });
      dispatch({ type: "LOADING", payload: false });
      dispatch({ type: "ERROR", payload: { status: false, msg: "" } });
    } catch (err) {
      console.error(err, "error");
      dispatch({ type: "ERROR", payload: { status: true, msg: err.message } });
      dispatch({ type: "LOADING", payload: false });
    }
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };

  const handleUpdate = (id, name, email,username) => {
    dispatch({ type: "UPDATE_USER", payload: { id, name, email ,username} });
    dispatch({type: "EDIT_USER",  payload: {
      status: false,
      id: '',
      name: '',
      email: '',
      username:''
    } })
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  if (state.isLoading) {
    return (
      <div className="text-4xl text-blue-600 text-center mt-80">loading...</div>
    );
  }
  if (state.isError.status) {
    return <h1>{state.isError.message}</h1>;
  }
  return (
    <>
      <div className="flex flex-col items-center border rounded-3xl shadow-2xl shadow-gray-400 mt-2 p-4 m-52">
        <div className="">This is Contact page</div>
        <h1 className="">
          Send details of customer to grocery page through useContext
        </h1>
        <button
          className="bg-lime-500 p-3 border rounded-lg mt-10"
          onClick={() => setTestData(contObj)}
        >
          send Data from contact
        </button>
      </div>

      <div className="flex flex-col items-center text-center border rounded-3xl shadow-2xl shadow-gray-400 p-4 m-2">
        <h1 className=" ">useReducer example</h1>
        {state.isEditing.status && (
          <div className="p-2 m-2 ">
            <FormContainer
              id={state.isEditing.id}
              nameReceived={state.isEditing.name}
              emailreceived={state.isEditing.email}
              user_Namereceived={state.isEditing.username}
              updateFn={handleUpdate}
            />
          </div>
        )}
        <div className="flex flex-wrap p-5 text-center m-4 w-auto">
          {state.userData.map((eachItem) => {
            return (
              <div
                key={eachItem.id}
                className="p-5 bg-slate-300 shadow-2xl border rounded m-4"
              >
                <h2>{eachItem.name}</h2>
                <h2 className="">{eachItem.username}</h2>
                <h2>{eachItem.email}</h2>
                <button
                  className="bg-red-500 p-2 border rounded-xl shadow-2xl mt-2"
                  onClick={() => handleDelete(eachItem.id)}
                >
                  Delete
                </button>
                <button
                  className="ml-2 bg-lime-500 p-2 border rounded-xl shadow-2xl mt-2"
                  onClick={() =>
                    dispatch({
                      type: "EDIT_USER",
                      payload: {
                        status: true,
                        id: eachItem.id,
                        name: eachItem.name,
                        email: eachItem.email,
                        username: eachItem.username
                      },
                    })
                  }
                >
                  Edit
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const FormContainer = ({ id, nameReceived, emailreceived,user_Namereceived, updateFn }) => {
  const [name, setName] = useState(nameReceived || "");
  const [email, setEmail] = useState(emailreceived || "");
  const [username, setUserName] = useState(user_Namereceived || "");
  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          className="border rounded-lg m-2 p-2"
        />
        <input
          type="text"
          value={username}
          id="userName"
          name="userName"
          onChange={(e) => setUserName(e.target.value)}
          className="border rounded-lg m-2 p-2"
        />
        <input
          type="email"
          value={email}
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-lg m-2 p-2"
        />
        
        <button
          className="border rounded-lg bg-green-700 p-2 m-2"
          onClick={(e) =>{ e.preventDefault(); updateFn(id, name, email,username)}}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Contact;
