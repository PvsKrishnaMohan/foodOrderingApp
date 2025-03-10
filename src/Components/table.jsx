import React, { useState } from "react";

// const StudentTable = () => {
//   const [students, setStudents] = useState([
//     { name: "Alice", age: 22, place: "Mumbai" },
//     { name: "Bob", age: 20, place: "Delhi" },
//     { name: "Charlie", age: 21, place: "Chennai" },
//     { name: "David", age: 23, place: "Kolkata" },
//     { name: "Eve", age: 19, place: "Hyderabad" },
//     { name: "Frank", age: 25, place: "Pune" },
//     { name: "Grace", age: 24, place: "Bangalore" },
//     { name: "Hank", age: 22, place: "Goa" },
//     { name: "Ivy", age: 20, place: "Jaipur" },
//     { name: "Jack", age: 21, place: "Lucknow" },
//   ]);

//   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

//   const sortData = (key) => {
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc") {
//       direction = "desc";
//     }

//     const sortedData = [...students].sort((a, b) => {
//       if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
//       if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
//       return 0;
//     });

//     setSortConfig({ key, direction });
//     setStudents(sortedData);
//   };

//   return (
//     <div className="flex justify-center mt-10">
//       <table className="border-collapse border border-gray-400">
//         <thead>
//           <tr className="bg-gray-200">
//             <th
//               className="border border-red-400 px-4 py-2 cursor-pointer"
//               onClick={() => sortData("name")}
//             >
//               Name {sortConfig.key === "name" ? (sortConfig.direction === "asc" ? "🔼" : "🔽") : ""}
//             </th>
//             <th
//               className="border border-gray-400 px-4 py-2 cursor-pointer"
//               onClick={() => sortData("age")}
//             >
//               Age {sortConfig.key === "age" ? (sortConfig.direction === "asc" ? "🔼" : "🔽") : ""}
//             </th>
//             <th
//               className="border border-gray-400 px-4 py-2 cursor-pointer"
//               onClick={() => sortData("place")}
//             >
//               Place {sortConfig.key === "place" ? (sortConfig.direction === "asc" ? "🔼" : "🔽") : ""}
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student, index) => (
//             <tr key={index} className="hover:bg-gray-100">
//               <td className="border border-gray-400 px-4 py-2">{student.name}</td>
//               <td className="border border-gray-400 px-4 py-2">{student.age}</td>
//               <td className="border border-gray-400 px-4 py-2">{student.place}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

const StudentTable = () => {
  const empData = [
    {
      employee_id: 1,
      first_name: "Ginevra",
      last_name: "Letchford",
      job_title: "Actuary",
      department: "Marketing",
      salary: 73751.76,
      hire_date: "2/6/2016",
      years_of_experience: 9,
      performance_rating: 1,
      hourly_rate: 45.66,
    },
    {
      employee_id: 2,
      first_name: "Arin",
      last_name: "Hancill",
      job_title: "Account Coordinator",
      department: "Services",
      salary: 128724.28,
      hire_date: "1/7/2021",
      years_of_experience: 15,
      performance_rating: 5,
      hourly_rate: 60.72,
    },
    {
      employee_id: 3,
      first_name: "Elvyn",
      last_name: "Blackburn",
      job_title: "VP Sales",
      department: "Sales",
      salary: 138402.78,
      hire_date: "8/27/2006",
      years_of_experience: 32,
      performance_rating: 3,
      hourly_rate: 85.8,
    },
    {
      employee_id: 4,
      first_name: "Lorrin",
      last_name: "Tavernor",
      job_title: "Product Engineer",
      department: "Business Development",
      salary: 130984.68,
      hire_date: "3/8/2011",
      years_of_experience: 9,
      performance_rating: 1,
      hourly_rate: 93.83,
    },
    {
      employee_id: 5,
      first_name: "Ham",
      last_name: "Philimore",
      job_title: "Product Engineer",
      department: "Legal",
      salary: 131105.76,
      hire_date: "9/22/2010",
      years_of_experience: 32,
      performance_rating: 2,
      hourly_rate: 89.71,
    },
    {
      employee_id: 6,
      first_name: "Bill",
      last_name: "Jinks",
      job_title: "Marketing Manager",
      department: "Engineering",
      salary: 98197.21,
      hire_date: "1/16/2020",
      years_of_experience: 9,
      performance_rating: 3,
      hourly_rate: 46.53,
    },
    {
      employee_id: 7,
      first_name: "Gabriello",
      last_name: "Stockwell",
      job_title: "Human Resources Manager",
      department: "Support",
      salary: 130858.56,
      hire_date: "6/20/2022",
      years_of_experience: 37,
      performance_rating: 4,
      hourly_rate: 81.69,
    },
    {
      employee_id: 8,
      first_name: "Gizela",
      last_name: "Benny",
      job_title: "Automation Specialist IV",
      department: "Engineering",
      salary: 100012.98,
      hire_date: "5/1/2021",
      years_of_experience: 20,
      performance_rating: 1,
      hourly_rate: 98.4,
    },
    {
      employee_id: 9,
      first_name: "Cherilyn",
      last_name: "Northall",
      job_title: "Social Worker",
      department: "Engineering",
      salary: 146113.77,
      hire_date: "10/6/2002",
      years_of_experience: 1,
      performance_rating: 5,
      hourly_rate: 63.91,
    },
    {
      employee_id: 10,
      first_name: "Kipp",
      last_name: "McNuff",
      job_title: "Senior Sales Associate",
      department: "Sales",
      salary: 113447.0,
      hire_date: "12/23/2002",
      years_of_experience: 5,
      performance_rating: 4,
      hourly_rate: 44.24,
    },
    {
      employee_id: 11,
      first_name: "Marquita",
      last_name: "Orgen",
      job_title: "Software Engineer IV",
      department: "Product Management",
      salary: 126068.81,
      hire_date: "6/18/2012",
      years_of_experience: 37,
      performance_rating: 4,
      hourly_rate: 57.73,
    },
    {
      employee_id: 12,
      first_name: "Ivy",
      last_name: "Gabey",
      job_title: "Business Systems Development Analyst",
      department: "Legal",
      salary: 39169.33,
      hire_date: "9/9/2011",
      years_of_experience: 14,
      performance_rating: 5,
      hourly_rate: 90.65,
    },
    {
      employee_id: 13,
      first_name: "Alidia",
      last_name: "Cadreman",
      job_title: "Librarian",
      department: "Support",
      salary: 59274.78,
      hire_date: "1/24/2013",
      years_of_experience: 0,
      performance_rating: 3,
      hourly_rate: 42.31,
    },
    {
      employee_id: 14,
      first_name: "Kamila",
      last_name: "Gernier",
      job_title: "Computer Systems Analyst II",
      department: "Support",
      salary: 123888.56,
      hire_date: "6/7/2009",
      years_of_experience: 39,
      performance_rating: 4,
      hourly_rate: 35.04,
    },
    {
      employee_id: 15,
      first_name: "Brigg",
      last_name: "Marwood",
      job_title: "VP Quality Control",
      department: "Marketing",
      salary: 138894.77,
      hire_date: "7/3/2015",
      years_of_experience: 37,
      performance_rating: 3,
      hourly_rate: 34.36,
    },
  ];

  const [data, setData] = useState(empData);
  const [key, setKey] = useState(null);
  const [direction, setDirection] = useState(true);

  const handleSort = (clickedKey) => {
    const sameColumn = clickedKey === key;
    const toggleDirection = sameColumn ? !direction : true;
    setKey(clickedKey);
    setDirection(toggleDirection);

    const mySortedData = [...data].sort((a, b) => {
      if (typeof a[clickedKey] === "string") {
        return toggleDirection
          ? a[clickedKey].localeCompare(b[clickedKey])
          : b[clickedKey].localeCompare(a[clickedKey]);
      } else if (typeof a[clickedKey] === "number") {
        return toggleDirection
          ? a[clickedKey] - b[clickedKey]
          : b[clickedKey] - a[clickedKey];
      } else if(typeof a[clickedKey] === "date"){
        return toggleDirection
          ? new Date(a[clickedKey]) - new Date(b[clickedKey])
          : new Date(b[clickedKey]) - new Date(a[clickedKey]);
      }
    });
    setData(mySortedData);
  };

  const handleDelete =(employee_id) => {
    console.log(employee_id);
    const filteredData = data.filter((item)=> item.employee_id !== employee_id);
    setData(filteredData);
  }

  return (
    <div className="flex justify-center mt-2">
      <table className="border-collapse border border-gray-400">
        <thead className="bg-gray-200 border border-gray-400">
          <tr className="text-center">
            <th
              className="border border-gray-400 p-4 ml-2 cursor-pointer"
              onClick={() => {
                handleSort("employee_id");
              }}
            >
              S.no {key === "employee_id" ? (direction ? "🔽" : "🔼") : ""}
            </th>
            <th
              className="border border-gray-400 p-4 ml-2 cursor-pointer"
              onClick={() => {
                handleSort("first_name");
              }}
            >
              Name {key === "first_name" ? (direction ? "🔽" : "🔼") : ""}
            </th>
            <th
              className="border border-gray-400 p-4 ml-2 cursor-pointer"
              onClick={() => {
                handleSort("department");
              }}
            >
              Department {key === "department" ? (direction ? "🔽" : "🔼") : ""}
            </th>
            <th
              className="border border-gray-400 p-4 ml-2 cursor-pointer"
              onClick={() => {
                handleSort("hire_date");
              }}
            >
              Date of Joining {key === "hire_date" ? (direction ? "🔽" : "🔼") : ""}
            </th>
            <th
              className="border border-gray-400 p-4 ml-2 cursor-pointer"
              onClick={() => {
                handleSort("years_of_experience");
              }}
            >
              Experience {key === "years_of_experience" ? (direction ? "🔽" : "🔼") : ""}
            </th>
            <th
              className="border border-gray-400 p-4 ml-2 cursor-pointer"
              onClick={() => {
                handleSort("performance_rating");
              }}
            >
              Rating {key === "performance_rating" ? (direction ? "🔽" : "🔼") : ""}
            </th>
            <th
              className="border border-gray-400 p-4 ml-2 cursor-pointer"
              onClick={() => {
                handleSort("salary");
              }}
            >
              Salary {key === "salary" ? (direction ? "🔽" : "🔼") : ""}
            </th>
            <th>
                Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr
                key={item.employee_id}
                className={
                  item.employee_id % 2 === 0 ? "bg-amber-50" : "bg-green-50"
                }
              >
                <td className="border border-gray-400 p-4 text-center">
                  {item.employee_id}
                </td>
                <td className="border border-gray-400 p-4 text-center">
                  {item.first_name}
                </td>
                <td className="border border-gray-400 p-4 text-center">
                  {item.department}
                </td>
                <td className="border border-gray-400 p-4 text-center">
                  {item.hire_date}
                </td>
                <td className="border border-gray-400 p-4 text-center">
                  {item.years_of_experience}
                </td>
                <td className="border border-gray-400 p-4 text-center">
                  {item.performance_rating}
                </td>
                <td className="border border-gray-400 p-4 text-center">
                  {item.salary}
                </td>
                <td className="border border-gray-400 p-4 text-center">
                    <button onClick={()=> handleDelete(item.employee_id)}>🗑️ Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default StudentTable;
