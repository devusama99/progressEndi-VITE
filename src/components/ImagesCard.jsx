import { Card, Typography } from "@mui/material";
import React from "react";

function ImagesCard() {
  return (
    <Card
      sx={{
        background: "white",
        boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.15)",
        borderRadius: "10px",
        cursor: "pointer",
        overflow: "hidden",
      }}
      className="d-flex flex-column align-items-center p-3"
      elevation={0}
    >
      <img
        src="https://thumbs.dreamstime.com/b/construction-site-silhouette-964422.jpg"
        alt="img-1"
        width="100%"
        height={"200px"}
        style={{ borderRadius: "10px" }}
      />
      <div>
        <Typography className="fw-bold mt-3">Image Name</Typography>
        <Typography className="text-muted " variant="caption">
          Project Name | Service Name | Package Name
        </Typography>
      </div>
    </Card>
  );
}

export default ImagesCard;
