import { Close } from "@mui/icons-material";
import { Card, Dialog, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

function ImagesCard() {
  const [showImage, setShowImage] = useState(false);
  const toggleShowImage = () => {
    setShowImage(!showImage);
  };
  return (
    <>
      <Dialog
        open={showImage}
        maxWidth="lg"
        fullWidth
        onClose={toggleShowImage}
      >
        <Box className="w-100 h-100" sx={{ position: "relative" }}>
          <img
            src="https://thumbs.dreamstime.com/b/construction-site-silhouette-964422.jpg"
            alt="card-popup"
            width={"100%"}
          />
          <IconButton
            onClick={toggleShowImage}
            sx={{ position: "absolute", right: 10, top: 10 }}
          >
            <Close />
          </IconButton>
        </Box>
      </Dialog>
      <Card
        sx={{
          background: "white",
          boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.15)",
          borderRadius: "10px",
          cursor: "pointer",
          overflow: "hidden",
        }}
        className="d-flex flex-column align-items-start p-3"
        elevation={0}
        onClick={toggleShowImage}
      >
        <img
          src="https://thumbs.dreamstime.com/b/construction-site-silhouette-964422.jpg"
          alt="img-1"
          width="100%"
          height={"200px"}
          style={{ borderRadius: "10px" }}
        />
        <div className="d-flex justify-content-start">
          <Typography className="fw-bold mt-3 text-start ">
            Event Title
          </Typography>
        </div>
      </Card>
    </>
  );
}

export default ImagesCard;
