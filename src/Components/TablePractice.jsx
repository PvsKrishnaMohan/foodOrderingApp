import React, { useState } from "react";

const TablePractice = () => {
  const userData = [
    { name: "Alice", age: 22, place: "Mumbai" },
    { name: "Bob", age: 20, place: "Delhi" },
    { name: "Charlie", age: 21, place: "Chennai" },
    { name: "David", age: 23, place: "Kolkata" },
    { name: "Eve", age: 19, place: "Hyderabad" },
    { name: "Frank", age: 25, place: "Pune" },
    { name: "Grace", age: 24, place: "Bangalore" },
    { name: "Hank", age: 22, place: "Goa" },
    { name: "Ivy", age: 20, place: "Jaipur" },
    { name: "Jack", age: 21, place: "Lucknow" },
  ];
  const [data, setData] = useState(userData);
  const [direction,setDirection] =useState(true);
  const [key,setKey]=useState(null);

  const handleSort = (clickedKey) => {
    const sameColumn = clickedKey === key;
    const newDirection = sameColumn? !direction : true;
    
    setKey(clickedKey);
    setDirection(newDirection);
    const sortedData = [...data].sort((a,b)=> {
        if(typeof a[clickedKey] ==="string"){
            return newDirection? a[clickedKey].localeCompare(b[clickedKey]) : b[clickedKey].localeCompare(a[clickedKey])
        }else{
            return newDirection? a[clickedKey]-b[clickedKey] : b[clickedKey]-a[clickedKey];
        }
    })
    setData(sortedData);
  }
  return (
    <div className="flex justify-center mt-10 p-4 border-gray-400 bg-zinc-50">
      {/* {JSON.stringify(userData)} */}
      <table className="m-4 p-5 border-gray-400 border-collapse border text-center shadow-2xl">
        <caption className="text-2xl font-bold text-center m-4">
          User Data
        </caption>
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-blue-950 p-4 cursor-pointer" onClick={()=>handleSort("name")}>Name {key ==="name"? (direction? "🔽" :"🔼"):""}</th>
            <th className="border border-blue-950 p-4 cursor-pointer" onClick={()=>handleSort("age")}>Age {key==="age"? (direction ? "🔽" : "🔼"): ""}</th>
            <th className="border border-blue-950 p-4 cursor-pointer" onClick={()=>handleSort("place")}>Place {key ==="place" ? (direction? "🔽":"🔼"):""}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachItem,index) => {
            return (
              <tr className="border border-gray-900 text-center" key={index}>
                <td className="p-4 border border-blue-950">{eachItem.name}</td>
                <td className="p-4 border border-blue-950">{eachItem.age}</td>
                <td className="p-4 border border-blue-950">{eachItem.place}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TablePractice;
