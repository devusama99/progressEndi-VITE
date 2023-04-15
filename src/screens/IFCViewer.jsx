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

  const [treeviewMenu, setTreeviewMenu] = useState(false);

  return (
    <div className="h-100  " style={{ maxHeight: "85vh" }}>
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
                display: treeviewMenu ? "block" : "none",
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
