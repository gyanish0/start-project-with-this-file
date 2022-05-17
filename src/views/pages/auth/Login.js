import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ApiConfig from "../../../config/ApiConfig";
import { UserContext } from "../../../context/User";
const useStyles = makeStyles(() => ({
  box1: {
    height: "75vh",

    "& h2": {
      textAlign: "center",
    },
    "& h6": {
      textAlign: "center",
      fontSize: "15px",
      marginTop: "10px",
      cursor: "pointer",
    },
  },
  box2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
    "& input": {},
  },
  btnBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "15px",
  },
}));
const Login = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const auth = useContext(UserContext);
  console.log(auth);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [quote, setQuote] = useState("");
  console.log(quote);
  const loginData = async () => {
    try {
      const res = await axios.post(ApiConfig.login, {
        username: userName,
        password: password,
      });
      if (res.status === 200) {
        setQuote(res.data);
        window.sessionStorage.setItem("token", res.data.token);
        toast.success(`${userName} Login successful`);
        navigate("/");
        auth.setData(res.data.token);
      }
    } catch (error) {
      console.log("Error", error);
      toast.error(
        error.message ? `UserName or Password invalid` : error.message
      );
    }
  };
  return (
    <Box>
      <Container>
        <div className={classes.box1}>
          <Typography variant="h2">Login</Typography>
          <div className={classes.box2}>
            <div>
              <TextField
                variant="outlined"
                style={{ paddingBottom: "15px" }}
                placeholder="Username"
                onChange={(e) => setUserName(e.target.value)}
              />
              <br />
              <TextField
                variant="outlined"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
              <br />
              <div className={classes.btnBox}>
                <Button variant="outlined" onClick={loginData}>
                  Login
                </Button>
              </div>
            </div>
          </div>
          <Typography variant="h6" onClick={() => navigate("/signup")}>
            Don’t have an account? Sign up
          </Typography>
        </div>
      </Container>
    </Box>
  );
};

export default Login;
