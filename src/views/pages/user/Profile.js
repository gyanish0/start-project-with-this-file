import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { UserContext } from "../../../context/User";
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
  const user = useContext(UserContext);
  console.log(user.user);
  return (
    <Box>
      <Container>
        <div className={classes.box1}>
          <Typography variant="h2">Profile</Typography>
          <div>
            <Typography variant="h5">
              FirstName : {user.user.firstName}
            </Typography>
            <Typography variant="h5">
              LastName : {user.user.lastName}
            </Typography>
            <Typography variant="h5">
              {" "}
              UserName : {user.user.username}
            </Typography>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default Profile;
