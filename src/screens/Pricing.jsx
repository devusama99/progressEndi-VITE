import {
  AppBar,
  Box,
  Card,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import FullLogo from "../assets/full-logo.png";
import ButtonCustom from "../components/ButtonCustom";
import { CheckBoxRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Pricing() {
  const navigate = useNavigate();
  return (
    <Grid container style={{ minHeight: "100vh" }}>
      <Grid item xs={12}>
        <AppBar
          elevation={0}
          sx={{
            backgroundColor: (theme) => theme.palette.light.main,
          }}
        >
          <div className="px-3">
            <img src={FullLogo} alt="full-logo" height={60} />
          </div>
        </AppBar>
      </Grid>
      <Grid item xs={12} className="my-5 pt-5 h-100">
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography
                variant="h3"
                sx={{ maxWidth: 450, fontWeight: "bold" }}
              >
                We have got a plan that's perfect for you
              </Typography>
              <div className="d-flex mt-3">
                <ButtonCustom
                  label="Monthly Billing"
                  variant="contained"
                  color="secondary"
                  className=" fw-bold"
                />
                <ButtonCustom
                  label="Annual Billing"
                  variant="outlined"
                  textDark
                  color="secondary"
                  className="ms-3 fw-bold"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                className="p-3 "
                sx={{
                  boxShadow: "0px 0px 17px rgba(0, 0, 0, 0.15)",
                }}
              >
                <Typography variant="h6" className="fw-bold">
                  Enterprise Plan
                </Typography>
                <Typography
                  variant="h3"
                  className="fw-bold d-flex align-items-end justify-content-start my-3"
                >
                  $40{" "}
                  <span
                    style={{
                      fontSize: "12px",
                      marginBottom: "8px",
                      marginLeft: "8px",
                      fontWeight: "normal",
                    }}
                  >
                    Per Month
                  </span>
                </Typography>
                <ButtonCustom
                  fullWidth
                  variant="contained"
                  color="primary"
                  label="Get Started"
                  className="fw-bold"
                  onClick={() => {
                    navigate("/app");
                  }}
                />
                <Divider className="my-4" />
                <Box>
                  <Typography variant="h6" className="fw-bold">
                    Features
                  </Typography>
                  <Typography>Everything in our free plan plus.</Typography>
                  <List className="mt-3">
                    {Array(6)
                      .fill("0")
                      .map((item, i) => (
                        <ListItem
                          key={"feature" + i}
                          className="d-flex m-0 p-0 py-1"
                        >
                          <CheckBoxRounded sx={{ color: "green" }} />
                          <Typography className="mx-2">
                            Access to basic features
                          </Typography>
                        </ListItem>
                      ))}
                  </List>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                className="p-3 "
                sx={{
                  boxShadow: "0px 0px 17px rgba(0, 0, 0, 0.15)",
                  bgcolor: (theme) => theme.palette.secondary.main,
                  color: (theme) => theme.palette.light.main,
                }}
              >
                <Typography variant="h6" className="fw-bold">
                  Enterprise Plan
                </Typography>
                <Typography
                  variant="h3"
                  className="fw-bold d-flex align-items-end justify-content-start my-3"
                >
                  $40{" "}
                  <span
                    style={{
                      fontSize: "12px",
                      marginBottom: "8px",
                      marginLeft: "8px",
                      fontWeight: "normal",
                    }}
                  >
                    Per Month
                  </span>
                </Typography>
                <ButtonCustom
                  fullWidth
                  variant="contained"
                  color="primary"
                  label="Get Started"
                  className="fw-bold"
                  onClick={() => {
                    navigate("/app");
                  }}
                />
                <Divider className="my-4" />
                <Box>
                  <Typography variant="h6" className="fw-bold">
                    Features
                  </Typography>
                  <Typography>Everything in our free plan plus.</Typography>
                  <List className="mt-3">
                    {Array(6)
                      .fill("0")
                      .map((item, i) => (
                        <ListItem
                          key={"feature" + i}
                          className="d-flex m-0 p-0 py-1"
                        >
                          <CheckBoxRounded sx={{ color: "green" }} />
                          <Typography className="mx-2">
                            Access to basic features
                          </Typography>
                        </ListItem>
                      ))}
                  </List>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                className="p-3 "
                sx={{
                  boxShadow: "0px 0px 17px rgba(0, 0, 0, 0.15)",
                }}
              >
                <Typography variant="h6" className="fw-bold">
                  Enterprise Plan
                </Typography>
                <Typography
                  variant="h3"
                  className="fw-bold d-flex align-items-end justify-content-start my-3"
                >
                  $40{" "}
                  <span
                    style={{
                      fontSize: "12px",
                      marginBottom: "8px",
                      marginLeft: "8px",
                      fontWeight: "normal",
                    }}
                  >
                    Per Month
                  </span>
                </Typography>
                <ButtonCustom
                  fullWidth
                  variant="contained"
                  color="primary"
                  label="Get Started"
                  className="fw-bold"
                  onClick={() => {
                    navigate("/app");
                  }}
                />
                <Divider className="my-4" />
                <Box>
                  <Typography variant="h6" className="fw-bold">
                    Features
                  </Typography>
                  <Typography>Everything in our free plan plus.</Typography>
                  <List className="mt-3">
                    {Array(6)
                      .fill("0")
                      .map((item, i) => (
                        <ListItem
                          key={"feature" + i}
                          className="d-flex m-0 p-0 py-1"
                        >
                          <CheckBoxRounded sx={{ color: "green" }} />
                          <Typography className="mx-2">
                            Access to basic features
                          </Typography>
                        </ListItem>
                      ))}
                  </List>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}

export default Pricing;
