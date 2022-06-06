import React, { useEffect } from "react";

const Stories = () => {
  let API = "https://hn.algolia.com/api/v1/search?query=html";
  const fecthApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fecthApiData(API);
  }, []);

  return (
    <div>
      <h1>Stories</h1>
    </div>
  );
};

export default Stories;
