import { Attachment, Circle, Comment, Flare } from "@mui/icons-material";
import { Avatar, AvatarGroup, Card, Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";
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
        }}
        className="p-3"
        elevation={0}
      >
        <Typography className="my-2" variant="body2">
          A desktop publishing packages and web page editors now use Lorem Ipsum
          as their default model text....
        </Typography>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <div className="d-flex align-items-center gap-2">
            <Chip
              label="TRI"
              color="primary"
              size="small"
              sx={{ borderRadius: "1px" }}
            />
            <Chip
              label="ED"
              color="info"
              size="small"
              sx={{ borderRadius: "1px" }}
            />
            <Box
              sx={{
                height: 18,
                width: 18,
                backgroundColor: (theme) =>
                  [
                    theme.palette.error.main,
                    theme.palette.info.main,
                    theme.palette.primary.main,
                  ][Math.floor(Math.random() * (2 - 0 + 1) + 0)],
                borderRadius: "50%",
              }}
            />
          </div>

          <Flare color="primary" />
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
                {Math.floor(Math.random() * 10)}
              </Typography>
            </div>
            <div className="d-flex align-items-center ms-1">
              <Attachment fontSize="small" className="text-muted" />
              <Typography className="text-muted ms-1" variant="body2">
                {Math.floor(Math.random() * 10)}
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
