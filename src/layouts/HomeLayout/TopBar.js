import React, { useContext } from "react";
import {
  Container,
  Box,
  Typography,
  makeStyles,
  Button,
  Drawer,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DehazeIcon from "@material-ui/icons/Dehaze";
import Logo from "../../components/Logo";
import { UserContext } from "../../context/User";
import { AiOutlineCloseCircle } from "react-icons/ai";
const useStyles = makeStyles((theme) => ({
  navBar: {
    background: "#0f0f47",
    width: "100%",
    height: "auto",
    marginTop: "0",
    color: "#fafafa",
  },
  template: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  left: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  right: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  options: {
    padding: "15px",
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      color: "#grey",
    },
    "@media (max-width:768px)": {
      display: "none",
    },
    "&:active": {
      color: "grey",
    },
  },
  button: {
    borderRadius: "20px",

    backgroundColor: "#ff157a",
    color: "#fff",
    width: "120px",
    border: "1px solid #ff157a",
    "&:hover": {
      backgroundColor: "transparent",

      color: "#ff157a",
    },
  },
  logo: {
    width: "180px",
    height: "35px",
    "@media (max-width: 400px)": {
      width: "100px",
      height: "20px",
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  drawer: {
    display: "none",
    "@media(max-width:768px)": {
      display: "flex",
    },
  },
  menu: {
    width: "200px",
    textAlign: "center",
    marginTop: "0px",
    "& a": {
      color: "#000",
    },
  },
}));

function TopBar() {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = React.useState(false);
  const user = useContext(UserContext);
  return (
    <Box className={classes.navBar}>
      <Container>
        <Box className={classes.template}>
          <Box className={classes.left}>
            <Link to="/">
              <img
                src="../images/logo.svg"
                alt="logo"
                className={classes.logo}
              />
            </Link>
          </Box>
          <Box className={classes.right}>
            <Box className={classes.options}>
              <Typography
                variant="h6"
                to="/"
                component={Link}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Home
              </Typography>
            </Box>
            <Box className={classes.options}>
              <Typography
                variant="h6"
                style={{ textDecoration: "none", color: "#fff" }}
                to="/about"
                component={Link}
              >
                About
              </Typography>
            </Box>
            <Box className={classes.options}>
              <Typography
                variant="h6"
                style={{ textDecoration: "none", color: "#fff" }}
                to="/price"
                component={Link}
              >
                Pricing
              </Typography>
            </Box>

            <>
              {user.userLoggedIn ? (
                <Box className={classes.options}>
                  <Button
                    className={classes.button}
                    to="/profile"
                    component={Link}
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    Profile
                  </Button>
                </Box>
              ) : (
                <Box className={classes.options}>
                  <Button
                    className={classes.button}
                    to="/signup"
                    component={Link}
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    Sign Up
                  </Button>
                </Box>
              )}
            </>

            <Box className={classes.drawer}>
              <Button onClick={() => setOpenMenu(true)}>
                <DehazeIcon style={{ color: "#fff" }} />
              </Button>
              <Drawer
                anchor={"left"}
                open={openMenu}
                onClose={() => setOpenMenu(false)}
              >
                <Box style={{ display: "flex", justifyContent: "end" }}>
                  <IconButton onClick={() => setOpenMenu(false)}>
                    <AiOutlineCloseCircle />
                  </IconButton>
                </Box>
                <Box className={classes.menu}>
                  <Button
                    fullWidth
                    style={{
                      fontSize: "18px",
                      borderBottom: "1px solid grey",
                      textDecoration: "none",
                    }}
                    to="/"
                    component={Link}
                  >
                    Home
                  </Button>
                  <Button
                    fullWidth
                    style={{ fontSize: "18px", borderBottom: "1px solid grey" }}
                    to="/about"
                    component={Link}
                  >
                    About
                  </Button>
                  <Button
                    fullWidth
                    style={{ fontSize: "18px", borderBottom: "1px solid grey" }}
                    to="/price"
                    component={Link}
                  >
                    Pricing
                  </Button>
                  <Button
                    fullWidth
                    style={{
                      fontSize: "18px",
                      borderBottom: "1px solid grey",
                      textDecoration: "none",
                    }}
                    to="/login"
                    component={Link}
                  >
                    Sign In
                  </Button>
                  <Button
                    fullWidth
                    style={{ fontSize: "18px", borderBottom: "1px solid grey" }}
                    to="/signup"
                    component={Link}
                  >
                    SignUp
                  </Button>
                </Box>
              </Drawer>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default TopBar;
