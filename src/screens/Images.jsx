import {
  Add,
  Cancel,
  FilterList,
  InsertDriveFile,
  IosShare,
  KeyboardTab,
  Search,
} from "@mui/icons-material";
import {
  Grid,
  Typography,
  Box,
  InputBase,
  FormControlLabel,
  Checkbox,
  DialogActions,
  MenuItem,
  Stack,
  Button,
  DialogContent,
  DialogTitle,
  Dialog,
  IconButton,
  Divider,
  Popover,
} from "@mui/material";
import React, { useState } from "react";
import ButtonCustom from "../components/ButtonCustom";
import ImagesCard from "../components/ImagesCard";
import InputFeildCustom from "../components/InputFeildCustom";

function Images() {
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
    <div className="h-100 ">
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
                Add Image
              </Typography>
              <Typography className="text-muted">
                Add image details here
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
        <Grid item xs={12}>
          <Typography variant="h5" className="fw-bold">
            Images
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
                placeholder="Search images by name ...."
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
                  <IosShare fontSize="small" />
                </Typography>
              }
            />
            <ButtonCustom
              variant="contained"
              color="secondary"
              onClick={toggleModal}
              label={
                <Typography className="d-flex align-items-center">
                  <Add />
                </Typography>
              }
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel control={<Checkbox />} label="Select All" />
        </Grid>
        {Array(10)
          .fill(0)
          .map((item, i) => (
            <Grid key={"item" + i} item xs={12} sm={6} md={4} lg={3} xl={2}>
              <ImagesCard />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default Images;
