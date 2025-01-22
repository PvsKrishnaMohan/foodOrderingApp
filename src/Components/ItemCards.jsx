import React from "react";

const ItemCards = (props) => {
  const { ItemList } = props;
  console.log(ItemList, "it");
  return (
    <div>
      {ItemList.map((item) => {
        return <div key={item?.card?.info?.id} className="p-2 m-2 border-gray-200 border-b-2 text-left">
            <div className="py-2">
                <span className="">{item?.card?.info?.name}</span>
                <span className=""> - ₹{item?.card?.info?.defaultPrice/100 || item?.card?.info?.price}</span>
            </div>
            <p className="text-xs font-normal">{item?.card?.info?.description}</p>
        </div>;
      })}
    </div>
  );
};

export default ItemCards;
