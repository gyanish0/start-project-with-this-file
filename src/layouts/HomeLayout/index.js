import React from "react";
import PropTypes from "prop-types";
import TopBar from "./TopBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const HomeLayout = ({ children }) => {
  return (
    <>
      <TopBar />
      <Outlet />
      <Footer />
    </>
  );
};

HomeLayout.propTypes = {
  children: PropTypes.node,
};

export default HomeLayout;
