import React, { useEffect, useState, useContext } from "react";
import ResCard from "./ResCard";
import { resList } from "../Utils/mockData";
import Shimmer from "./Shimmer";
import { API_URL } from "../Utils/Constants";
import { RESTAURANTS_LIST_URL } from "../Utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { LabeledRestaurant } from "./ResCard";
import userContext from "../Utils/UserContext";
export const Body = () => {
  const [restauantList, setRestaurantList] = useState([]);
  const [filteredRes, setFilteredRest] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const fetchData = async () => {
    try {
      const fetchedData = await fetch(RESTAURANTS_LIST_URL);
      const data = await fetchedData.json();
      // console.log(data,"data")
      const RestaurantList =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
        // console.log(RestaurantList,"rl")
      setRestaurantList(RestaurantList ? RestaurantList : resList);
      setFilteredRest(RestaurantList ? RestaurantList : resList);
    } catch (err) {
      console.log(err, "error");
      setRestaurantList(resList);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const {userName,setUserData} = useContext(userContext);
  const checkOnlineStatus = useOnlineStatus();

  const LabelRestaurant = LabeledRestaurant(ResCard)
  if (checkOnlineStatus === false) {
    return (
      <h1>Looks like you are offline! Please check your internet connection</h1>
    );
  }

  return restauantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-component">
      <div className="filter-cont m-4 flex items-center">
        <div className="search-container">
          <input
            type="text"
            className="border-solid border p-2 ml-3 rounded text-black-50	border-yellow-800 focus:outline-none "
            value={inputValue}
            placeholder="Search Restaurant"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="px-4 py-2 border-solid border p-2 ml-2 rounded text-black-50 bg-green-300"
            onClick={() => {
              const searchRes = restauantList.filter((res) =>
                res.info.name.toLowerCase().includes(inputValue.toLowerCase())
              );
              setFilteredRest(searchRes);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="border-solid filter-btn border p-2 ml-3 rounded text-slate-50  bg-yellow-500"
          onClick={() => {
            const filteredResList = restauantList.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRest(filteredResList);
          }}
        >
          Top Rated Restaurants
        </button>

        <input
            type="text"
            className="border-solid border p-2 ml-3 rounded text-black-50	border-yellow-800 focus:outline-none "
            value={userName}
            placeholder="edit card"
            onChange={(e) => setUserData(e.target.value)}
          />

      </div>

      <div className="flex flex-wrap justify-center">
        {filteredRes.map((res) => (
          <Link to={"/restaurants/" + res?.info.id} key={res?.info.id}>
            {res?.info?.isOpen ? <LabelRestaurant resData = {res.info}/> :
            <ResCard resData={res.info} />}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
