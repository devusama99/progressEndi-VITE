import { Add, Cancel, FilterList, IosShare, Search } from "@mui/icons-material";
import {
  Grid,
  Typography,
  Box,
  InputBase,
  Avatar,
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  Stack,
  MenuItem,
  DialogActions,
  Popover,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import ButtonCustom from "../components/ButtonCustom";
import CollabratorsActions from "../components/CollabratorsActions";
import InputFeildCustom from "../components/InputFeildCustom";

function Collabrators() {
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
                Add User
              </Typography>
              <Typography className="text-muted">
                Add User details here
              </Typography>
            </div>
            <IconButton onClick={toggleModal}>
              <Cancel />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} className="mt-4">
            <InputFeildCustom label="Name" border />
            <InputFeildCustom label="Email" border />
            <InputFeildCustom label="Phone No" border />
            <InputFeildCustom select border label="Enterprise">
              <MenuItem>Enterprise 1</MenuItem>
            </InputFeildCustom>
            <InputFeildCustom select border label="Service">
              <MenuItem>Service 1</MenuItem>
            </InputFeildCustom>
            <InputFeildCustom select border label="Role">
              <MenuItem>Role 1</MenuItem>
            </InputFeildCustom>
            <InputFeildCustom select border label="Function">
              <MenuItem>Functon 1</MenuItem>
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
            Collabrators
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
                placeholder="Search Collabrator by name ..."
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
                  <Add className="me-1" /> Add User
                </Typography>
              }
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <Table responsive>
            <thead>
              <tr>
                <th style={{ minWidth: "200px" }}>Name</th>
                <th style={{ minWidth: "150px" }}>Email</th>
                <th style={{ minWidth: "150px" }}>Function</th>
                <th style={{ minWidth: "150px" }}>Role</th>
                <th style={{ minWidth: "150px" }}>Service</th>
                <th style={{ minWidth: "150px" }}>Phone No.</th>
                <th style={{ minWidth: "150px" }}>Enterprise</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array(9)
                .fill(0)
                .map((_, i) => (
                  <tr key={"table-row-" + i}>
                    <td>
                      <div className="d-flex align-items-center">
                        <Avatar
                          sx={{ width: "35px", height: "35px" }}
                          src="https://us.123rf.com/450wm/lacheev/lacheev2109/lacheev210900016/173818773-portrait-of-happy-clever-intelligent-young-man-in-glasses-looking-at-camera-and-smiling-headshot-of.jpg?ver=6"
                        />
                        <Typography className="ms-1">Salman Khalid</Typography>
                      </div>
                    </td>
                    <td>
                      <Typography className="text-muted">
                        hr@hashstack.com
                      </Typography>
                    </td>
                    <td>
                      <Typography className="text-muted">Freelancer</Typography>
                    </td>
                    <td>
                      <Typography className="text-muted">Admin</Typography>
                    </td>
                    <td>
                      <Typography className="text-muted">Production</Typography>
                    </td>
                    <td>
                      <Typography className="text-muted">
                        +9230012345678
                      </Typography>
                    </td>
                    <td>
                      <Typography className="text-muted">HashStack</Typography>
                    </td>
                    <td>
                      <CollabratorsActions />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Grid>
      </Grid>
    </div>
  );
}

export default Collabrators;
