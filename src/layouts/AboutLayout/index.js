import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../HomeLayout/TopBar";

const AboutLayout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
};

export default AboutLayout;
