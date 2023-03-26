import { FilterList, Search } from "@mui/icons-material";
import {
  Box,
  Grid,
  InputBase,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ButtonCustom from "../components/ButtonCustom";
import TimelineChart from "../components/TimelineChart";

const DATA = [
  {
    data: [
      {
        x: ["Anaylsis", "Jan 31 - Feb 4"],
        y: [new Date("2019-01-12").getTime(), new Date("2019-03-04").getTime()],
        fillColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
      },
      {
        x: ["Design", "Jan 31 - Feb 4"],
        y: [new Date("2019-02-04").getTime(), new Date("2019-05-08").getTime()],
        fillColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
      },
      {
        x: ["Coding", "Jan 31 - Feb 4"],
        y: [new Date("2019-04-08").getTime(), new Date("2019-07-12").getTime()],
        fillColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
      },
      {
        x: ["Testing", "Jan 31 - Feb 4"],
        y: [new Date("2019-03-12").getTime(), new Date("2019-06-19").getTime()],
        fillColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
      },
      {
        x: ["Deployment", "Jan 31 - Feb 4"],
        y: [new Date("2019-05-18").getTime(), new Date("2019-09-21").getTime()],
        fillColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
      },
      {
        x: ["Support", "Jan 31 - Feb 4"],
        y: [new Date("2019-04-21").getTime(), new Date("2019-10-19").getTime()],
        fillColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
      },
    ],
  },
];

function Timeline() {
  const [viewType, setViewType] = useState("left");
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h5" className="fw-bold">
            Timeline
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="d-flex justify-content-end align-items-center">
            <div className="d-flex align-items-center ms-2">
              <ToggleButtonGroup
                size="small"
                value={viewType}
                exclusive
                onChange={(e, val) => setViewType(val)}
              >
                <ToggleButton
                  value="left"
                  key="left"
                  className="text-capitalize"
                  sx={{ width: 120 }}
                >
                  <Typography>Events</Typography>
                </ToggleButton>
                <ToggleButton
                  value="right"
                  key="right"
                  className="text-capitalize"
                  sx={{ width: 120 }}
                >
                  <Typography>Multiprojects</Typography>
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
                placeholder="Search timeline by name ...."
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
      </Grid>
      <div className="h-100">
        <TimelineChart series={DATA} />
      </div>
    </>
  );
}

export default Timeline;
