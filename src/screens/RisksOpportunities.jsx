import { Add } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ButtonCustom from "../components/ButtonCustom";
import RisksOpprtunitiesItem from "../components/RisksOpprtunitiesItem";

const GRAPH = [
  {
    id: 1,
    bg: "transparent",
    main: "Very Probable",
    width: 2,
    type: null,
    textLight: 0,
  },
  {
    id: 2,
    bg: "#022860",
    main: "Certain",
    width: 1,
    type: "opportunities",
    textLight: 1,
  },
  {
    id: 3,
    bg: "#0649AD",
    main: "Very High",
    width: 1,
    type: "opportunities",
    textLight: 0,
  },
  {
    id: 4,
    bg: "#0066FF",
    main: "High",
    width: 1,
    type: "opportunities",
    textLight: 0,
  },
  {
    id: 5,
    bg: "#0066FF",
    main: "High",
    width: 1,
    type: "opportunities",
    textLight: 0,
  },
  {
    id: 6,
    bg: "#4A8BED",
    main: "Average",
    width: 1,
    type: "opportunities",
    textLight: 0,
  },
  {
    id: 7,
    bg: "#FFF500",
    main: "Average",
    width: 1,
    type: "risks",
    textLight: 0,
  },
  {
    id: 8,
    bg: "#FFB800",
    main: "High",
    width: 1,
    type: "risks",
    textLight: 0,
  },
  {
    id: 9,
    bg: "#FFB800",
    main: "High",
    width: 1,
    type: "risks",
    textLight: 0,
  },
  {
    id: 10,
    bg: "#FF0000",
    main: "Very High",
    width: 1,
    type: "risks",
    textLight: 0,
  },
  {
    id: 11,
    bg: "#292626",
    main: "Unacceptable",
    width: 1,
    type: "risks",
    textLight: 1,
  },
  {
    id: 12,
    bg: "transparent",
    main: "Likely",
    width: 2,
    type: null,
    textLight: 0,
  },
  {
    id: 13,
    bg: "#0649AD",
    main: "Very High",
    width: 1,
    type: "opportunities",
    textLight: 0,
  },
  {
    id: 14,
    bg: "#0066FF",
    main: "High",
    width: 1,
    type: "opportunities",
    textLight: 0,
  },
  {
    id: 15,
    bg: "#0066FF",
    main: "High",
    width: 1,
    type: "opportunities",
    textLight: 0,
  },
  {
    id: 16,
    bg: "#4A8BED",
    main: "Average",
    width: 1,
    type: "opportunities",
    textLight: 0,
  },
  {
    id: 17,
    bg: "#9FC6FF",
    main: "Down",
    width: 1,
    type: "opportunities",
    textLight: 0,
  },
  {
    id: 18,
    bg: "#1FAF38",
    main: "Down",
    width: 1,
    type: "risks",
    textLight: 0,
  },
  {
    id: 19,
    bg: "#FFF500",
    main: "Average",
    width: 1,
    type: "risks",
    textLight: 0,
  },
  {
    id: 20,
    bg: "#FFB800",
    main: "High",
    width: 1,
    type: "risks",
    textLight: 0,
  },
  {
    id: 21,
    bg: "#FFB800",
    main: "High",
    width: 1,
    type: "risks",
    textLight: 0,
  },
  {
    id: 22,
    bg: "#FF0000",
    main: "Very High",
    width: 1,
    type: "risks",
    textLight: 0,
  },
  {
    id: 23,
    bg: "transparent",
    main: "Moderate Likely",
    width: 2,
    type: null,
    textLight: 0,
  },
  {
    id: 24,
    bg: "#0066FF",
    main: "High",
    width: 1,
    type: "opportunities",
    textLight: 0,
  },
  {
    id: 25,
    bg: "#0066FF",
    main: "High",
    width: 1,
    type: "opportunities",
    textLight: 0,
  },
  {
    id: 26,
    bg: "#4A8BED",
    main: "Average",
    width: 1,
    type: "opportunities",
    textLight: 0,
  },
  {
    id: 27,
    bg: "#9FC6FF",
    main: "Down",
    width: 1,
    type: "opportunities",
    textLight: 0,
  },
  {
    id: 28,
    bg: "#9FC6FF",
    main: "Down",
    width: 1,
    type: "opportunities",
    textLight: 0,
  },
  {
    id: 29,
    bg: "#1FAF38",
    main: "Down",
    width: 1,
    type: "risks",
    textLight: 0,
  },
  {
    id: 30,
    bg: "#1FAF38",
    main: "Down",
    width: 1,
    type: "risks",
    textLight: 0,
  },
  {
    id: 31,
    bg: "#FFF500",
    main: "Average",
    width: 1,
    type: "risks",
    textLight: 0,
  },
  {
    id: 32,
    bg: "#FFB800",
    main: "High",
    width: 1,
    type: "risks",
    textLight: 0,
  },
  {
    id: 33,
    bg: "#FFB800",
    main: "High",
    width: 1,
    type: "risks",
    textLight: 0,
  },
  {
    id: 34,
    bg: "transparent",
    main: "Unlikely",
    width: 2,
    type: null,
    textLight: 0,
  },

  {
    id: 35,
    bg: "#0066FF",
    main: "High",
    width: 1,
    type: "opportunities",
    textLight: 0,
  },
  {
    id: 36,
    bg: "#4A8BED",
    main: "Average",
    width: 1,
    type: "opportunities",
    textLight: 0,
  },
  {
    id: 37,
    bg: "#9FC6FF",
    main: "Down",
    width: 1,
    type: "opportunities",
    textLight: 0,
  },
  {
    id: 38,
    bg: "#9FC6FF",
    main: "Down",
    width: 1,
    type: "opportunities",
    textLight: 0,
  },
  {
    id: 39,
    bg: "#9FC6FF",
    main: "Down",
    width: 1,
    type: "opportunities",
    textLight: 0,
  },
  {
    id: 40,
    bg: "#1FAF38",
    main: "Down",
    width: 1,
    type: "risks",
    textLight: 0,
  },
  {
    id: 41,
    bg: "#1FAF38",
    main: "Down",
    width: 1,
    type: "risks",
    textLight: 0,
  },
  {
    id: 42,
    bg: "#1FAF38",
    main: "Down",
    width: 1,
    type: "risks",
    textLight: 0,
  },
  {
    id: 43,
    bg: "#FFF500",
    main: "Average",
    width: 1,
    type: "risks",
    textLight: 0,
  },
  {
    id: 44,
    bg: "#FFB800",
    main: "High",
    width: 1,
    type: "risks",
    textLight: 0,
  },
  {
    id: 45,
    bg: "transparent",
    main: "Very Unlikely",
    width: 2,
    type: null,
    textLight: 0,
  },
  {
    id: 46,
    bg: "#4A8BED",
    main: "Average",
    width: 1,
    type: "opportunities",
    textLight: 0,
  },
  {
    id: 47,
    bg: "#9FC6FF",
    main: "Down",
    width: 1,
    type: "opportunities",
    textLight: 0,
  },
  {
    id: 48,
    bg: "#9FC6FF",
    main: "Down",
    width: 1,
    type: "opportunities",
    textLight: 0,
  },
  {
    id: 49,
    bg: "#9FC6FF",
    main: "Down",
    width: 1,
    type: "opportunities",
    textLight: 0,
  },
  {
    id: 50,
    bg: "#9FC6FF",
    main: "Down",
    width: 1,
    type: "opportunities",
    textLight: 0,
  },
  {
    id: 51,
    bg: "#1FAF38",
    main: "Down",
    width: 1,
    type: "risks",
    textLight: 0,
  },
  {
    id: 52,
    bg: "#1FAF38",
    main: "Down",
    width: 1,
    type: "risks",
    textLight: 0,
  },
  {
    id: 53,
    bg: "#1FAF38",
    main: "Down",
    width: 1,
    type: "risks",
    textLight: 0,
  },
  {
    id: 54,
    bg: "#1FAF38",
    main: "Down",
    width: 1,
    type: "risks",
    textLight: 0,
  },
  {
    id: 55,
    bg: "#FFF500",
    main: "Average",
    width: 1,
    type: "risks",
    textLight: 0,
  },
  {
    id: 56,
    bg: "transparent",
    main: "",
    width: 2,
    type: null,
    textLight: 0,
  },
  {
    id: 57,
    bg: "transparent",
    main: "Critical",
    width: 1,
    type: null,
    textLight: 0,
  },
  {
    id: 58,
    bg: "transparent",
    main: "Severe",
    width: 1,
    type: null,
    textLight: 0,
  },
  {
    id: 59,
    bg: "transparent",
    main: "Moderate",
    width: 1,
    type: null,
    textLight: 0,
  },
  {
    id: 60,
    bg: "transparent",
    main: "Minor",
    width: 1,
    type: null,
    textLight: 0,
  },
  {
    id: 61,
    bg: "transparent",
    main: "Negligible",
    width: 1,
    type: null,
    textLight: 0,
  },
  {
    id: 62,
    bg: "transparent",
    main: "Negligible",
    width: 1,
    type: null,
    textLight: 0,
  },
  {
    id: 63,
    bg: "transparent",
    main: "Minor",
    width: 1,
    type: null,
    textLight: 0,
  },
  {
    id: 64,
    bg: "transparent",
    main: "Moderate",
    width: 1,
    type: null,
    textLight: 0,
  },
  {
    id: 65,
    bg: "transparent",
    main: "Severe",
    width: 1,
    type: null,
    textLight: 0,
  },
  {
    id: 66,
    bg: "transparent",
    main: "Critical",
    width: 1,
    type: null,
    textLight: 0,
  },
];

function RisksOpportunities() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" className="fw-bold">
            Risks and Opportunities
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className="d-flex justify-content-end">
            <ButtonCustom
              color="secondary"
              label={
                <Typography>
                  <Add className="me-1" />
                  Add
                </Typography>
              }
              variant={"contained"}
            />
          </div>
        </Grid>
      </Grid>
      <div className="w-100" style={{ overflowX: "auto" }}>
        <Box
          sx={{
            position: "relative",
            minHeight: "550px",
            maxWidth: "1200px",
            minWidth: "1200px",
            transform: "translateX(-10%)",
          }}
          className=" mx-auto mt-5"
        >
          <Typography
            className="fw-bold text-uppercase"
            sx={{
              position: "absolute",
              transform: "rotate(270deg) translate(0%,30%) ",
              top: "50%",
              left: "0px",
            }}
          >
            Probability of occurance
          </Typography>
          <Typography
            className="fw-bold text-uppercase"
            sx={{
              position: "absolute",
              transform: "translateX(145%)",
              bottom: "0%",
              left: "50%",
            }}
          >
            Severity
          </Typography>
          <Grid container className=" ms-5 ps-4" spacing={0.2}>
            <Grid item xs={2} />
            <Grid item xs={5}>
              <Box
                sx={{
                  background:
                    "linear-gradient(90deg, #022860 0%, #0649AD 23.96%, #0066FF 54.51%, #9FC6FF 100%)",
                  color: (theme) => theme.palette.light.main,
                }}
                className="p-3 d-flex laign-items-center justify-content-center"
              >
                <Typography className="fw-bold text-uppercase">
                  Opportunities
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={5}>
              <Box
                sx={{
                  background:
                    "linear-gradient(90deg, #1FAF38 5.21%, #C87800 24.48%, #C50000 43.23%, #292626 87.5%)",
                  color: (theme) => theme.palette.light.main,
                }}
                className="p-3 d-flex laign-items-center justify-content-center"
              >
                <Typography className="fw-bold text-uppercase">
                  Risks
                </Typography>
              </Box>
            </Grid>

            {GRAPH.map((item, i) => (
              <Grid item xs={item.width} key={item.id + i}>
                <RisksOpprtunitiesItem item={item} GRAPH={GRAPH} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default RisksOpportunities;
