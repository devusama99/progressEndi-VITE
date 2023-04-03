import { Attachment, Comment, Flare } from "@mui/icons-material";
import { Avatar, AvatarGroup, Card, Chip, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import EventsModal from "./EventsModal";

function EventCard() {
  const navigate = useNavigate();
  return (
    <>
      <EventsModal />
      <Card
        onClick={() => navigate("/app/1")}
        sx={{
          background: "white",
          boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.05)",
          borderRadius: "10px",
          cursor: "pointer",
          width: 250,
        }}
        className="p-3"
        elevation={0}
      >
        <Typography className="my-2" variant="body2">
          A desktop publishing packages and web page editors now use Lorem Ipsum
          as their default model text....
        </Typography>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            {" "}
            <Chip
              label="TRI"
              color="primary"
              size="small"
              className="mb-2"
              sx={{ borderRadius: "1px" }}
            />
            <Chip
              label="ED"
              color="info"
              size="small"
              className="mb-2 ms-2"
              sx={{ borderRadius: "1px" }}
            />
          </div>
          <div className="d-flex justify-content-end align-items-center">
            <Typography className="text-muted me-1" sx={{ fontSize: "12px" }}>
              Untouched
            </Typography>
            <Flare color="primary" />
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between mt-2">
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
      </Card>
    </>
  );
}

export default EventCard;
