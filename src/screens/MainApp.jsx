import Navbar from "../components/Navbar";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/system";

function MainApp() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    setNavbarHeight(document.querySelector("#navbar").offsetHeight);
  }, []);
  return (
    <div>
      <Navbar />
      <Box sx={{ mt: navbarHeight + 20 + "px" }}>
        <Outlet />
      </Box>
    </div>
  );
}

export default MainApp;
