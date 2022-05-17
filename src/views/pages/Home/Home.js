import React from "react";
import { Box } from "@material-ui/core";
import Page from "../../../components/Page";
import Banner from "./Banner";
function Home(props) {
  return (
    <Page title="Home">
      <Box>
        <Banner />
      </Box>
    </Page>
  );
}

export default Home;
