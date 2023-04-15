import {
  Add,
  CalendarMonth,
  Cancel,
  FilterList,
  GridView,
  IosShare,
  KeyboardTab,
  Menu,
  Search,
} from "@mui/icons-material";
import {
  Grid,
  Typography,
  Box,
  InputBase,
  ToggleButtonGroup,
  ToggleButton,
  FormControlLabel,
  Checkbox,
  Avatar,
  AvatarGroup,
  Popover,
  Divider,
  IconButton,
  Stack,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  DialogActions,
  RadioGroup,
  Radio,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { Table } from "react-bootstrap";
import ButtonCustom from "../components/ButtonCustom";

import PDFIcon from "../assets/pdf-icon.png";
import InputFeildCustom from "../components/InputFeildCustom";
import IFCCard from "../components/IFCCard";

function IFCfiles() {
  const [ifcFile, setIfcFile] = useState(null);
  const FileInput = useRef();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  return (
    <div className="h-100 ">
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
        {Array(8)
          .fill(0)
          .map((item, i) => (
            <Grid key={"item" + i} item xs={12} sm={6} md={4} lg={3} xl={2}>
              <IFCCard />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default IFCfiles;
