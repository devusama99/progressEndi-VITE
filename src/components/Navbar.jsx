import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AccountMenu from "./AccountMenu";
import logo from "../assets/DrawerLogo.png";

function Navbar() {
  return (
    <AppBar color="primary" elevation={0} id="navbar">
      <Toolbar>
        <div className="d-flex justify-content-between align-items-center w-100">
          <Link to={"/app"}>
            <img src={logo} alt="logo" height={"100%"} />
          </Link>
          <AccountMenu />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
