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
    <div className="h-100">
      <Grid container className="mt-3 h-100 " sx={{ minHeight: "75vh" }}>
        <Grid item xs={12} className="h-100  ">
          <Box className=" h-100 w-100" id="forgeViewer">
            <iframe
              src="https://techsoft3d.github.io/2D-DWG-Drawing-Viewer/index.html?instance=HotelFloorplan"
              frameborder="0"
              className="w-100 h-100"
            ></iframe>
          </Box>
          {/* <ForgeViewer /> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default CADViewer;
