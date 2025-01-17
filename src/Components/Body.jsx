import React, { useEffect, useState } from "react";
import ResCard from "./ResCard";
import resList from "../Utils/mockData";
import Shimmer from "./Shimmer";

export const Body = () => {
  const [restauantList, setRestaurantList] = useState([]);
  const [filteredRes, setFilteredRest] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const fetchData = async () => {
    try {
      const fetchedData = await fetch(
        "https://www.swiggy.com/mapi/restaurants/search/v3?lat=12.9352403&lng=77.624532&str=salads&trackingId=401e9c28-d5eb-30ef-b87b-b054ae631be3&submitAction=ENTER&queryUniqueId=b860e13d-4a32-cd51-6e64-2ec9b3ab656f"
      );
      const data = await fetchedData.json();
      setRestaurantList(data? data : resList);
    } catch (err) {
      console.log(err, "error");
      setRestaurantList(resList);
    }
  };

  useEffect(() => {
    // fetchData();
    setRestaurantList(resList);
    setFilteredRest(resList);
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
          <button onClick={()=>{
            const searchRes = restauantList.filter((res) => res.card.card.info.name.toLowerCase().includes(inputValue.toLowerCase()));
            setFilteredRest(searchRes);
          }}>Search</button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredResList = restauantList.filter(
              (res) => res.card.card.info.avgRating > 4.5
            );
            setFilteredRest(filteredResList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRes.map((res) => (
          <ResCard key={res?.card?.card?.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
