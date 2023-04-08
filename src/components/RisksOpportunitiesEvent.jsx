import { Comment, Folder } from "@mui/icons-material";
import {
  Avatar,
  AvatarGroup,
  Box,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

function RisksOpportunitiesEvent() {
  return (
    <Box
      className="w-100 p-2 my-2"
      sx={{
        boxShadow: "0px 0px 25px rgba(217, 217, 217, 0.8)",
        borderRadius: 1,
      }}
    >
      <Grid container>
        <Grid item xs={7}>
          <div>
            <Typography sx={{ fontSize: "12px" }}>Event Title</Typography>
            <Typography className="text-muted" sx={{ fontSize: "10px" }}>
              Due Date 12/10/2023
            </Typography>
          </div>
        </Grid>

        <Grid
          item
          xs
          className="d-none d-md-flex align-items-center justify-content-end"
        >
          <Chip
            color="primary"
            sx={{ borderRadius: 1 }}
            size="small"
            label="Low"
            className="me-2"
          />
          <AvatarGroup
            max={4}
            className="me-2"
            componentsProps={{
              additionalAvatar: {
                sx: {
                  height: 15,
                  width: 15,
                  fontSize: "12px",
                },
              },
            }}
          >
            <Avatar
              sx={{ height: 15, width: 15 }}
              src="https://xsgames.co/randomusers/assets/avatars/male/76.jpg"
            ></Avatar>
            <Avatar
              sx={{ height: 15, width: 15 }}
              src="https://xsgames.co/randomusers/assets/avatars/male/76.jpg"
            ></Avatar>
            <Avatar
              sx={{ height: 15, width: 15 }}
              src="https://xsgames.co/randomusers/assets/avatars/male/76.jpg"
            ></Avatar>
            <Avatar
              sx={{ height: 15, width: 15 }}
              src="https://xsgames.co/randomusers/assets/avatars/male/76.jpg"
            ></Avatar>
            <Avatar
              sx={{ height: 15, width: 15 }}
              src="https://xsgames.co/randomusers/assets/avatars/male/76.jpg"
            ></Avatar>
            <Avatar
              sx={{ height: 15, width: 15 }}
              src="https://xsgames.co/randomusers/assets/avatars/male/76.jpg"
            ></Avatar>
          </AvatarGroup>
          <div className="d-flex align-items-center me-2">
            <Comment sx={{ fontSize: "14px" }} />
            <Typography className="ms-1" sx={{ fontSize: "14px" }}>
              12
            </Typography>
          </div>
          <div className="d-flex align-items-center">
            <Folder sx={{ fontSize: "14px" }} />
            <Typography className="ms-1" sx={{ fontSize: "14px" }}>
              5
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default RisksOpportunitiesEvent;
