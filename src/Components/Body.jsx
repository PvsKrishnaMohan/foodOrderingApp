import React, { useEffect, useState } from "react";
import ResCard from "./ResCard";
import resList from "../Utils/mockData";
import Shimmer from "./Shimmer";
import { API_URL } from "../Utils/Constants";
import { RESTAURANTS_LIST_URL } from "../Utils/Constants";

export const Body = () => {
  const [restauantList, setRestaurantList] = useState([]);
  const [filteredRes, setFilteredRest] = useState([]);
  const [inputValue, setInputValue] = useState("");

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

  return restauantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-component">
      <div className="filter-cont">
        <div className="search-container">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
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
          className="filter-btn"
          onClick={() => {
            const filteredResList = restauantList.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRest(filteredResList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRes.map((res) => (
          <ResCard key={res?.info.id} resData={res.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;
