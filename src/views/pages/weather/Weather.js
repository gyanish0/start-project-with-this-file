import axios from "axios";
import React, { useEffect } from "react";

const Weather = () => {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: "chandigarh" },
    headers: {
      "X-RapidAPI-Key": "3879e8726amsh28d0bdcae7d71c1p148e92jsna2f2b5a6ca87",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  const getWeather = async () => {
    try {
      const res = await axios.request(options);
      if (res.status === 200) {
        console.log(res.data, "data===");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div>
      <h1>Weather</h1>
    </div>
  );
};

export default Weather;
