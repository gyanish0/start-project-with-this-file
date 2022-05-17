import React, { useContext } from "react";
import { Grid, Box, Container, makeStyles, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/User";
const useStyles = makeStyles((theme) => ({
  bannerBox: {
    position: "relative",
    backgroundImage: "url(./images/banner/bg.png)",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "70px 0px 50px",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
  },
}));

export default function BestSeller() {
  const classes = useStyles();
  const { quote } = useContext(UserContext);
  console.log(quote);
  return (
    <Box className={classes.bannerBox}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} className={classes.gridflex}>
            <Box className="textbox">
              <Box mt={3}>
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  target="_blank"
                ></Button>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  component={Link}
                  to="/mint"
                ></Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
