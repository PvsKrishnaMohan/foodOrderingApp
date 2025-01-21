import React, { useEffect, useState } from "react";
import { CLOUDINARY_URL, HOTEL_URL } from "../Utils/Constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import { SWIGGY_IMG_BASE_URL } from "../Utils/Constants";
import { ResMenuItemsList } from "../Utils/mockData";
import useRestaurantsMenu from "../Utils/useRestaurantsList";

const Restaurants = () => {
  const {resId} = useParams();  
  const resInfo = useRestaurantsMenu(resId);
  console.log(resInfo,"ri")
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
      ?.card?.itemCards 
  //  const {name,id, description}= menuList
  console.log(menuList, "ml");

  return resInfo.length === 0 || null ? (
    <Shimmer />
  ) : (
    <>
    <div className="resContMenu">
      <div>
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <h3>{costForTwoMessage}</h3>
        <h4>{avgRating}</h4>
      </div>
      <div className="resMenuListImgcont">
        <img className="resMenuList" src={CLOUDINARY_URL + cloudinaryImageId} />
      </div>     
    </div>
        <div className="cardContMenu">
        {menuList.map((menu) => {
        return (
          <div className="menuCard" key={menu.card.info.id}>
            <div>
            <h2>{menu.card.info.name  || " "}</h2>
            <h6>{menu.card.info.description || " "}</h6> 
            <h5>{menu.card.info.price || " "}</h5>
            </div>
            <div className="cardImgDiv">
                <img className="cardImg" src={SWIGGY_IMG_BASE_URL+menu.card.info.imageId}/>
                <h4>{menu.card.info.itemAttribute.vegClassifier ==="NONVEG" ? <span className="nonVeg">Non Veg</span> : <span className="veg">veg</span>}</h4>
            </div>
          </div>
        );
      })}
        </div>
    </>
  );
};

export default Restaurants;
