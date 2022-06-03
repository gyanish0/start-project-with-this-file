import React from "react";
import Pagination from "./Pagination";
import Search from "./Search";
import Stories from "./Stories";

const News = () => {
  return (
    <div>
      <h1>News</h1>
      <Search />
      <Pagination />
      <Stories />
    </div>
  );
};

export default News;
