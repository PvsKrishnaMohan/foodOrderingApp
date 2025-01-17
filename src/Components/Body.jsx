import React, { useState } from "react";
import ResCard from "./ResCard";
import resList from "../Utils/mockData";

export const Body = () => {
  const [restauantList, setRestaurantList] = useState(resList);
  return (
    <div className="body-component">
      <div className="filter-cont">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredResList = restauantList.filter(
              (res) => res.card.card.info.avgRating > 4.5
            );
            console.log(filteredResList,"fr")
            setRestaurantList(filteredResList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restauantList.map((res) => (
          <ResCard key={res?.card?.card?.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
