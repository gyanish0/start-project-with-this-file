import React from "react";
import PropTypes from "prop-types";
import TopBar from "./TopBar";
import Footer from "./Footer";

const HomeLayout = ({ children }) => {
  return (
    <>
      <TopBar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

HomeLayout.propTypes = {
  children: PropTypes.node,
};

export default HomeLayout;
