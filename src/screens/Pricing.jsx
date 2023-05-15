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
      <Grid item xs={12} className="my-5 pt-5 h-100"></Grid>
    </Grid>
  );
}

export default Pricing;
