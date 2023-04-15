import {
  alpha,
  AppBar,
  Box,
  Button,
  Divider,
  Grid,
  Rating,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import ButtonCustom from "../components/ButtonCustom";
import service1 from "../assets/service-1.png";
import service2 from "../assets/service-2.png";
import service3 from "../assets/service-3.png";
import { Circle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import GatherProjects from "../assets/gather_projects.png";
import WorkQuality from "../assets/work_quality.png";
import TasksProgress from "../assets/tasks_progress.png";
import SuccessProject from "../assets/success_project.png";
import Collab1 from "../assets/collab1.png";
import Collab2 from "../assets/collab2.png";
import ReactPlayer from "react-player";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <AppBar color="light" elevation={1} position="fixed">
            <Toolbar className="d-flex justify-content-end">
              <Button onClick={() => navigate("/signin")}>Sign in</Button>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={9} className="mt-5">
          <div className="h-100 main-img-container">
            <div className="content d-flex align-items-center justify-content-center h-100 p-4">
              <div>
                <Typography
                  variant="h4"
                  className="fw-bold text-uppercase"
                  color={"primary"}
                  sx={{
                    position: "relative",
                    ":before": {
                      content: "' '",
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      backgroundColor: (theme) => theme.palette.primary.main,
                      width: "10px",
                      left: "-15px",
                    },
                  }}
                >
                  NYBANN
                </Typography>
                <Typography
                  className="mt-3"
                  sx={{
                    maxWidth: "650px",
                    color: (theme) => theme.palette.light.main,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  quis egestas pellentesque libero dolor in diam consequat ut.
                  Mi nibh amet viverra id aliquet neque odio.
                </Typography>
                <ButtonCustom
                  className="text-uppercase mt-3"
                  variant="contained"
                  label="View Our Work"
                  sx={{
                    borderRadius: 0,
                    color: (theme) => theme.palette.light.main,
                  }}
                />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box
            className="h-100 d-flex align-items-center justify-content-center p-4"
            sx={{
              background: (theme) => theme.palette.primary.main,
            }}
          >
            <Stack spacing={5}>
              <Typography variant="h5" className="fw-bold text-center">
                Our Services
              </Typography>
              <div className="d-flex align-items-center">
                <img
                  src={service1}
                  className="me-3"
                  alt="service-1"
                  width={50}
                />
                <div className="ms-2">
                  <Typography className="fw-bold" sx={{ fontSize: "16px" }}>
                    Building Contruction
                  </Typography>
                  <Typography
                    className="mt-2"
                    sx={{
                      color: (theme) => theme.palette.light.main,
                      fontSize: "14px",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam?
                  </Typography>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <img
                  src={service2}
                  className="me-3"
                  alt="service-1"
                  width={50}
                />
                <div className="ms-2">
                  <Typography className="fw-bold" sx={{ fontSize: "16px" }}>
                    Foundation Work
                  </Typography>
                  <Typography
                    className="mt-2"
                    sx={{
                      color: (theme) => theme.palette.light.main,
                      fontSize: "14px",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam?
                  </Typography>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <img
                  src={service3}
                  className="me-3"
                  alt="service-1"
                  width={50}
                />
                <div className="ms-2">
                  <Typography className="fw-bold" sx={{ fontSize: "16px" }}>
                    Site Mangement
                  </Typography>
                  <Typography
                    className="mt-2"
                    sx={{
                      color: (theme) => theme.palette.light.main,
                      fontSize: "14px",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam?
                  </Typography>
                </div>
              </div>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} className="py-5">
          <div className="d-flex align-items-center justify-content-center py-5 px-3">
            <div>
              <Typography variant="h5" className="text-center">
                ABOUT NYBANN COMPANY
              </Typography>
              <Typography
                sx={{ maxWidth: "700px" }}
                className="text-center mt-3"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <div className="about-img-container h-100"></div>
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Box
            sx={{
              background: (theme) => alpha(theme.palette.grey.light, 0.15),
            }}
            className="h-100"
          >
            <Grid container>
              <Grid item xs={12} className="p-5">
                <Grid container className=" my-3 w-100">
                  <Grid item xs={12} className="mb-4">
                    <Typography
                      variant="h4"
                      className="fw-bold text-uppercase mb-5"
                      sx={{
                        position: "relative",
                        ":before": {
                          content: "' '",
                          position: "absolute",

                          bottom: -20,
                          backgroundColor: (theme) =>
                            theme.palette.primary.main,
                          width: "60px",
                          height: "5px",
                          left: "0px",
                        },
                      }}
                    >
                      Why Choose Us?
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} className="my-3  ">
                    <div className="d-flex align-items-start w-100">
                      <Circle color="primary" />
                      <div className="ms-2">
                        <Typography className="fw-bold mb-2">
                          Professional Approach
                        </Typography>
                        <Typography variant="caption">
                          Lorem ipsum dolot amet, consectetur adipiscing elit,
                          sed do eiusmod tempor ever since the 1500s.
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6} className="my-3  ">
                    <div className="d-flex align-items-start w-100">
                      <Circle color="primary" />
                      <div className="ms-2">
                        <Typography className="fw-bold mb-2">
                          Client Satisfaction
                        </Typography>
                        <Typography variant="caption">
                          Lorem ipsum dolot amet, consectetur adipiscing elit,
                          sed do eiusmod tempor ever since the 1500s.
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6} className="my-3  ">
                    <div className="d-flex align-items-start w-100">
                      <Circle color="primary" />
                      <div className="ms-2">
                        <Typography className="fw-bold mb-2">
                          Awareness
                        </Typography>
                        <Typography variant="caption">
                          Lorem ipsum dolot amet, consectetur adipiscing elit,
                          sed do eiusmod tempor ever since the 1500s.
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6} className="my-3  ">
                    <div className="d-flex align-items-start w-100">
                      <Circle color="primary" />
                      <div className="ms-2">
                        <Typography className="fw-bold mb-2">
                          Progress
                        </Typography>
                        <Typography variant="caption">
                          Lorem ipsum dolot amet, consectetur adipiscing elit,
                          sed do eiusmod tempor ever since the 1500s.
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{ background: (theme) => theme.palette.primary.main }}
                  className="py-4 px-2 d-flex flex-column align-items-center justify-content-center"
                >
                  <Typography className="fw-bold text-center" variant="h5">
                    12
                  </Typography>
                  <Typography className="fw-bold text-center text-uppercase">
                    Years Established
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    background: (theme) => theme.palette.secondary.main,
                    color: (theme) => theme.palette.light.main,
                  }}
                  className="py-4 px-2 d-flex  flex-column align-items-center justify-content-center"
                >
                  <Typography className="fw-bold text-center" variant="h5">
                    12
                  </Typography>
                  <Typography className="fw-bold text-center text-uppercase">
                    Years Established
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} className="my-5 px-2">
          <Typography
            variant="h5"
            className="fw-bold text-uppercase mb-5 text-center"
            sx={{
              position: "relative",
              ":before": {
                content: "' '",
                position: "absolute",
                bottom: -20,
                backgroundColor: (theme) => theme.palette.primary.main,
                width: "60px",
                height: "5px",
                left: "50%",
                transform: "translateX(-50%)",
              },
            }}
          >
            Latest Projects
          </Typography>
          <Box className="d-flex align-items-center flex-wrap justify-content-center gap-4">
            {[
              {
                img: "https://visilean.com/wp-content/uploads/2021/07/Blog-image-.jpg",
                heading: "Site Management",
                description:
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur rem tempore laborum ad. Itaque asperiores dignissimos ipsum dolorem quis eveniet eaque beatae, nostrum consectetur. In eos minima placeat autem architecto.ß",
              },
              {
                img: "https://visilean.com/wp-content/uploads/2021/07/Blog-image-.jpg",
                heading: "Site Management Events",
                description:
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur rem tempore laborum ad. Itaque asperiores dignissimos ipsum dolorem quis eveniet eaque beatae, nostrum consectetur. In eos minima placeat autem architecto.ß",
              },
              {
                img: "https://visilean.com/wp-content/uploads/2021/07/Blog-image-.jpg",
                heading: "Facilitate Exchanges",
                description:
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur rem tempore laborum ad. Itaque asperiores dignissimos ipsum dolorem quis eveniet eaque beatae, nostrum consectetur. In eos minima placeat autem architecto.ß",
              },
              {
                img: "https://visilean.com/wp-content/uploads/2021/07/Blog-image-.jpg",
                heading: "Points of Attention",
                description:
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur rem tempore laborum ad. Itaque asperiores dignissimos ipsum dolorem quis eveniet eaque beatae, nostrum consectetur. In eos minima placeat autem architecto.ß",
              },
            ].map((item, i) => (
              <div
                className="flex-1"
                style={{
                  maxWidth: "250px",
                }}
              >
                <img
                  src={item.img}
                  alt="project-img"
                  width={250}
                  height={200}
                />
                <Box
                  className="w-100 p-3 mt-3"
                  sx={{
                    border: "1px solid black",
                  }}
                >
                  <Typography variant="h6" sx={{ fontSize: "14px" }}>
                    {item.heading}
                  </Typography>
                  <Typography className="mt-2" sx={{ fontSize: "14px" }}>
                    {item.description}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ borderRadius: 0 }}
                    size="small"
                    className="mt-4"
                  >
                    View Project
                  </Button>
                </Box>
              </div>
            ))}
          </Box>
          <div className="mt-3 d-flex align-items-center justify-content-center">
            <Button
              variant="outlined"
              color="secondary"
              sx={{ borderRadius: 0 }}
              className="mt-4"
            >
              View All Projects
            </Button>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12} md={4}>
              <Box
                className="d-flex align-items-center justify-content-center p-3 py-5"
                sx={{
                  background: (theme) => alpha(theme.palette.grey.main, 0.07),
                }}
              >
                <img
                  src={GatherProjects}
                  alt="gather-projects"
                  className="me-3"
                  height={50}
                />
                <div>
                  <Typography className="fw-bold" variant="h6">
                    Gather all your projects
                  </Typography>

                  <Typography sx={{ maxWidth: "350px" }} className="mt-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Deleniti dignissimos consectetur nulla nostrum veniam.
                  </Typography>
                </div>
              </Box>
              <Box
                className="d-flex align-items-center justify-content-center p-3 py-5"
                sx={{
                  background: (theme) => alpha(theme.palette.primary.main, 1),
                  color: (theme) => alpha(theme.palette.light.main, 1),
                }}
              >
                <img
                  src={WorkQuality}
                  alt="work-quality"
                  className="me-3"
                  height={50}
                />
                <div>
                  <Typography className="fw-bold" variant="h6">
                    Maximize the quality of work
                  </Typography>
                  <Typography sx={{ maxWidth: "350px" }} className="mt-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Deleniti dignissimos consectetur nulla nostrum veniam.
                  </Typography>
                </div>
              </Box>
              <Box
                className="d-flex align-items-center justify-content-center p-3 py-5"
                sx={{
                  background: (theme) => alpha(theme.palette.secondary.main, 1),
                  color: (theme) => alpha(theme.palette.light.main, 1),
                }}
              >
                <img
                  src={TasksProgress}
                  alt="tasks-progress"
                  className="me-3"
                  height={50}
                />
                <div>
                  <Typography className="fw-bold" variant="h6">
                    Follow the progress of tasks
                  </Typography>
                  <Typography sx={{ maxWidth: "350px" }} className="mt-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Deleniti dignissimos consectetur nulla nostrum veniam.
                  </Typography>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} md>
              <div style={{ minHeight: 300 }} className=" h-100">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=z4nO6NuEM3A&ab_channel=AmmarAl-Towaiji"
                  style={{
                    height: "100%",
                  }}
                  width="100%"
                  height="100%"
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          className=" pt-3 pt-md-5 pb-1 pb-md-3 px-3"
          sx={{ backgroundColor: "#f7f7f7" }}
        >
          <Grid
            container
            justifyContent={"center"}
            spacing={3}
            className="my-3 my-md-5"
          >
            <Grid item xs={12} sm={8} md={6}>
              <img src={SuccessProject} alt="success-project" width="100%" />
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                className="fw-bold text-uppercase my-4 pt-4 text-center"
                sx={{
                  position: "relative",
                  ":before": {
                    content: "' '",
                    position: "absolute",
                    bottom: -20,
                    backgroundColor: (theme) => theme.palette.primary.main,
                    width: "60px",
                    height: "5px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  },
                }}
              >
                Client Testimonials
              </Typography>
            </Grid>
            {Array(3)
              .fill(0)
              .map((item) => (
                <Grid item xs={10} sm={6} md={4} lg={12 / 5}>
                  <Box
                    sx={{
                      backgroundColor: (theme) => theme.palette.light.main,
                    }}
                    className="p-4 d-flex flex-column justify-content-center align-items-center"
                  >
                    <Rating value={5} className="mt-2" readOnly />
                    <div className="mt-3" style={{ maxWidth: "250px" }}>
                      <Typography
                        variant="caption"
                        className="text-muted"
                        sx={{
                          textAlign: "justify",
                        }}
                      >
                        "Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Commodi vero quam iure sint dolore velit molestias
                        temporibus eius sit magnam."
                      </Typography>
                      <Typography className="fw-bold my-2 mt-3">
                        John Smith
                      </Typography>
                    </div>
                  </Box>
                </Grid>
              ))}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          className={"d-flex flex-column align-items-center py-5 px-4"}
          sx={{ bgcolor: (theme) => theme.palette.light.main }}
        >
          <Typography className="fw-bold text-uppercase" variant="h6">
            Collaborations
          </Typography>
          <Divider
            sx={{
              borderColor: (theme) => theme.palette.grey.main,
              maxWidth: "250px",
            }}
            className="mt-2 w-100"
          />
          <Typography
            sx={{ maxWidth: 500, textAlign: "center" }}
            className="my-5 "
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, non
            dicta esse explicabo adipisci ad, accusantium rem deleniti sunt
            asperiores error magni quod voluptate maiores aliquid voluptatem?
          </Typography>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <div style={{ maxWidth: "400px" }}>
              <img src={Collab1} alt="collab-1" className="w-100" />
              <Typography className="mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores quam id aperiam facilis unde. Dolorum rerum esse!
              </Typography>
            </div>
            <div style={{ maxWidth: "400px" }}>
              <img src={Collab2} alt="collab-2" className="w-100" />
              <Typography className="mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores quam id aperiam facilis unde. Dolorum rerum esse!
              </Typography>
            </div>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          className={"d-flex flex-column align-items-center py-5 px-4"}
          sx={{ bgcolor: (theme) => theme.palette.light.main }}
        >
          <Typography className="fw-bold text-uppercase" variant="h6">
            Plans
          </Typography>
          <Divider
            sx={{
              borderColor: (theme) => theme.palette.grey.main,
              maxWidth: "250px",
            }}
            className="mt-2 w-100"
          />
          <Typography
            sx={{ maxWidth: 500, textAlign: "center" }}
            className="my-5 "
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, non
            dicta esse explicabo adipisci ad, accusantium rem deleniti sunt
            asperiores error magni quod voluptate maiores aliquid voluptatem?
          </Typography>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <div style={{ maxWidth: "400px" }}>
              <img src={Collab1} alt="collab-1" className="w-100" />
              <Typography className="mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores quam id aperiam facilis unde. Dolorum rerum esse!
              </Typography>
            </div>
            <div style={{ maxWidth: "400px" }}>
              <img src={Collab2} alt="collab-2" className="w-100" />
              <Typography className="mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores quam id aperiam facilis unde. Dolorum rerum esse!
              </Typography>
            </div>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          className={"d-flex flex-column align-items-center py-5 px-4"}
          sx={{ bgcolor: (theme) => theme.palette.light.main }}
        >
          <Typography className="fw-bold text-uppercase" variant="h6">
            Documents
          </Typography>
          <Divider
            sx={{
              borderColor: (theme) => theme.palette.grey.main,
              maxWidth: "250px",
            }}
            className="mt-2 w-100"
          />
          <Typography
            sx={{ maxWidth: 500, textAlign: "center" }}
            className="my-5 "
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, non
            dicta esse explicabo adipisci ad, accusantium rem deleniti sunt
            asperiores error magni quod voluptate maiores aliquid voluptatem?
          </Typography>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <div style={{ maxWidth: "400px" }}>
              <img src={Collab1} alt="collab-1" className="w-100" />
              <Typography className="mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores quam id aperiam facilis unde. Dolorum rerum esse!
              </Typography>
            </div>
            <div style={{ maxWidth: "400px" }}>
              <img src={Collab2} alt="collab-2" className="w-100" />
              <Typography className="mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores quam id aperiam facilis unde. Dolorum rerum esse!
              </Typography>
            </div>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
