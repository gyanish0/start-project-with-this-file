import {
  Box,
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ApiConfig from "../../../config/ApiConfig";
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
const SignUp = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const signInData = async () => {
    try {
      const res = await axios.post(ApiConfig.register, {
        username: userName,
        firstName: firstName,
        lastName: lastName,
        password: password,
      });
      if (res.status === 200) {
        console.log(res);
        toast.success(`${userName} ${res.data.message}`);
        navigate("/login");
      }
    } catch (error) {
      console.log("Error", error);
      toast.error(
        error.message ? `Userame ${userName} is already taken` : error.message
      );
    }
  };
  return (
    <Box>
      <Container>
        <div className={classes.box1}>
          <Typography variant="h2">Sign in</Typography>
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
                style={{ paddingBottom: "15px" }}
                placeholder="FirstName"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <br />
              <TextField
                variant="outlined"
                style={{ paddingBottom: "15px" }}
                placeholder="LastName"
                onChange={(e) => setLastName(e.target.value)}
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
                <Button variant="outlined" onClick={signInData}>
                  Sign in
                </Button>
              </div>
            </div>
          </div>
          <Typography variant="h6" onClick={() => navigate("/")}>
            Already have an account? Log in
          </Typography>
        </div>
      </Container>
    </Box>
  );
};

export default SignUp;
