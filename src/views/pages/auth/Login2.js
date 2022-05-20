import { FormHelperText, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import apiConfig from "../../../config/ApiConfig";
import { UserContext } from "../../../context/User";
import { Form, Formik } from "formik";
import * as yup from "yup";
import "./login2.css";
const formValidationSchema = yup.object().shape({
  userName: yup.string().required("UserName is Required"),
  password: yup.string().required("Password is Required"),
});
const formInitialSchema = {
  userName: "",
  password: "",
};
const Login2 = () => {
  const navigate = useNavigate();
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useContext(UserContext);

  const loginData = async (values) => {
    setLoading(true);
    try {
      const res = await axios.post(apiConfig.login, {
        username: values.userName,
        password: values.password,
      });
      if (res.status === 200) {
        // setQuote(res.data);
        window.sessionStorage.setItem("token", res.data.token);
        toast.success(`${values.userName} Login successful`);
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
            <Formik
              initialValues={formInitialSchema}
              validationSchema={formValidationSchema}
              onSubmit={(values) => loginData(values)}
            >
              {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                touched,
                values,
              }) => (
                <Form>
                  <input
                    type="text"
                    placeholder="USERNAME"
                    name="userName"
                    value={values.userName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(touched.userName && errors.userName)}
                  />
                  <FormHelperText style={{ color: "red" }}>
                    {touched.userName && errors.userName}
                  </FormHelperText>
                  <input
                    type="password"
                    placeholder="PASSWORD"
                    name="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(touched.password && errors.password)}
                  />
                  <FormHelperText style={{ color: "red" }}>
                    {touched.password && errors.password}
                  </FormHelperText>
                  {loading === true ? (
                    <button className="opacity" disabled={loading}>
                      LOADING....
                    </button>
                  ) : (
                    <button className="opacity" type="submit">
                      SUBMIT
                    </button>
                  )}
                </Form>
              )}
            </Formik>
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
