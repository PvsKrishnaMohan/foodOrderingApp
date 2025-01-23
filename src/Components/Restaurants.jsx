import React, { useEffect, useState } from "react";
import { CLOUDINARY_URL, HOTEL_URL } from "../Utils/Constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import { SWIGGY_IMG_BASE_URL } from "../Utils/Constants";
import { ResMenuItemsList } from "../Utils/mockData";
import useRestaurantsMenu from "../Utils/useRestaurantsList";
import useOnlineStatus from "../Utils/useOnlineStatus";
import RestaurantCategory from "./RestaurantCategory";

const Restaurants = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantsMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  const {
    name,
    cuisines,
    costForTwoMessage,
    id,
    avgRating,
    cloudinaryImageId,
    areaName,
  } = resInfo?.data?.cards[2]?.card?.card?.info || {};

  const menuList =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;

  const ResCategoryMenu =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (r) =>
        r.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(ResCategoryMenu, "rcm");

  return resInfo.length === 0 || null ? (
    <Shimmer />
  ) : (
    <div className="justify-center">
      <div className="flex justify-center">
        <div className="text-center mt-5 p-5">
          <h1 className=" font-bold font-mono text-2xl">{name}</h1>
          <h2 className="m-2">{cuisines.join(", ")}</h2>
          <h3 className="p-4 mt-2">{costForTwoMessage}</h3>
          <h4 className="p-4">{areaName}</h4>
          <h4 className="bg-yellow-400 rounded-full mt-5">
            {avgRating} Ratings
          </h4>
        </div>
        <div className="w-56  p-2 m-5">
          <img
            className="rounded-xl"
            src={CLOUDINARY_URL + cloudinaryImageId}
          />
        </div>
      </div>
      <div className="m-auto border-2 flex flex-col items-center text-center justify-center">
        {ResCategoryMenu.map((resCategory, index) => {
          return (
            <RestaurantCategory
              key={index}
              data={resCategory?.card?.card}
              showItems = {index === showIndex? true : false}
              setShowIndex = {() => setShowIndex(index)}

            />
          );
        })}
      </div>
    </div>
  );
};

export default Restaurants;
