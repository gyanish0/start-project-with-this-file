import React from "react";
import {
  Container,
  Box,
  Typography,
  makeStyles,
  Grid,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";
// import { FacebookIcon, TwitterIcon } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  footer: {
    height: "auto",
    background: "#15143e",
    color: "#fff",
    paddingTop: "50px",
    position: "relative",
  },
  item: {
    fontSize: "14px",
    textDecoration: "none",
  },
  grid: {
    // textAlign: "left",
  },
  footerTopImg: {
    width: "100%",
    height: "20px",
    position: "absolute",
    top: "-18px",
  },
  icon: {
    paddingRight: "10px",
    cursor: "pointer",
    paddingTop: "10px",
    "&:hover": {
      color: "grey",
    },
  },
  ft: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  deco: {
    textDecoration: "none",
    color: "#fff",
  },
}));
function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Container className={classes.ft}>
        <Grid container spacing={0} className={classes.grid}>
          <Grid item xl={12} sm={3} md={3} lg={3}>
            <Box>
              <Typography>Follow Us</Typography>
              <Box className={classes.socialIcons}>
                <Link to="#" className={classes.deco}>
                  <FacebookIcon className={classes.icon} />
                </Link>
                <Link to="#" className={classes.deco}>
                  <TwitterIcon className={classes.icon} />
                </Link>
                <Link to="#" className={classes.deco}>
                  <InstagramIcon className={classes.icon} />
                </Link>
                <Link to="#" className={classes.deco}>
                  <LinkedInIcon className={classes.icon} />
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xl={12} sm={3} md={3} lg={3}>
            <Typography>Company & Team</Typography>
            <Box className={classes.item}>
              <ul>
                <Link to="/about" className={classes.deco}>
                  <li>About</li>
                </Link>
                <Link to="/news" className={classes.deco}>
                  <li>News & Blog</li>
                </Link>
                <Link to="/press" className={classes.deco}>
                  <li>Press about us</li>
                </Link>
                <Link to="/ourPartners" className={classes.deco}>
                  <li>Our partners</li>
                </Link>
              </ul>
            </Box>
          </Grid>
          <Grid item xl={12} sm={3} md={3} lg={3}>
            <Box>
              <Typography>Help & Support</Typography>
              <Box className={classes.item}>
                <ul>
                  <Link to="/support" className={classes.deco}>
                    <li>Support</li>
                  </Link>
                  <Link to="/faq" className={classes.deco}>
                    <li>FAQ</li>
                  </Link>
                  <Link to="/supportedCurrencies" className={classes.deco}>
                    <li>Supported Exchanges</li>
                  </Link>
                </ul>
              </Box>
            </Box>
          </Grid>
          <Grid item xl={12} sm={3} md={3} lg={3}>
            <Typography>Tools</Typography>
            <Box className={classes.item}>
              <ul>
                <Link to="/" className={classes.deco}>
                  <li>Exchange widget</li>
                </Link>
                <Link to="/" className={classes.deco}>
                  <li>Payment button</li>
                </Link>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
