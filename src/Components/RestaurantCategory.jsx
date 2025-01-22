import React from "react";
import ItemCards from "./ItemCards";

const RestaurantCategory = (props) => {
  const { data } = props;
  return (
    <div className="bg-gray-50 rounded-lg shadow-2xl text-black-50 font-bold w-6/12 m-3 p-3 ">
      <div className="justify-between flex">
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      {/* {body} */}
      <ItemCards ItemList={data.itemCards} />
    </div>
  );
};

export default RestaurantCategory;
