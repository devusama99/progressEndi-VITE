import React, { useState } from "react";
import { Add, FilterList, Search, Cancel } from "@mui/icons-material";
import {
  Grid,
  Container,
  Typography,
  InputBase,
  Dialog,
  DialogTitle,
  DialogContent,
  MenuItem,
  DialogActions,
  IconButton,
  Stack,
  Popover,
  Divider,
} from "@mui/material";
import { Box } from "@mui/system";
import ButtonCustom from "../components/ButtonCustom";
import ProjectCard from "../components/ProjectCard";
import InputFeildCustom from "../components/InputFeildCustom";

function Projects() {
  // Modal
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

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
    <Container maxWidth="xl">
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
                Add Project
              </Typography>
              <Typography className="text-muted">
                Add Project details here
              </Typography>
            </div>
            <IconButton onClick={toggleModal}>
              <Cancel />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} className="mt-4">
            <InputFeildCustom border label="Name" />
            <InputFeildCustom border label="Country Name" />
            <InputFeildCustom border label="Address" />
            <InputFeildCustom select border label="Package">
              <MenuItem>Package 1</MenuItem>
            </InputFeildCustom>
            <InputFeildCustom select border label="Confidential">
              <MenuItem>Confidential 1</MenuItem>
            </InputFeildCustom>
            <InputFeildCustom select border label="Progress State">
              <MenuItem>Progress State 1</MenuItem>
            </InputFeildCustom>
            <InputFeildCustom border label="Collaborators" />
            <InputFeildCustom border label="Project Manger" />
            <InputFeildCustom border label="Contractor" />
            <InputFeildCustom border label="Client" />
            <InputFeildCustom border label="Class" />
            <InputFeildCustom border label="Categories" />
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
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h5" className="fw-bold">
            Current Projects
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
                placeholder="Search project by name, city ...."
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
          <div className="d-flex align-items-start justify-content-end">
            <ButtonCustom
              variant="contained"
              color="secondary"
              onClick={toggleModal}
              label={
                <Typography>
                  <Add className="me-1" /> Add Project
                </Typography>
              }
            />
          </div>
        </Grid>
        {Array(10)
          .fill("")
          .map((item, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={12 / 5}
              key={`item-${i}`}
            >
              <ProjectCard />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default Projects;
