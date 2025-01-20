import React, { useState } from "react";

const UserCard = (props) => {
    const { name, location, gender} =props
    const [count] = useState(0);
    const [count2] = useState(2);
  return (
    <div className="userCard">
      <h1>{name}</h1>
      <h2>{location}</h2>
      <h3>{gender}</h3>
      <h3>{count}</h3>
      <h3>{count2}</h3>
    </div>
  );
};

export default UserCard;
