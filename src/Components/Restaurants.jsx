import React, { useEffect, useState } from "react";
import { HOTEL_URL } from "../Utils/Constants";
import Shimmer from "./Shimmer";

const Restaurants = () => {
  const [resInfo, setResInfo] = useState([]);

  const fetchHotelUrl = async () => {
    const dataFetched = await fetch(HOTEL_URL);
    const data = await dataFetched.json();
    setResInfo(data);
  };

  useEffect(() => {
    fetchHotelUrl();
  }, []);

  if (resInfo.length === 0) {
    return <Shimmer />;
  }
  const {
    name,
    cuisines,
    costForTwoMessage,
    id,
    avgRating,
    cloudinaryImageId,
  } = resInfo?.data?.cards[2]?.card?.card?.info;
  return (
    <div>
      {resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((res) => {
        
        return (
          <div key={res?.info?.id }>
            <h3>{res?.info?.name ? res?.info?.name : ""}</h3>
            <h6>{res?.info?.category ? res?.info?.category: ""}</h6>
            <h5>{res?.info?.price ? res?.info?.price : ""}</h5>
            {/* <h6>{avgRating ? avgRating : ""}</h6> */}
          </div>
        );
      })}
    </div>
  );
};

export default Restaurants;
