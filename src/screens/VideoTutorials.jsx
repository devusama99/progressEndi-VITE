import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Card } from "react-bootstrap";
import ReactPlayer from "react-player";
import Slick from "../components/Slick";

function VideoTutorials() {
  return (
    <Container className="pb-4" sx={{ overflowX: "hidden" }}>
      <Typography variant="h5" className="fw-bold">
        Self Training
      </Typography>
      <div
        className="d-flex flex-column my-3 mx-auto w-100"
        style={{ maxWidth: "660px" }}
      >
        <Typography className="mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non
          eveniet repellat veniam repellendus, quos ullam aperiam excepturi.
        </Typography>
        <ReactPlayer
          controls
          width={"100%"}
          url={
            "https://www.youtube.com/watch?v=ZK-rNEhJIDs&ab_channel=WhataStory-VideosforInnovativeProducts"
          }
        />
      </div>
      <Typography className="fw-bold text-uppercase mt-4 mb-3">
        related
      </Typography>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="d-flex.align-items-center justify-content-center"
        >
          <Card style={{ overflow: "hidden" }}>
            <ReactPlayer
              controls
              height={170}
              width={"100%"}
              url={
                "https://www.youtube.com/watch?v=W-f6F2gxrl4&ab_channel=NodeApp"
              }
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="d-flex.align-items-center justify-content-center"
        >
          <Card style={{ overflow: "hidden" }}>
            <ReactPlayer
              controls
              height={170}
              width={"100%"}
              url={
                "https://www.youtube.com/watch?v=W-f6F2gxrl4&ab_channel=NodeApp"
              }
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="d-flex.align-items-center justify-content-center"
        >
          <Card style={{ overflow: "hidden" }}>
            <ReactPlayer
              controls
              height={170}
              width={"100%"}
              url={
                "https://www.youtube.com/watch?v=W-f6F2gxrl4&ab_channel=NodeApp"
              }
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="d-flex.align-items-center justify-content-center"
        >
          <Card style={{ overflow: "hidden" }}>
            <ReactPlayer
              controls
              height={170}
              width={"100%"}
              url={
                "https://www.youtube.com/watch?v=W-f6F2gxrl4&ab_channel=NodeApp"
              }
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="d-flex.align-items-center justify-content-center"
        >
          <Card style={{ overflow: "hidden" }}>
            <ReactPlayer
              controls
              height={170}
              width={"100%"}
              url={
                "https://www.youtube.com/watch?v=W-f6F2gxrl4&ab_channel=NodeApp"
              }
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="d-flex.align-items-center justify-content-center"
        >
          <Card style={{ overflow: "hidden" }}>
            <ReactPlayer
              controls
              height={170}
              width={"100%"}
              url={
                "https://www.youtube.com/watch?v=W-f6F2gxrl4&ab_channel=NodeApp"
              }
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="d-flex.align-items-center justify-content-center"
        >
          <Card style={{ overflow: "hidden" }}>
            <ReactPlayer
              controls
              height={170}
              width={"100%"}
              url={
                "https://www.youtube.com/watch?v=W-f6F2gxrl4&ab_channel=NodeApp"
              }
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="d-flex.align-items-center justify-content-center"
        >
          <Card style={{ overflow: "hidden" }}>
            <ReactPlayer
              controls
              height={170}
              width={"100%"}
              url={
                "https://www.youtube.com/watch?v=W-f6F2gxrl4&ab_channel=NodeApp"
              }
            />
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="d-flex.align-items-center justify-content-center"
        >
          <Card style={{ overflow: "hidden" }}>
            <ReactPlayer
              controls
              height={170}
              width={"100%"}
              url={
                "https://www.youtube.com/watch?v=W-f6F2gxrl4&ab_channel=NodeApp"
              }
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default VideoTutorials;
