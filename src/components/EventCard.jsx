import { Attachment, Comment, Flare } from "@mui/icons-material";
import { Avatar, AvatarGroup, Card, Chip, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

function EventCard() {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate("/app/1")}
      sx={{
        background: "white",
        boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.05)",
        borderRadius: "10px",
        cursor: "pointer",
      }}
      className="p-3"
      elevation={0}
    >
      <div className="d-flex align-items-center justify-content-between">
        <Typography className="fw-bold ">Event Title</Typography>
        <Flare color="primary" />
      </div>
      <Typography className="text-muted mt-3" variant="caption">
        Due Date 1/1/2023
      </Typography>

      <Typography className="my-2" variant="body2">
        A desktop publishing packages and web page editors now use Lorem Ipsum
        as their default model text....
      </Typography>
      <Chip
        label="Low"
        color="warning"
        size="small"
        className="mb-2"
        sx={{ borderRadius: "5px" }}
      />

      <div className="d-flex align-items-center justify-content-between">
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
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <Comment
              fontSize="small"
              sx={{ fontSize: 18 }}
              className="text-muted"
            />
            <Typography className="text-muted ms-1" variant="body2">
              Comments
            </Typography>
          </div>
          <div className="d-flex align-items-center ms-1">
            <Attachment fontSize="small" className="text-muted" />
            <Typography className="text-muted ms-1" variant="body2">
              Files
            </Typography>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default EventCard;
