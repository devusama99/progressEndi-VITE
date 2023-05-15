/*eslint-disable*/
import {
  Box,
  Grid,
  IconButton,
  InputBase,
  Menu,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

import ButtonCustom from "../components/ButtonCustom";
import { Add, FilterList, IosShare, Search } from "@mui/icons-material";
import ForgeViewer from "../components/ForgeViewer";

function CADViewer() {
  return (
    <Grid container className=" h-100 ">
      <Grid item xs={12} className="h-100">
        <Box className=" h-100 w-100" id="forgeViewer">
          <iframe
            src="https://techsoft3d.github.io/2D-DWG-Drawing-Viewer/index.html?instance=HotelFloorplan"
            frameborder="0"
            className="w-100 h-100"
            style={{ minHeight: "92vh" }}
          ></iframe>
        </Box>
        {/* <ForgeViewer /> */}
      </Grid>
    </Grid>
  );
}

export default CADViewer;
