import React, { useEffect, useState } from "react";
import { CLOUDINARY_URL, HOTEL_URL } from "../Utils/Constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import { SWIGGY_IMG_BASE_URL } from "../Utils/Constants";
import { ResMenuItemsList } from "../Utils/mockData";
import useRestaurantsMenu from "../Utils/useRestaurantsList";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Restaurants = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantsMenu(resId);

  const {
    name,
    cuisines,
    costForTwoMessage,
    id,
    avgRating,
    cloudinaryImageId,
  } = resInfo?.data?.cards[2]?.card?.card?.info || {};

  const menuList =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;
  //  const {name,id, description}= menuList

  return resInfo.length === 0 || null ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex m-5 bg-orange-200 w-96 justify-center rounded-full shadow-2xl p-5 text-lg">
        <div>
          <h1 className="text-center mt-5 font-bold font-mono text-xl">
            {name}
          </h1>
          <h2 className="text-center mt-5 ">{cuisines.join(", ")}</h2>
          <h3 className="text-center mt-5">{costForTwoMessage}</h3>
          <h4 className="text-center mt-5">{avgRating}</h4>
        </div>
        <div className="w-40  p-2 m-2">
          <img
            className="rounded-xl"
            src={CLOUDINARY_URL + cloudinaryImageId}
          />
        </div>
      </div>
      <div className="flex flex-wrap m-5 justify-center">
        {menuList.map((menu) => {
          return (
            <div
              className="w-3/12 flex bg-lime-50 shadow-lg m-5 p-5"
              key={menu.card.info.id}
            >
              <div className="">
                <h2 className="font-bold">{menu.card.info.name || " "}</h2>
                <h6 className="font-thin">
                  {menu.card.info.description || " "}
                </h6>
                <h5 className="font-thin">{menu.card.info.price || " "}</h5>
              </div>
              <div className="w-96 m-2 p-2">
                <img
                  className="w-96"
                  src={SWIGGY_IMG_BASE_URL + menu.card.info.imageId}
                />
                <h4>
                  {menu.card.info.itemAttribute.vegClassifier === "NONVEG" ? (
                    <h6 className="bg-red-700 text-slate-100 text-center text-bold rounded-lg">
                      Non Veg
                    </h6>
                  ) : (
                    <span className="bg-green-700 p-2 text-slate-100 text-center text-bold rounded-lg">
                      veg
                    </span>
                  )}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Restaurants;
