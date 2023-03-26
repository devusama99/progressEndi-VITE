import { Typography } from "@mui/material";
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
      <Slick>
        <div className="pe-2" style={{ maxWidth: "280px" }}>
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
        </div>
        <div className="pe-2">
          <Card style={{ overflow: "hidden" }}>
            <ReactPlayer
              controls
              height={170}
              width={280}
              url={
                "https://www.youtube.com/watch?v=J2UwI6FDs-k&ab_channel=Salesforce"
              }
            />
          </Card>
        </div>
        <div className="pe-2">
          <Card style={{ overflow: "hidden" }}>
            <ReactPlayer
              controls
              height={170}
              width={280}
              url={
                "https://www.youtube.com/watch?v=EUfzHKBvkeY&ab_channel=IndraIbrahim"
              }
            />
          </Card>
        </div>
        <div className="pe-2">
          <Card style={{ overflow: "hidden" }}>
            <ReactPlayer
              controls
              height={170}
              width={280}
              url={
                "https://www.youtube.com/watch?v=vLMo5CY0skU&ab_channel=JoeKeane"
              }
            />
          </Card>
        </div>
        <div className="pe-2">
          <Card style={{ overflow: "hidden" }}>
            <ReactPlayer
              controls
              height={170}
              width={280}
              url={
                "https://www.youtube.com/watch?v=bPzDzsOBv5o&ab_channel=Non-FunctionalClub"
              }
            />
          </Card>
        </div>
      </Slick>
    </Container>
  );
}

export default VideoTutorials;
