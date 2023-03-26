import { FilterList, Search } from "@mui/icons-material";
import { Grid, Typography, Box, InputBase, Avatar } from "@mui/material";
import React from "react";
import { Table } from "react-bootstrap";
import ArchiveActions from "../components/ArchiveActions";
import ButtonCustom from "../components/ButtonCustom";

function Archive() {
  return (
    <div className="h-100 ">
      <Grid container spacing={3} className="pb-4">
        <Grid item xs={12}>
          <Typography variant="h5" className="fw-bold">
            Archives
          </Typography>
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
                placeholder="Search archives by name ...."
              />
            </Box>
            <ButtonCustom
              variant="contained"
              color="secondary"
              label={<FilterList />}
              className="ms-3"
            />
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
        <Grid item xs={12} className="mt-3">
          <Table responsive className="mt-0">
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
                      <ArchiveActions />
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

export default Archive;
