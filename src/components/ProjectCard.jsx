import { QueryBuilder } from "@mui/icons-material";
import {
  Avatar,
  AvatarGroup,
  Card,
  Slider,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router";

const PrettoSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.grey.dark,
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: theme.palette.grey.dark,
    border: "2px solid white",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: theme.palette.grey.dark,
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
}));

function ProjectCard() {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        background: "white",
        boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.15)",
        borderRadius: "10px",
        cursor: "pointer",
      }}
      className="p-3"
      elevation={0}
    >
      {/* <img
        src="https://media.istockphoto.com/id/1267010934/photo/experienced-engineer-explaining-the-problems-in-construction-works-development-after-recession.jpg?s=612x612&w=0&k=20&c=kSbguQRPqhgKgYzy-P-e1ScLXBXWszQn1JimPfE4aWk="
        alt="project-1"
        width="100%"
        height={"150px"}
        style={{ borderRadius: "10px" }}
      /> */}
      <Carousel controls={false} interval={null}>
        {new Array(Math.floor(Math.random() * 10 + 1)).fill(0).map((item) => (
          <Carousel.Item>
            <img
              src="https://media.istockphoto.com/id/1267010934/photo/experienced-engineer-explaining-the-problems-in-construction-works-development-after-recession.jpg?s=612x612&w=0&k=20&c=kSbguQRPqhgKgYzy-P-e1ScLXBXWszQn1JimPfE4aWk="
              alt="project-1"
              width="100%"
              height={"150px"}
              style={{ borderRadius: "10px" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div onClick={() => navigate("/app/1")}>
        <Typography className="fw-bold mt-4" sx={{ lineHeight: 0.5 }}>
          Project 1
        </Typography>
        <Typography className="text-muted mt-3" variant="caption">
          City 1
        </Typography>
        <div className="d-flex align-items-center justify-content-between mt-2">
          <Typography>Progress</Typography>
          <Typography>90%</Typography>
        </div>
        <PrettoSlider value={90} />
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <QueryBuilder className="text-muted" />
            <Typography className="text-muted ms-1" variant="body2">
              15 Days
            </Typography>
          </div>
          <AvatarGroup
            max={4}
            componentsProps={{
              additionalAvatar: {
                sx: {
                  height: 20,
                  width: 20,
                  fontSize: "12px",
                },
              },
            }}
          >
            <Avatar
              sx={{ height: 20, width: 20 }}
              src="https://xsgames.co/randomusers/assets/avatars/male/76.jpg"
            ></Avatar>
            <Avatar
              sx={{ height: 20, width: 20 }}
              src="https://xsgames.co/randomusers/assets/avatars/male/76.jpg"
            ></Avatar>
            <Avatar
              sx={{ height: 20, width: 20 }}
              src="https://xsgames.co/randomusers/assets/avatars/male/76.jpg"
            ></Avatar>
            <Avatar
              sx={{ height: 20, width: 20 }}
              src="https://xsgames.co/randomusers/assets/avatars/male/76.jpg"
            ></Avatar>
            <Avatar
              sx={{ height: 20, width: 20 }}
              src="https://xsgames.co/randomusers/assets/avatars/male/76.jpg"
            ></Avatar>
            <Avatar
              sx={{ height: 20, width: 20 }}
              src="https://xsgames.co/randomusers/assets/avatars/male/76.jpg"
            ></Avatar>
          </AvatarGroup>
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;
