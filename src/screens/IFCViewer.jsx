/*eslint-disable*/
import {
  alpha,
  Box,
  Divider,
  Grid,
  IconButton,
  InputBase,
  MenuItem,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import {
  Viewer,
  WebIFCLoaderPlugin,
  NavCubePlugin,
  TreeViewPlugin,
} from "https://cdn.jsdelivr.net/npm/@xeokit/xeokit-sdk/dist/xeokit-sdk.es.min.js";

import ButtonCustom from "../components/ButtonCustom";
import {
  Add,
  Cancel,
  Close,
  FilterList,
  IosShare,
  List,
  Menu,
  Search,
} from "@mui/icons-material";
import InputFeildCustom from "../components/InputFeildCustom";

function IFCViewer() {
  const [ifcFile, setIfcFile] = useState(null);
  const FileInput = useRef();
  let viewer;

  const zoomIn = () => {
    viewer.camera.zoom(15);
  };

  useEffect(() => {
    // console.log(IFCfile);
    // if (IFCfile) {

    // const Viewer = window.Viewer;

    viewer = new Viewer({
      canvasId: "myCanvas",
      transparent: true,
    });
    viewer.camera.eye = [1, 2.855, 27.018];
    viewer.camera.look = [4.4, 3.724, 8.899];
    viewer.camera.up = [-0.018, 0.999, 0.039];

    new TreeViewPlugin(viewer, {
      containerElement: document.getElementById("treeViewContainer"),
      autoExpandDepth: 4, // Initially expand the root tree node
    });

    const webIFCLoader = new WebIFCLoaderPlugin(viewer, {
      wasmPath: "https://cdn.jsdelivr.net/npm/@xeokit/xeokit-sdk/dist/",
    });

    const sceneModel = webIFCLoader.load({
      src: "/IFC.ifc",
      edges: true,
      //   rotation: [90, 0, 0],
      scale: [0.5, 0.5, 0.5],
      origin: [1, 1, 1],
    });

    sceneModel.on("loaded", function () {
      viewer.cameraFlight.flyTo(sceneModel);
    });
    // new NavCubePlugin(viewer, {
    //   canvasId: "myNavCubeCanvas",
    //   visible: true,
    //   alignment: "bottomRight",
    // });
  }, []);

  // Filter
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const [treeviewMenu, setTreeviewMenu] = useState(false);

  return (
    <div className="h-100  " style={{ maxHeight: "73vh" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" className="fw-bold">
            IFC Viewer
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className="d-flex mb-2 mb-md-0 ">
            <Box
              className="w-100 px-2 d-flex align-items-center"
              sx={{
                boxShadow: "0px 0px 16px 2px rgba(0, 0, 0, 0.08)",
                backgroundColor: "white",
                borderRadius: "10px",
                maxWidth: "400px",
              }}
            >
              <Search color="grey" />
              <InputBase
                fullWidth
                className="ms-2"
                placeholder="Search IFC by name ...."
              />
            </Box>
            <ButtonCustom
              variant="contained"
              color="secondary"
              label={<FilterList />}
              className="ms-3"
              onClick={handleClick}
            />
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              elevation={1}
            >
              <Box className="p-3 border">
                <div
                  className="d-flex flex-column flex-md-row align-items-center justify-content-between"
                  style={{ minWidth: "300px" }}
                >
                  <Typography>Filters</Typography>
                  <IconButton onClick={handleClose}>
                    <Cancel />
                  </IconButton>
                </div>
                <Divider className="w-100 mb-2" />
                <Stack spacing={2}>
                  <div className="d-flex align-items-center">
                    <Typography sx={{ fontSize: "12px" }} className="w-50">
                      Type Of Event
                    </Typography>
                    <InputFeildCustom
                      select
                      color="secondary"
                      textDark
                      value={1}
                      border
                      className="ms-3"
                      fullWidth
                    >
                      <MenuItem value={1}>All</MenuItem>
                      <MenuItem value={2}>Filter 1</MenuItem>
                    </InputFeildCustom>
                  </div>
                  <div className="d-flex align-items-center">
                    <Typography sx={{ fontSize: "12px" }} className="w-50">
                      Category
                    </Typography>
                    <InputFeildCustom
                      select
                      color="secondary"
                      textDark
                      value={1}
                      border
                      className="ms-3"
                      fullWidth
                    >
                      <MenuItem value={1}>All</MenuItem>
                      <MenuItem value={2}>Filter 1</MenuItem>
                    </InputFeildCustom>
                  </div>
                </Stack>
              </Box>
            </Popover>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="d-flex  justify-content-end ">
            {/* <ButtonCustom
              variant="outlined"
              textDark
              className="me-2"
              color="secondary"
              label={
                <Typography className="d-flex align-items-center">
                  <IosShare fontSize="small" className="me-1" /> Import
                </Typography>
              }
            /> */}
            <input
              type="file"
              accept=".ifc"
              hidden
              ref={FileInput}
              onChange={(e) => setIfcFile(e.target.files[0])}
            />
            <ButtonCustom
              variant="contained"
              color="secondary"
              onClick={() => {
                FileInput.current.click();
              }}
              label={
                <Typography className="d-flex align-items-center">
                  <Add />
                </Typography>
              }
            />
          </div>
        </Grid>
      </Grid>
      <Grid container className="mt-3 h-100 " overflow={"hidden"}>
        <Grid item xs={12} className="h-100  ">
          <Box className=" h-100 " sx={{ position: "relative" }}>
            <canvas id="myCanvas" className="w-100 h-100 "></canvas>
            <canvas
              id="myNavCubeCanvas"
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                height: 100,
                width: 100,
                // zIndex: 200000,
              }}
            ></canvas>
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
              }}
            >
              <IconButton
                onClick={() => {
                  setTreeviewMenu(!treeviewMenu);
                }}
              >
                {treeviewMenu ? <Close /> : <List />}
              </IconButton>
            </div>
            <div
              className="IFCMenu"
              style={{
                position: "absolute",
                top: 40,
                bottom: 0,
                left: 0,
                width: treeviewMenu ? 400 : 0,
                // display: treeviewMenu ? "block" : "none",
                opacity: treeviewMenu ? 1 : 0,
                backgroundColor: "rgba(197, 198, 199, 1)",
                padding: 10,
                paddingTop: 20,
                overflow: "hidden",
                transition: "all 0.2s linear",
                borderRadius: 10,
              }}
            >
              <div
                id="treeViewContainer"
                className="h-100"
                style={{ overflow: "auto" }}
              ></div>
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default IFCViewer;
