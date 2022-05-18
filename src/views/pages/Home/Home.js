import React from "react";
import { Box, Container } from "@material-ui/core";
import Page from "../../../components/Page";
// import Banner from "./Banner";
import GitDetails from "../github/GitDetails";
function Home(props) {
  return (
    <Page title="GitHub | Home">
      <Container>
        <Box>
          <GitDetails />
        </Box>
      </Container>
    </Page>
  );
}

export default Home;
