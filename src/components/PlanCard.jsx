import { FileDownload } from "@mui/icons-material";
import { Card, Chip, Dialog, Typography } from "@mui/material";
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
        }}
        className=""
        elevation={0}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Putnam_House_-_floor_plans.jpg/1200px-Putnam_House_-_floor_plans.jpg"
          alt="project-1"
          width="100%"
          height={"200px"}
        />
        <div className="p-3 py-1 pb-2">
          <Typography className="fw-bold mt-3">Plan Name</Typography>
          <Typography className="text-muted " variant="caption">
            Project Name | Service Name | Package Name
          </Typography>

          <div className="d-flex align-items-center justify-content-end mt-1">
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
