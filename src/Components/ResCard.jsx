import React, { useContext } from "react";
import { CLOUDINARY_URL } from "../Utils/Constants";
import userContext from "../Utils/UserContext";

const ResCard = (props) => {
  const { resData } = props;
  const { name, costForTwo, cuisines, avgRating, sla, cloudinaryImageId } = resData;
  const { userData, setUserData } = useContext(userContext);

  const truncateCuisines = (cuisines) => {
    const maxLength = 50; // Set the max length for cuisines
    const cuisinesString = cuisines.join(", ");
    return cuisinesString.length > maxLength ? cuisinesString.substring(0, maxLength) + "..." : cuisinesString;
  };

  return (
    <div className="w-full max-w-[250px] min-h-[350px] p-6 bg-slate-200 rounded-lg m-3 hover:bg-yellow-50 flex flex-col">
      <img
        className="rounded-lg mb-4 h-40 object-cover"
        src={CLOUDINARY_URL + cloudinaryImageId}
      />
      <div className="flex justify-between my-2">
        <h4 className="font-bold text-lg">{name}</h4>
        <h6 className="bg-orange-100 p-2 rounded-xl text-md">{costForTwo}</h6>
      </div>
      <h6 className="text-md">{truncateCuisines(cuisines)}</h6>
      <div className="flex justify-between my-2">
        <h6 className="bg-yellow-100 p-2 rounded-lg text-md">{avgRating} stars</h6>
        <h6 className="bg-lime-200 rounded-lg p-2 text-md">{sla.slaString}</h6>
        <h1 className="text-md">{userData}</h1>
      </div>
    </div>
  );
};

export const LabeledRestaurant = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-black absolute text-white m-2 p-2 rounded-lg">Open now</label>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
