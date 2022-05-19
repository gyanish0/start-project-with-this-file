import { Typography } from "@material-ui/core";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import apiConfig from "../../../config/ApiConfig";
import { UserContext } from "../../../context/User";
import "./login2.css";
const Login2 = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useContext(UserContext);

  const loginData = async () => {
    setLoading(true);
    try {
      const res = await axios.post(apiConfig.login, {
        username: userName,
        password: password,
      });
      if (res.status === 200) {
        // setQuote(res.data);
        window.sessionStorage.setItem("token", res.data.token);
        toast.success(`${userName} Login successful`);
        navigate("/");
        user.userLogIn(true);
        setLoading(false);
      }
    } catch (error) {
      console.log("Error", error);
      toast.error(
        error.message ? `UserName or Password invalid` : error.message
      );
      setLoading(false);
    }
  };
  return (
    <div>
      <section className="container">
        <div className="login-container">
          <div className="circle circle-one"></div>
          <div className="form-container">
            <img
              src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
              alt="illustration"
              className="illustration"
            />
            <h1 className="opacity">LOGIN</h1>

            <input
              type="text"
              placeholder="USERNAME"
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="password"
              placeholder="PASSWORD"
              onChange={(e) => setPassword(e.target.value)}
            />
            {loading === true ? (
              <button className="opacity" disabled={loading}>
                LOADING....
              </button>
            ) : (
              <button className="opacity" onClick={loginData}>
                SUBMIT
              </button>
            )}

            <div className="register-forget opacity">
              <Typography
                variant="h6"
                onClick={() => navigate("/signup")}
                style={{ fontSize: "18px" }}
              >
                Don’t have an account? &nbsp;
                <span style={{ color: "#0969da", cursor: "pointer" }}>
                  Sign up
                </span>
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login2;
