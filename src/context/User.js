import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import apiConfig from "../config/ApiConfig";
export const UserContext = createContext();

function checkLogin() {
  const accessToken = window.sessionStorage.getItem("token");
  return accessToken ? true : false;
}
const Context = ({ children }) => {
  const [data, setData] = useState({});
  const [quote, setQuote] = useState("");
  const [user, setUser] = useState("");
  const [isLogin, setIsLogin] = useState(checkLogin());
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
      } else {
        setIsLogin(false);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    if (isLogin) {
      UserDataSelf();
      console.log("log", isLogin);
    }
  }, [isLogin]);
  useEffect(() => {
    getQuote();
  }, []);

  let data1 = {
    data,
    setData,
    quote,
    user,
    isLogin,
    userLoggedIn: isLogin,
    userLogIn: (type) => {
      setIsLogin(type);
    },
  };
  return <UserContext.Provider value={data1}>{children}</UserContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(UserContext);
};

export { Context as default, useGlobalContext };
