import React from "react";
import NavMenu from "./NavMenu";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="flex flex-col w-full min-h-full  justify-center items-center">
        <NavMenu />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
