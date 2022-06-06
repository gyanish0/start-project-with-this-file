import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useGlobalContext } from "../../../context/User";
const useStyles = makeStyles(() => ({
  box1: {
    height: "75vh",

    "& h2": {
      textAlign: "center",
    },
    "& h5": {
      textAlign: "center",
      fontSize: "20px",
      marginTop: "5px",
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
const Profile = () => {
  const classes = useStyles();
  const user = useGlobalContext();
  console.log(user.user);
  return (
    <Box>
      <Container>
        <div className={classes.box1}>
          <Typography variant="h2">Profile</Typography>
          <div>
            <Typography variant="h5">
              FirstName :&nbsp;
              {user.user.firstName ? user.user.firstName : "User FirstName"}
            </Typography>
            <Typography variant="h5">
              LastName :&nbsp;
              {user.user.lastName ? user.user.lastName : "User LastName"}
            </Typography>
            <Typography variant="h5">
              UserName :&nbsp;
              {user.user.username ? user.user.username : "User UserName"}
            </Typography>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default Profile;
