import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import apiConfig from "../config/ApiConfig";
export const UserContext = createContext();

const Context = ({ children }) => {
  const [data, setData] = useState({});
  const [quote, setQuote] = useState("");
  const [user, setUser] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const getQuote = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `https://programming-quotes-api.herokuapp.com/quotes/random`,
      });
      if (res.status === 200) {
        setQuote(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const UserDataSelf = async () => {
    try {
      const res = await axios.get(apiConfig.me, {
        headers: {
          authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
        },
      });
      if (res.status === 200) {
        setUser(res.data);
        setIsLogin(true);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    getQuote();
  }, []);

  let data1 = {
    data,
    setData,
    quote,
    user,
    isLogin,
    UserDataSelf,
  };
  return <UserContext.Provider value={data1}>{children}</UserContext.Provider>;
};

export default Context;
