import { Cancel, FilterList, Search } from "@mui/icons-material";
import {
  Grid,
  Typography,
  Box,
  InputBase,
  MenuItem,
  Popover,
  IconButton,
  Divider,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import ButtonCustom from "../components/ButtonCustom";
import InputFeildCustom from "../components/InputFeildCustom";
import SelectCustom from "../components/SelectCustom";

function TimeAndCost() {
  const [view, setView] = useState(1);

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
        <Grid item xs={12}>
          <div className="d-flex align-items-center justify-content-between">
            <Typography variant="h5" className="fw-bold">
              {view === 1
                ? "Project Cost Sheet"
                : view === 2
                ? "Project Time Sheet"
                : view === 3
                ? "Cost Sheet Per Worker"
                : "Time Sheet Per Worker"}
            </Typography>
            <SelectCustom
              value={view}
              sx={{ width: "210px" }}
              onChange={(e) => setView(e.target.value)}
            >
              <MenuItem value={1}>Cost sheet</MenuItem>
              <MenuItem value={2}>Time sheet</MenuItem>
              <MenuItem value={3}>Cost sheet per worker</MenuItem>
              <MenuItem value={4}>Time sheet per worker</MenuItem>
            </SelectCustom>
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
              <InputBase fullWidth className="ms-2" placeholder="Search ...." />
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
        {/* <Grid item xs={12} md={6}>
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
                  <Add className="me-1" /> Add User
                </Typography>
              }
            />
          </div>
        </Grid> */}
        {view === 1 ? (
          <Grid item xs={12} className="mt-3">
            <Table responsive className="mt-0">
              <thead>
                <tr>
                  <th style={{ minWidth: "200px" }}>Event Name</th>
                  <th style={{ minWidth: "150px" }}>Event ID</th>
                  <th style={{ minWidth: "150px", textAlign: "center" }}>
                    Initial Cost
                  </th>
                  <th style={{ minWidth: "150px", textAlign: "center" }}>
                    Actual Cost
                  </th>
                  <th style={{ minWidth: "150px", textAlign: "center" }}>
                    Balance Cost
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array(7)
                  .fill(0)
                  .map((_, i) => (
                    <tr key={"table-1-row-" + i} style={{ height: "50px" }}>
                      <td>
                        <Typography>Roof Problem</Typography>
                      </td>
                      <td>
                        <Typography className="text-muted">
                          848723848732
                        </Typography>
                      </td>
                      <td>
                        <Typography className="text-muted text-center">
                          $456
                        </Typography>
                      </td>
                      <td>
                        <Typography className="text-muted text-center">
                          $763
                        </Typography>
                      </td>
                      <td>
                        <Typography className="text-muted text-center">
                          $25678
                        </Typography>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Grid>
        ) : view === 2 ? (
          <Grid item xs={12} className="mt-3">
            <Table responsive className="mt-0">
              <thead>
                <tr>
                  <th style={{ minWidth: "150px" }}>Event Name</th>
                  <th style={{ minWidth: "150px" }}>Event ID</th>
                  <th style={{ minWidth: "150px", textAlign: "center" }}>
                    Initial Start Date
                  </th>
                  <th style={{ minWidth: "150px", textAlign: "center" }}>
                    Initial Finish Date
                  </th>
                  <th style={{ minWidth: "150px", textAlign: "center" }}>
                    Initial Duration
                  </th>
                  <th style={{ minWidth: "150px", textAlign: "center" }}>
                    Actual Start Date
                  </th>
                  <th style={{ minWidth: "150px", textAlign: "center" }}>
                    Actual Finish Date
                  </th>
                  <th style={{ minWidth: "150px", textAlign: "center" }}>
                    Actual Duration
                  </th>
                  <th style={{ minWidth: "150px", textAlign: "center" }}>
                    Date Changes
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array(7)
                  .fill(0)
                  .map((_, i) => (
                    <tr key={"table-2-row-" + i} style={{ height: "50px" }}>
                      <td>
                        <Typography>Roof Problem</Typography>
                      </td>
                      <td>
                        <Typography className="text-muted">
                          848723848732
                        </Typography>
                      </td>
                      <td>
                        <Typography className="text-muted text-center">
                          01/07/2020
                        </Typography>
                      </td>
                      <td>
                        <Typography className="text-muted text-center">
                          01/09/2020
                        </Typography>
                      </td>
                      <td>
                        <Typography className="text-muted text-center">
                          2 Months
                        </Typography>
                      </td>
                      <td>
                        <Typography className="text-muted text-center">
                          01/07/2020
                        </Typography>
                      </td>
                      <td>
                        <Typography className="text-muted text-center">
                          01/09/2020
                        </Typography>
                      </td>
                      <td>
                        <Typography className="text-muted text-center">
                          2 Months
                        </Typography>
                      </td>
                      <td>
                        <Typography className="text-muted text-center">
                          2 Times
                        </Typography>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Grid>
        ) : view === 3 ? (
          <Grid item xs={12} className="mt-3">
            <Table responsive className="mt-0">
              <thead>
                <tr>
                  <th style={{ minWidth: "200px" }}>Worker Name</th>
                  <th style={{ minWidth: "150px" }}>Worker ID</th>
                  <th style={{ minWidth: "150px", textAlign: "center" }}>
                    Initial Cost
                  </th>
                  <th style={{ minWidth: "150px", textAlign: "center" }}>
                    Actual Cost
                  </th>
                  <th style={{ minWidth: "150px", textAlign: "center" }}>
                    Balance Cost
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array(7)
                  .fill(0)
                  .map((_, i) => (
                    <tr key={"table-3-row-" + i} style={{ height: "50px" }}>
                      <td>
                        <Typography>Salman Khalid</Typography>
                      </td>
                      <td>
                        <Typography className="text-muted">
                          848723848732
                        </Typography>
                      </td>
                      <td>
                        <Typography className="text-muted text-center">
                          $456
                        </Typography>
                      </td>
                      <td>
                        <Typography className="text-muted text-center">
                          $763
                        </Typography>
                      </td>
                      <td>
                        <Typography className="text-muted text-center">
                          $25678
                        </Typography>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Grid>
        ) : (
          <Grid item xs={12} className="mt-3">
            <Table responsive className="mt-0">
              <thead>
                <tr>
                  <th style={{ minWidth: "150px" }}>Worker Name</th>
                  <th style={{ minWidth: "150px" }}>Worker ID</th>
                  <th style={{ minWidth: "150px", textAlign: "center" }}>
                    Initial Start Date
                  </th>
                  <th style={{ minWidth: "150px", textAlign: "center" }}>
                    Initial Finish Date
                  </th>
                  <th style={{ minWidth: "150px", textAlign: "center" }}>
                    Initial Duration
                  </th>
                  <th style={{ minWidth: "150px", textAlign: "center" }}>
                    Actual Start Date
                  </th>
                  <th style={{ minWidth: "150px", textAlign: "center" }}>
                    Actual Finish Date
                  </th>
                  <th style={{ minWidth: "150px", textAlign: "center" }}>
                    Actual Duration
                  </th>
                  <th style={{ minWidth: "150px", textAlign: "center" }}>
                    Date Changes
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array(7)
                  .fill(0)
                  .map((_, i) => (
                    <tr key={"table-4-row-" + i} style={{ height: "50px" }}>
                      <td>
                        <Typography>Salman Khalid</Typography>
                      </td>
                      <td>
                        <Typography className="text-muted">
                          848723848732
                        </Typography>
                      </td>
                      <td>
                        <Typography className="text-muted text-center">
                          01/07/2020
                        </Typography>
                      </td>
                      <td>
                        <Typography className="text-muted text-center">
                          01/09/2020
                        </Typography>
                      </td>
                      <td>
                        <Typography className="text-muted text-center">
                          2 Months
                        </Typography>
                      </td>
                      <td>
                        <Typography className="text-muted text-center">
                          01/07/2020
                        </Typography>
                      </td>
                      <td>
                        <Typography className="text-muted text-center">
                          01/09/2020
                        </Typography>
                      </td>
                      <td>
                        <Typography className="text-muted text-center">
                          2 Months
                        </Typography>
                      </td>
                      <td>
                        <Typography className="text-muted text-center">
                          2 Times
                        </Typography>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Grid>
        )}

        <Grid
          item
          xs={12}
          className={
            view === 1
              ? "d-flex justify-content-between align-items-center"
              : ""
          }
        >
          {view === 1 ? (
            <>
              <div className="d-flex flex-column align-items-end">
                <Typography variant="h6" className="fw-bold text-capitalize">
                  Cost of work left
                </Typography>
                <Typography variant="h6" className="fw-bold">
                  $23,000
                </Typography>
              </div>
              <div className="d-flex flex-column align-items-end">
                <Typography variant="h6" className="fw-bold text-capitalize">
                  Cost of work Done
                </Typography>
                <Typography variant="h6" className="fw-bold">
                  $20,000
                </Typography>
              </div>
            </>
          ) : null}
          <div className="d-flex flex-column align-items-end">
            <Typography variant="h6" className="fw-bold">
              Estimated Total {view % 2 === 0 ? "Time" : "Cost"}
            </Typography>
            <Typography variant="h6" className="fw-bold">
              {view % 2 === 1 ? "$43,000" : "4 Months"}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default TimeAndCost;
