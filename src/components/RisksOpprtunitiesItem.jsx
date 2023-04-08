import { Close } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  styled,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import RisksOpportunitiesEvent from "./RisksOpportunitiesEvent";

const CustomBox = styled(Box)(({ theme }) => ({
  width: "100%",

  position: "relative",
  ":hover": {
    opacity: 0.7,
    cursor: "pointer",
    transition: theme.transitions.create(["opacity"], {
      duration: theme.transitions.duration.standard,
    }),
  },
}));

function RisksOpprtunitiesItem({ item, GRAPH }) {
  const [type, setType] = useState("opportunities");
  const [activeItem, setActiveItem] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const toggleModal = () => {
    setOpenDialog(!openDialog);
  };
  return (
    <>
      <Dialog open={openDialog} maxWidth="sm" fullWidth onClose={toggleModal}>
        <DialogTitle>
          <div
            className="d-flex justify-content-center"
            style={{ position: "relative" }}
          >
            <IconButton
              sx={{ justifySelf: "end", position: "absolute", right: 0 }}
              onClick={toggleModal}
            >
              <Close />
            </IconButton>
            <ToggleButtonGroup
              exclusive
              value={type}
              onChange={(e, val) => setType(val)}
            >
              <ToggleButton
                className="text-capitalize py-1"
                sx={{ width: "100px" }}
                value="opportunities"
              >
                Opportunities
              </ToggleButton>
              <ToggleButton
                className="text-capitalize py-1"
                sx={{ width: "100px" }}
                value="risks"
              >
                Risks
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography className="fw-bold">
                List of {type[0].toUpperCase() + type.slice(1)} (G1,P4)
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" className="text-muted">
                G1: Severity Level 1 Opportunity
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" className="text-muted">
                P4: Probability Level 4 Opportunit
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={0.2}>
                <Grid item xs={12}>
                  <Box
                    className="p-2"
                    sx={{
                      background:
                        type === "risks"
                          ? "linear-gradient(90deg, #1FAF38 5.21%, #C87800 24.48%, #C50000 43.23%, #292626 87.5%)"
                          : "linear-gradient(90deg, #022860 0%, #0649AD 23.96%, #0066FF 54.51%, #9FC6FF 100%)",
                      color: "white",
                    }}
                  >
                    <Typography className="text-uppercase text-center">
                      {type}
                    </Typography>
                  </Box>
                </Grid>
                {GRAPH.filter((ele) => ele.type === type).map((ele, i) => (
                  <Grid item xs={12 / 5} key={ele.id}>
                    <div
                      style={{
                        opacity: ele.id === activeItem ? 1 : 0.3,
                        minWidth: "40px",
                      }}
                      onClick={() => setActiveItem(ele.id)}
                    >
                      <CustomBox
                        sx={{
                          backgroundColor: ele.bg,
                          paddingTop: ele.width > 1 ? "30%" : "60%",
                          color: ele.textLight ? "#fff" : "#000",
                        }}
                      >
                        <div
                          className="d-flex flex-column align-items-center justify-content-center p-2"
                          style={{
                            position: "absolute",
                            right: 0,
                            left: 0,
                            top: 0,
                            bottom: 0,
                          }}
                        >
                          <Typography
                            className={
                              ele.width > 1
                                ? "text-end w-100"
                                : "text-center w-100"
                            }
                            variant="body2"
                          >
                            {ele.main.split(" ").map((ite, i) => (
                              <span key={"name" + i}>{ite[0]}</span>
                            ))}
                          </Typography>
                          <Typography>
                            {Math.floor(Math.random() * 100)}
                          </Typography>
                        </div>
                      </CustomBox>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <RisksOpportunitiesEvent />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <CustomBox
        sx={{
          backgroundColor: item.bg,
          paddingTop: item.width > 1 ? "40%" : "80%",
          color: item.textLight ? "#fff" : "#000",
        }}
        onClick={() => {
          setActiveItem(item.id);
          toggleModal();
        }}
      >
        <div
          className="d-flex flex-column align-items-center justify-content-center p-2"
          style={{ position: "absolute", right: 0, left: 0, top: 0, bottom: 0 }}
        >
          <Typography
            className={item.width > 1 ? "text-end w-100" : "text-center w-100"}
            variant="body2"
            sx={{
              color:
                item.bg !== "#FFF500" &&
                item.bg !== "#FFB800" &&
                item.bg !== "#9FC6FF" &&
                item.bg !== "transparent"
                  ? "#fff"
                  : "#000",
            }}
          >
            {item.main}
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              color:
                item.bg !== "#FFF500" &&
                item.bg !== "#FFB800" &&
                item.bg !== "#9FC6FF"
                  ? "#fff"
                  : "#000",
            }}
          >
            {item.bg === "transparent" ? "" : " 9999"}
          </Typography>
        </div>
      </CustomBox>
    </>
  );
}

export default RisksOpprtunitiesItem;
