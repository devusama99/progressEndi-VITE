import {
  CalendarMonthOutlined,
  ErrorOutline,
  IosShare,
  PeopleAltOutlined,
  WorkOutline,
} from "@mui/icons-material";
import {
  Grid,
  ToggleButtonGroup,
  Typography,
  ToggleButton,
  Card,
  Avatar,
  ListItem,
  Chip,
  List,
  Divider,
  LinearProgress,
  alpha,
} from "@mui/material";
import React, { useState } from "react";
import BarChart from "../components/BarChart";
import ButtonCustom from "../components/ButtonCustom";
import ColumnChart from "../components/ColumnChart";
import DonutChart from "../components/DonutChart";
import GuageChart from "../components/GuageChart";
import MultipleRadialChart from "../components/MultipleRadialChart";
import PieChart from "../components/PieChart";
import PolarAreaChart from "../components/PolarAreaChart";

const LIST = [
  {
    name: "Problems",
    count: 5,
  },
  {
    name: "Risks",
    count: 5,
  },
  {
    name: "Changes",
    count: 5,
  },
  {
    name: "Topics",
    count: 5,
  },
  {
    name: "Tasks",
    count: 5,
  },
  {
    name: "Informations",
    count: 5,
  },
  {
    name: "Requirements",
    count: 5,
  },
];

function Metrics() {
  const [type, setType] = useState("left");

  return (
    <Grid container spacing={3} className="pb-4">
      <Grid item xs={6}>
        <Typography variant="h5" className="fw-bold">
          Metrics
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="d-flex justify-content-end align-items-center">
          <div className="d-flex align-items-center ms-2">
            <ButtonCustom
              variant="outlined"
              textDark
              className="me-3"
              color="secondary"
              label={
                <Typography className="d-flex align-items-center">
                  <IosShare fontSize="small" />
                </Typography>
              }
            />
            <ToggleButtonGroup
              size="small"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              <ToggleButton
                value="left"
                key="left"
                className="text-capitalize"
                sx={{ width: "90px" }}
              >
                Project
              </ToggleButton>
              <ToggleButton
                value="right"
                key="right"
                className="text-capitalize"
                sx={{ width: "90px" }}
              >
                Multiprojects
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
      </Grid>

      {type === "left" ? (
        <>
          <Grid item xs={12} sm={4} md={3}>
            <Card
              elevation={0}
              className="h-100 py-3 px-2 p-md-4 d-flex align-items-center justify-content-between"
              sx={{
                boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.07)",
                backgroundColor: (theme) => theme.palette.secondary.main,
                color: (theme) => theme.palette.light.main,
              }}
            >
              <div>
                <Typography>Total Collaborators</Typography>
                <Typography variant="h6" className="fw-bold">
                  148
                </Typography>
              </div>
              <Avatar
                className="d-flex align-items-center"
                sx={{
                  backgroundColor: (theme) => theme.palette.light.main,
                  width: 40,
                  height: 40,
                }}
              >
                <PeopleAltOutlined color="secondary" />
              </Avatar>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Card
              elevation={0}
              className="h-100 py-3 px-2 p-md-4 d-flex align-items-center justify-content-between"
              sx={{
                boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.07)",

                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.light.main,
              }}
            >
              <div>
                <Typography>Total Events</Typography>
                <Typography variant="h6" className="fw-bold">
                  139
                </Typography>
              </div>
              <Avatar
                className="d-flex align-items-center"
                sx={{
                  backgroundColor: (theme) => theme.palette.light.main,
                  width: 40,
                  height: 40,
                }}
              >
                <WorkOutline color="primary" />
              </Avatar>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Card
              elevation={0}
              className="h-100 py-3 px-2 p-md-4 d-flex align-items-center justify-content-between"
              sx={{
                boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.07)",

                backgroundColor: (theme) => theme.palette.success.main,
                color: (theme) => theme.palette.light.main,
              }}
            >
              <div>
                <Typography>Completed Events</Typography>
                <Typography variant="h6" className="fw-bold">
                  89
                </Typography>
              </div>
              <Avatar
                className="d-flex align-items-center"
                sx={{
                  backgroundColor: (theme) => theme.palette.light.main,
                  width: 40,
                  height: 40,
                }}
              >
                <CalendarMonthOutlined color="success" />
              </Avatar>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Card
              elevation={0}
              className="h-100 py-3 px-2 p-md-4 d-flex align-items-center justify-content-between"
              sx={{
                boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.07)",

                backgroundColor: (theme) => theme.palette.error.main,
                color: (theme) => theme.palette.light.main,
              }}
            >
              <div>
                <Typography>Projects Halted</Typography>
                <Typography variant="h6" className="fw-bold">
                  9
                </Typography>
              </div>
              <Avatar
                className="d-flex align-items-center"
                sx={{
                  backgroundColor: (theme) => theme.palette.light.main,
                  width: 40,
                  height: 40,
                }}
              >
                <ErrorOutline color="error" />
              </Avatar>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              elevation={0}
              sx={{
                backgroundColor: (theme) => theme.palette.light.main,
                boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.07)",
              }}
              className="p-3 h-100 d-flex flex-column align-items-start justify-content-start"
            >
              <Typography
                className="mb-2 fw-bold"
                sx={{ fontSize: "14px", opacity: 0.75 }}
              >
                Events Per Type
              </Typography>
              <ColumnChart />
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              elevation={0}
              sx={{
                backgroundColor: (theme) => theme.palette.light.main,
                boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.07)",
              }}
              className="p-3 h-100 d-flex flex-column align-items-start justify-content-start"
            >
              <Typography
                className="mb-2 fw-bold"
                sx={{ fontSize: "14px", opacity: 0.75 }}
              >
                Global Advancement
              </Typography>
              <div className="d-flex align-items-center justify-content-center w-100  h-100">
                <GuageChart />
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              elevation={0}
              sx={{
                backgroundColor: (theme) => theme.palette.light.main,
                boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.07)",
              }}
              className="p-3 h-100 d-flex flex-column align-items-start justify-content-start"
            >
              <Typography
                className="mb-2 fw-bold"
                sx={{ fontSize: "14px", opacity: 0.75 }}
              >
                Events Per Advancement
              </Typography>
              <div className="d-flex align-items-center justify-content-center w-100 h-100">
                <PieChart />
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              elevation={0}
              sx={{
                backgroundColor: (theme) => theme.palette.light.main,
                boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.07)",
              }}
              className="p-3 h-100 d-flex flex-column align-items-start justify-content-start"
            >
              <Typography
                className="mb-2 fw-bold"
                sx={{ fontSize: "14px", opacity: 0.75 }}
              >
                Events Per Service
              </Typography>
              <div className="d-flex align-items-center justify-content-center w-100 h-100">
                <DonutChart />
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              elevation={0}
              sx={{
                backgroundColor: (theme) => theme.palette.light.main,
                boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.07)",
              }}
              className="p-3 h-100 d-flex flex-column align-items-start justify-content-start"
            >
              <Typography
                className="mb-2 fw-bold"
                sx={{ fontSize: "14px", opacity: 0.75 }}
              >
                Events Per Collaborator
              </Typography>
              <div className="d-flex align-items-center justify-content-center w-100 h-100">
                <PolarAreaChart />
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              elevation={0}
              sx={{
                backgroundColor: (theme) => theme.palette.light.main,
                boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.07)",
              }}
              className="p-3 h-100 d-flex flex-column align-items-start justify-content-start"
            >
              <Typography
                className="mb-2 fw-bold"
                sx={{ fontSize: "14px", opacity: 0.75 }}
              >
                Events Per Class
              </Typography>
              <div className="d-flex align-items-center justify-content-center w-100 h-100">
                <BarChart />
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              elevation={0}
              sx={{
                backgroundColor: (theme) => theme.palette.light.main,
                boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.07)",
              }}
              className="p-3 h-100 d-flex flex-column align-items-start justify-content-start"
            >
              <Typography
                className="mb-2 fw-bold"
                sx={{ fontSize: "14px", opacity: 0.75 }}
              >
                Events Per Category
              </Typography>
              <div className="d-flex align-items-center justify-content-center w-100 h-100">
                <DonutChart />
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              elevation={0}
              sx={{
                backgroundColor: (theme) => theme.palette.light.main,
                boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.07)",
              }}
              className="p-3 h-100 d-flex flex-column align-items-start justify-content-start"
            >
              <Typography
                className="mb-2 fw-bold"
                sx={{ fontSize: "14px", opacity: 0.75 }}
              >
                Events Per Quality
              </Typography>
              <div className="d-flex align-items-center justify-content-center w-100 h-100">
                <MultipleRadialChart />
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              elevation={0}
              sx={{
                backgroundColor: (theme) => theme.palette.light.main,
                boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.07)",
              }}
              className="p-3 h-100 d-flex flex-column align-items-start justify-content-start"
            >
              <Typography
                className="mb-2 fw-bold"
                sx={{ fontSize: "14px", opacity: 0.75 }}
              >
                Events By Priority
              </Typography>
              <div className="d-flex flex-column gap-2  justify-content-center w-100 h-100">
                {Array(5)
                  .fill(0)
                  .map((item, i) => (
                    <div className="d-flex align-items-center mb-2">
                      <Card
                        sx={{
                          width: 40,
                          height: 30,
                          backgroundColor:
                            "#" +
                            Math.floor(Math.random() * 16777215).toString(16),
                        }}
                      />
                      <div className="w-100 mx-3">
                        <LinearProgress
                          value={90}
                          sx={{ height: "10px" }}
                          variant="determinate"
                        />
                        <Typography variant="caption">
                          Priorty {i + 1}
                        </Typography>
                      </div>
                      <Typography className="fw-bold ">32</Typography>
                    </div>
                  ))}
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              elevation={0}
              sx={{
                backgroundColor: (theme) => theme.palette.light.main,
                boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.07)",
              }}
              className="p-3 h-100 d-flex flex-column align-items-start justify-content-start"
            >
              <List className="w-100">
                {LIST.map((item, i) => (
                  <div key={item.name + i}>
                    <ListItem className="d-flex align-items-center justify-content-between w-100">
                      <Typography>{item.name}</Typography>
                      <Chip
                        label={item.count}
                        size="small"
                        className="fw-bold"
                      />
                    </ListItem>
                    {i < LIST.length - 1 ? (
                      <Divider
                        className="my-1"
                        sx={{
                          border: (theme) =>
                            `1px solid ${alpha(theme.palette.grey.light, 0.4)}`,
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </List>
            </Card>
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              elevation={0}
              sx={{
                backgroundColor: (theme) => theme.palette.light.main,
                boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.07)",
              }}
              className="p-3 h-100 d-flex flex-column align-items-start justify-content-start"
            >
              <Typography
                className="mb-2 fw-bold"
                sx={{ fontSize: "14px", opacity: 0.75 }}
              >
                Projects Per Type
              </Typography>
              <ColumnChart />
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              elevation={0}
              sx={{
                backgroundColor: (theme) => theme.palette.light.main,
                boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.07)",
              }}
              className="p-3 h-100 d-flex flex-column align-items-start justify-content-start"
            >
              <Typography
                className="mb-2 fw-bold"
                sx={{ fontSize: "14px", opacity: 0.75 }}
              >
                Projects Per Package
              </Typography>
              <DonutChart />
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              elevation={0}
              sx={{
                backgroundColor: (theme) => theme.palette.light.main,
                boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.07)",
              }}
              className="p-3 h-100 d-flex flex-column align-items-start justify-content-start"
            >
              <Typography
                className="mb-2 fw-bold"
                sx={{ fontSize: "14px", opacity: 0.75 }}
              >
                Projects Per Client
              </Typography>
              <PieChart />
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              elevation={0}
              sx={{
                backgroundColor: (theme) => theme.palette.light.main,
                boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.07)",
              }}
              className="p-3 h-100 d-flex flex-column align-items-start justify-content-start"
            >
              <Typography
                className="mb-2 fw-bold"
                sx={{ fontSize: "14px", opacity: 0.75 }}
              >
                Global Advancement
              </Typography>
              <GuageChart />
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card
              elevation={0}
              sx={{
                backgroundColor: (theme) => theme.palette.light.main,
                boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.07)",
              }}
              className="p-3 h-100 d-flex flex-column align-items-start justify-content-start"
            >
              <Typography
                className="mb-2 fw-bold"
                sx={{ fontSize: "14px", opacity: 0.75 }}
              >
                Projects Per Priority
              </Typography>
              <DonutChart />
            </Card>
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default Metrics;
