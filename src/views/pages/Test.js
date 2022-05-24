import { Typography } from "@material-ui/core";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { calculateTimeLeft } from "../../utils";
const endTime = 1654783690;

const Test = () => {
  const [timeLeft, setTimeLeft] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(new Date(parseInt(endTime) * 1000)));
    }, 1000);
    return () => clearTimeout(timer);
  });

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://itunes.apple.com/in/rss/topalbums/limit=100/json"
      );
      console.log(res.data.feed.entry);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h4>Demo</h4>
      {parseFloat(endTime) < moment().unix() ? (
        <Typography variant="h6">Expired</Typography>
      ) : (
        <>
          <Typography variant="h6">
            {" "}
            {timeLeft.days ? timeLeft.days && timeLeft.days : "0"}
            d:
            {timeLeft.hours ? timeLeft.hours && timeLeft.hours : "0"}
            h:
            {timeLeft.minutes ? timeLeft.minutes && timeLeft.minutes : "0"}m :
            {timeLeft.seconds ? timeLeft.seconds && timeLeft.seconds : "0"}s
          </Typography>
          <img
            src="images/Emoji.png"
            alt=""
            width="100%"
            style={{
              width: "100%",
              maxWidth: "12px",
              paddingLeft: "4px",
            }}
          />
        </>
      )}
    </div>
  );
};

export default Test;
