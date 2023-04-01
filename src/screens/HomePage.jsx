import {
  alpha,
  AppBar,
  Box,
  Button,
  Grid,
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
import { useNavigate, useNavigation } from "react-router-dom";

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
                <img src={service1} alt="service-1" width={50} />
                <div className="ms-2">
                  <Typography className="fw-bold" sx={{ fontSize: "16px" }}>
                    Building Contruction
                  </Typography>
                  <Typography
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
                <img src={service2} alt="service-1" width={50} />
                <div className="ms-2">
                  <Typography className="fw-bold" sx={{ fontSize: "16px" }}>
                    Foundation Work
                  </Typography>
                  <Typography
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
                <img src={service3} alt="service-1" width={50} />
                <div className="ms-2">
                  <Typography className="fw-bold" sx={{ fontSize: "16px" }}>
                    Site Mangement
                  </Typography>
                  <Typography
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
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda maiores et optio. ",
              },
              {
                img: "https://visilean.com/wp-content/uploads/2021/07/Blog-image-.jpg",
                heading: "Site Management",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda maiores et optio. ",
              },
              {
                img: "https://visilean.com/wp-content/uploads/2021/07/Blog-image-.jpg",
                heading: "Site Management",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda maiores et optio. ",
              },
              {
                img: "https://visilean.com/wp-content/uploads/2021/07/Blog-image-.jpg",
                heading: "Site Management",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda maiores et optio. ",
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
      </Grid>
    </div>
  );
}

export default HomePage;
