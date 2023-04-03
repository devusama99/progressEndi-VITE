import {
  Add,
  CalendarMonth,
  Cancel,
  FilterList,
  GridView,
  IosShare,
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
} from "@mui/material";
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import ButtonCustom from "../components/ButtonCustom";
import ReportsCards from "../components/ReportsCard";
import PDFIcon from "../assets/pdf-icon.png";
import InputFeildCustom from "../components/InputFeildCustom";

function Reports() {
  const [viewType, setViewType] = useState("right");

  // Filter
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
      <Grid container spacing={3} className="pb-4">
        <Grid item xs={6}>
          <Typography variant="h5" className="fw-bold">
            Reports
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <div className="d-flex justify-content-end align-items-center">
            <div className="d-flex align-items-center ms-2">
              <Typography variant="caption" className="me-2">
                View Type
              </Typography>
              <ToggleButtonGroup
                size="small"
                value={viewType}
                exclusive
                onChange={(e, val) => setViewType(val)}
              >
                <ToggleButton value="left" key="left">
                  <Menu />
                </ToggleButton>
                <ToggleButton value="right" key="left">
                  <GridView />
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
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
                placeholder="Search report by name ...."
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
            <ButtonCustom
              variant="outlined"
              textDark
              className="me-2"
              color="secondary"
              label={
                <Typography className="d-flex align-items-center">
                  <IosShare fontSize="small" className="me-1" /> Export
                </Typography>
              }
            />
            <ButtonCustom
              variant="contained"
              color="secondary"
              label={
                <Typography className="d-flex align-items-center">
                  <Add className="me-1" /> Add Report
                </Typography>
              }
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel control={<Checkbox />} label="Select All" />
        </Grid>
      </Grid>
      {/* <Box sx={{ maxHeight: "61vh", overflowY: "auto" }} className="pb-3"> */}
      <Grid container spacing={3} className="pb-3">
        {viewType === "right" ? (
          Array(8)
            .fill(0)
            .map((item, i) => (
              <Grid key={"item" + i} item xs={12} sm={6} md={4} lg={3} xl={2}>
                <ReportsCards />
              </Grid>
            ))
        ) : (
          <Grid item xs={12}>
            <Table responsive>
              <thead>
                <tr>
                  <th style={{ minWidth: "350px" }}> </th>
                  <th style={{ minWidth: "100px" }}>Name</th>
                  <th style={{ minWidth: "150px" }}>Service</th>
                  <th style={{ minWidth: "100px" }}>Package</th>
                  <th style={{ minWidth: "150px" }}>Collaborators</th>
                  <th style={{ minWidth: "100px" }}>Due Date</th>
                </tr>
              </thead>
              <tbody>
                {Array(8)
                  .fill(0)
                  .map((item, i) => (
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src={PDFIcon} alt="pdf" width={"20px"} />
                          <Typography className="ms-2">Title Name</Typography>
                        </div>
                      </td>
                      <td>
                        <Typography>Name</Typography>
                      </td>
                      <td>
                        <Box className="d-flex align-items-center">
                          <Typography>Service</Typography>
                        </Box>
                      </td>
                      <td>
                        <Typography>Package</Typography>
                      </td>
                      <td>
                        <div className="d-flex">
                          <AvatarGroup
                            max={4}
                            componentsProps={{
                              additionalAvatar: {
                                sx: {
                                  height: 30,
                                  width: 30,
                                  fontSize: "12px",
                                },
                              },
                            }}
                          >
                            <Avatar
                              sx={{ height: 30, width: 30 }}
                              src="https://xsgames.co/randomusers/assets/avatars/male/76.jpg"
                            ></Avatar>
                            <Avatar
                              sx={{ height: 30, width: 30 }}
                              src="https://xsgames.co/randomusers/assets/avatars/male/76.jpg"
                            ></Avatar>
                            <Avatar
                              sx={{ height: 30, width: 30 }}
                              src="https://xsgames.co/randomusers/assets/avatars/male/76.jpg"
                            ></Avatar>
                            <Avatar
                              sx={{ height: 30, width: 30 }}
                              src="https://xsgames.co/randomusers/assets/avatars/male/76.jpg"
                            ></Avatar>
                            <Avatar
                              sx={{ height: 30, width: 30 }}
                              src="https://xsgames.co/randomusers/assets/avatars/male/76.jpg"
                            ></Avatar>
                            <Avatar
                              sx={{ height: 30, width: 30 }}
                              src="https://xsgames.co/randomusers/assets/avatars/male/76.jpg"
                            ></Avatar>
                          </AvatarGroup>
                        </div>
                      </td>
                      <td>
                        <Typography className="d-flex align-items-center">
                          21 June
                          <CalendarMonth
                            className="ms-2"
                            color="grey"
                            fontSize="small"
                          />
                        </Typography>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Grid>
        )}
      </Grid>
      {/* </Box> */}
    </div>
  );
}

export default Reports;
