import React,  { useEffect, useState }  from "react";
import { CLOUDINARY_URL, HOTEL_URL } from "../Utils/Constants";

const useRestaurantsMenu = (resId) => {
  // const { resId } = useParams();
  const [resInfo, setResInfo] = useState([]);

  const fetchRestaurantsListUrl = async () => {
    const dataFetched = await fetch(HOTEL_URL + resId);
    const data = await dataFetched.json();
    setResInfo(data);
  };

  useEffect(() => {
    fetchRestaurantsListUrl();
  }, []);

  return resInfo;
};

export default useRestaurantsMenu;
