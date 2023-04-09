import { FileDownload } from "@mui/icons-material";
import { Card, Checkbox, Chip, Dialog, Typography } from "@mui/material";
import React from "react";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

function PlanCard() {
  return (
    <>
      {/* <Dialog maxWidth="md" fullWidth open={true}>
        <DocViewer
          pluginRenderers={DocViewerRenderers}
          documents={[
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Putnam_House_-_floor_plans.jpg/1200px-Putnam_House_-_floor_plans.jpg",
          ]}
        />
      </Dialog> */}
      <Card
        sx={{
          background: "white",
          boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.15)",
          borderRadius: "10px",
          cursor: "pointer",
          overflow: "hidden",
          position: "relative",
        }}
        className=""
        elevation={0}
      >
        <Checkbox sx={{ position: "absolute", right: 0, top: 0 }} />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Putnam_House_-_floor_plans.jpg/1200px-Putnam_House_-_floor_plans.jpg"
          alt="project-1"
          width="100%"
          height={"200px"}
        />
        <div className="p-3 py-1 pb-2">
          <Typography className="fw-bold mt-3 d-flex align-items-center">
            Plan Name{" "}
            <Chip
              label={Math.floor(Math.random() * 10)}
              color="primary"
              size="small"
              className="ms-1"
              sx={{ borderRadius: "5px" }}
            />
          </Typography>
          <Typography className="text-muted " variant="caption">
            Darwing name Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Asperiores, ex.
          </Typography>

          <div className="d-flex align-items-center justify-content-end mt-2">
            <FileDownload fontSize="small" className="me-2" />
            <Chip
              label="PDF"
              color="error"
              size="small"
              sx={{ borderRadius: "5px" }}
            />
          </div>
        </div>
      </Card>
    </>
  );
}

export default PlanCard;
