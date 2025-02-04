import React, { useEffect, useState, useContext } from "react";
import ResCard from "./ResCard";
import { resList } from "../Utils/mockData";
import Shimmer from "./Shimmer";
import { API_URL, RESTAURANTS_LIST_URL } from "../Utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { LabeledRestaurant } from "./ResCard";
import userContext from "../Utils/UserContext";

export const Body = () => {
  const [restauantList, setRestaurantList] = useState([]);
  const [filteredRes, setFilteredRest] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const { userName, setUserData } = useContext(userContext);
  const checkOnlineStatus = useOnlineStatus();

  const fetchData = async () => {
    try {
      const fetchedData = await fetch(RESTAURANTS_LIST_URL);
      const data = await fetchedData.json();
      const RestaurantList =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
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

  const LabelRestaurant = LabeledRestaurant(ResCard);

  if (checkOnlineStatus === false) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
            Looks like you're offline! Please check your internet connection
          </h1>
        </div>
      </div>
    );
  }

  return restauantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Filters and Search Section */}
      <div className="space-y-4 md:space-y-0 md:flex md:items-center md:justify-between mb-8">
        {/* Search Container */}
        <div className="flex flex-wrap gap-2">
          <input
            type="text"
            className="flex-grow md:flex-grow-0 min-w-[200px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            value={inputValue}
            placeholder="Search Restaurant"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
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

        {/* Filters */}
        <div className="flex flex-wrap gap-2  flex-row">
          <button
            className="px-2 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
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
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            value={userName}
            placeholder="Edit card"
            onChange={(e) => setUserData(e.target.value)}
          />
        </div>
      </div>

      {/* Restaurant Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 justify-items-center">
        {filteredRes.map((res) => (
          <Link
            to={"/restaurants/" + res?.info.id}
            key={res?.info.id}
            className="block transform hover:scale-105 transition-transform duration-200"
          >
            {res?.info?.isOpen ? (
              <LabelRestaurant resData={res.info} />
            ) : (
              <ResCard resData={res.info} />
            )}
          </Link>
        ))}
      </div>

      {/* No Results Message */}
      {filteredRes.length === 0 && (
        <div className="text-center py-8">
          <h2 className="text-xl text-gray-600">
            No restaurants found matching your search.
          </h2>
        </div>
      )}
    </div>
  );
};

export default Body;
