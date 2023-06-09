import {
  Add,
  CalendarMonth,
  Cancel,
  Close,
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
  IconButton,
  DialogContent,
  Button,
  Stack,
  MenuItem,
  DialogActions,
  Popover,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import ButtonCustom from "../components/ButtonCustom";
import DocumentCard from "../components/DocumentCard";
import InputFeildCustom from "../components/InputFeildCustom";
import PDFIcon from "../assets/pdf-icon.png";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import PDF from "../assets/PDF.pdf";

function Documents() {
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

  // Modal document
  const [viewDoc, setViewDoc] = useState(false);
  const toggleViewDoc = () => {
    setViewDoc(!viewDoc);
  };
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
                Add Document
              </Typography>
              <Typography className="text-muted">
                Add Document details here
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
      <Dialog open={viewDoc} maxWidth="md" fullWidth onClose={toggleViewDoc}>
        <div className="d-flex justify-content-end">
          <IconButton onClick={toggleViewDoc}>
            <Close />
          </IconButton>
        </div>

        <Box className="w-100">
          <DocViewer
            pluginRenderers={DocViewerRenderers}
            config={{
              header: {
                disableHeader: true,
              },
            }}
            documents={[
              {
                uri: PDF,
              },
            ]}
          />
        </Box>
      </Dialog>
      <Grid container spacing={3} className="pb-4">
        <Grid item xs={12}>
          <Typography variant="h5" className="fw-bold">
            Documents
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
                placeholder="Search Documents by name ...."
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
          <div className="d-flex align-items-center justify-content-between justify-content-md-end">
            <div className="d-flex justify-content-end align-items-center me-3">
              <div className="d-flex align-items-center ms-2">
                <Typography
                  variant="caption"
                  className="me-2 d-none d-md-block"
                >
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
                label={
                  <Typography className="d-flex align-items-center">
                    <Add />
                  </Typography>
                }
              />
            </div>
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
                <DocumentCard />
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
                    <tr onClick={toggleViewDoc} style={{ cursor: "pointer" }}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src={PDFIcon} alt="pdf" width={"20px"} />
                          <Typography className="ms-2">
                            Document Name
                          </Typography>
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

export default Documents;
