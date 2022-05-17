import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import apiConfig from "../config/ApiConfig";

export const AuthContext = createContext();

function checkLogin() {
  const accessToken = window.sessionStorage.getItem("token");
  return accessToken ? true : false;
}

export default function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(checkLogin());
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserDate] = useState([]);
  const [update, setUpdate] = useState("");
  console.log(update, userData);
  const viewProfileHandler = async () => {
    try {
      const res = await axios.get(apiConfig.me, {
        headers: {
          authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
        },
      });
      if (res.status === 200) {
        console.log("data", res.data);
        setUserDate(res?.data?.data);
      } else {
        setUserDate();
        setIsLogin(false);
      }
      setIsLoading(false);
    } catch (error) {
      window.sessionStorage.remove("token");
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (isLogin) {
      viewProfileHandler();
    }
  }, [isLogin]);
  let data = {
    isLoading,
    isLogin,
    setUpdate,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
