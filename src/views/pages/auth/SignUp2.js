import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import apiConfig from "../../../config/ApiConfig";
import "./login2.css";
const SignUp2 = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const signInData = async () => {
    setLoading(true);
    try {
      const res = await axios.post(apiConfig.register, {
        username: userName,
        firstName: firstName,
        lastName: lastName,
        password: password,
      });
      if (res.status === 200) {
        console.log(res);
        toast.success(`${userName} ${res.data.message}`);
        navigate("/login");
        setLoading(false);
      }
    } catch (error) {
      console.log("Error", error);
      toast.error(
        error.message ? `Userame ${userName} is already taken` : error.message
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
            <h1 className="opacity">SIGNUP</h1>
            <input
              type="text"
              placeholder="USERNAME"
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="text"
              placeholder="FIRSTNAME"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="LASTNAME"
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="password"
              placeholder="PASSWORD"
              onChange={(e) => setPassword(e.target.value)}
            />
            {loading === true ? (
              <button className="opacity" disabled={loading}>
                LOADING.....
              </button>
            ) : (
              <button className="opacity" onClick={signInData}>
                SUBMIT
              </button>
            )}

            <div className="register-forget opacity">
              <Typography
                variant="h6"
                onClick={() => navigate("/login")}
                style={{ fontSize: "18px" }}
              >
                Already have an account?{" "}
                <span style={{ color: "#0969da", cursor: "pointer" }}>
                  Log in
                </span>
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp2;
