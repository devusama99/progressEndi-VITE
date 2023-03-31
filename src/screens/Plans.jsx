import {
  Add,
  CalendarMonth,
  Cancel,
  FilterList,
  GridView,
  InsertDriveFile,
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
  AvatarGroup,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Stack,
  MenuItem,
  DialogActions,
  IconButton,
  Popover,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import ButtonCustom from "../components/ButtonCustom";
import InputFeildCustom from "../components/InputFeildCustom";
import PlanCard from "../components/PlanCard";

function Plans() {
  const [viewType, setViewType] = useState("right");

  // Modal
  const [showModal, setShowModal] = useState(false);
  const [planFile, setPlanFile] = useState(null);
  const toggleModal = () => setShowModal(!showModal);
  const dragOver = (e) => {
    e.preventDefault();
  };
  const dropFile = (e) => {
    e.preventDefault();
    setPlanFile(e.dataTransfer.files[0]);
  };

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
    <div className="h-100">
      <Dialog
        open={showModal}
        maxWidth="sm"
        fullWidth={true}
        onClose={toggleModal}
      >
        <DialogTitle>
          <Box className="d-flex align-items-start justify-content-between">
            <div>
              <Typography variant="h6" className="fw-bold">
                Add Plan
              </Typography>
              <Typography className="text-muted">
                Add plan details here
              </Typography>
            </div>
            <IconButton onClick={toggleModal}>
              <Cancel />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box
            className="d-flex flex-column align-items-center justify-content-center"
            sx={{ minHeight: "150px" }}
            onDragOver={dragOver}
            onDrop={dropFile}
            id="dropArea"
          >
            <InsertDriveFile color="grey" />
            <Typography variant="caption">
              {planFile ? planFile.name : "Drop Your File Here"}
            </Typography>
          </Box>
          <div className="d-flex justify-content-end my-2">
            <Button
              disableElevation
              variant="contained"
              color="grey"
              className="text-capitalize text-light"
            >
              <KeyboardTab className="me-1" />
              <Typography>Import</Typography>
            </Button>
          </div>
          <Stack spacing={2} className="mt-4">
            <InputFeildCustom label="Title" border />
            <InputFeildCustom select border label="Enterprise">
              <MenuItem>Enterprise 1</MenuItem>
            </InputFeildCustom>
            <InputFeildCustom select border label="Project">
              <MenuItem>Project 1</MenuItem>
            </InputFeildCustom>
            <InputFeildCustom select border label="Package">
              <MenuItem>Package 1</MenuItem>
            </InputFeildCustom>
            <InputFeildCustom select border label="Service">
              <MenuItem>Service 1</MenuItem>
            </InputFeildCustom>
          </Stack>
        </DialogContent>
        <DialogActions>
          <ButtonCustom
            label="cancel"
            textDark
            variant="outlined"
            color="secondary"
            sx={{ width: "100px" }}
            onClick={() => {
              toggleModal();
              setPlanFile(null);
            }}
          />
          <ButtonCustom
            label="Add"
            variant="contained"
            color="secondary"
            sx={{ width: "100px" }}
          />
        </DialogActions>
      </Dialog>
      <Grid container spacing={3} className="pb-4">
        <Grid item xs={6}>
          <Typography variant="h5" className="fw-bold">
            Plans
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <div className="d-flex justify-content-end align-items-center">
            <div className="d-flex align-items-center ms-2">
              <Typography variant="caption" className="me-2">
                View Type
              </Typography>
              <ToggleButtonGroup
                exclusive
                size="small"
                value={viewType}
                onChange={(e, val) => setViewType(val)}
              >
                <ToggleButton value="left" key="left">
                  <Menu />
                </ToggleButton>
                <ToggleButton value="right" key="right">
                  <GridView />
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="d-flex mb-2 mb-md-0 ">
            <Box
              className="w-100 p-2 d-flex align-items-center"
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
                placeholder="Search Plans by name ..."
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
              onClick={toggleModal}
              label={
                <Typography className="d-flex align-items-center">
                  <Add className="me-1" /> Add Plan
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
      <Grid container spacing={3} className="pb-4">
        {viewType === "right" ? (
          Array(10)
            .fill(0)
            .map((item, i) => (
              <Grid key={"item" + i} item xs={12} sm={6} md={4} lg={3} xl={2}>
                <PlanCard />
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
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Putnam_House_-_floor_plans.jpg/1200px-Putnam_House_-_floor_plans.jpg"
                            alt="plan"
                            height={"50"}
                            width={"70"}
                          />
                          <Typography className="ms-2">Plan Name</Typography>
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

export default Plans;
