import React, { useEffect } from "react";
import { useGetTodosQuery } from "../../../redux/ApiCall";
const Stories = () => {
  // let API = "https://hn.algolia.com/api/v1/search?query=html";
  // const fecthApiData = async (url) => {
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   fecthApiData(API);
  // }, []);
  const { data, error, isLoading } = useGetTodosQuery();
  console.log("datadata", data);
  console.log("errorerror", error);
  console.log("isLoadingisLoading", isLoading);
  return (
    <div>
      <h1>Stories</h1>
    </div>
  );
};

export default Stories;
