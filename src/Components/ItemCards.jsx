import React from "react";
import {
  SWIGGY_IMG_BASE_URL,
  VEG_LOGO_URL,
  NONVEG_LOGO_URL,
} from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/CartSlice";

const ItemCards = (props) => {
  const { ItemList } = props;
  console.log(ItemList, "it");

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }
  return (
    <div>
      {ItemList.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between "
          >
            <div className="py-5 w-9/12">
              <span>
                <img
                  className="w-5"
                  src={
                    item?.card?.info?.itemAttribute?.vegClassifier === "NONVEG"
                      ? NONVEG_LOGO_URL
                      : VEG_LOGO_URL
                  }
                />
              </span>
              <span className="py-4"> {item?.card?.info?.name} </span>

              <span className="p-4">
                {" "}
                - ₹ {"  "}
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}
              </span>

              <p className="text-xs font-normal py-4">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="w-3/12">
              <img
                className="w-full rounded-md"
                src={SWIGGY_IMG_BASE_URL + item?.card?.info?.imageId}
                alt={item?.card?.info.name}
              />
              <div className="text-center">
                <button className="rounded shadow-lg m-2 p-2 font-mono text-sm bg-black text-slate-50" onClick={()=> handleAddItem(item)}>
                  Add +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemCards;
