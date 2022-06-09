import { Button } from "@material-ui/core";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
// import Pagination from "./Pagination";
// import Search from "./Search";
// import Stories from "./Stories";
const clickGandler = () => {
  toast.success("Successfully toasted!");
};
const currentDate = new Date();
const monthNumber = currentDate.getMonth();
console.log(monthNumber);
const m = [
  {
    id: 1,
    name: "January",
  },
  {
    id: 2,
    name: "February",
  },
  {
    id: 3,
    name: "March",
  },
  {
    id: 4,
    name: "April",
  },
  {
    id: 5,
    name: "May",
  },
  {
    id: 6,
    name: "June",
  },
  {
    id: 7,
    name: "July",
  },
  {
    id: 8,
    name: "August",
  },
  {
    id: 9,
    name: "September",
  },
  {
    id: 10,
    name: "October",
  },
  {
    id: 11,
    name: "November",
  },
  {
    id: 12,
    name: "December",
  },
];
var moo = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var cur = new Date().getMonth();

var sorted = [...m.slice(cur), ...m.slice(0, cur)];

console.log(sorted);
const News = () => {
  return (
    <div>
      <div></div>
      <h1>Form</h1>
      <Button onClick={clickGandler} variant="outlined">
        Click
      </Button>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {/* {months.map((data) => (
          <div
            key={data.id}
            style={{
              color: cur === data.name ? "red" : "#000",
              display: "flex",
            }}
          >
            <h4>{data.name}</h4>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default News;
