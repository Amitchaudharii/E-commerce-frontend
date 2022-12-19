import React from "react";
import { Outlet } from "react-router-dom";
import BottomHeader from "./BottomHeader";
import TopHeader from "./TopHeader";

const NavBar = () => {
  return (
    <>
      <TopHeader />
      <BottomHeader />
      <Outlet />
    </>
  );
};

export default NavBar;
