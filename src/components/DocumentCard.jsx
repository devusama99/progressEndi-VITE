import { Close, FileDownload } from "@mui/icons-material";
import {
  alpha,
  Card,
  Chip,
  Dialog,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import PDF from "../assets/PDF.pdf";
import PDFIcon from "../assets/pdf-icon.png";
import DocViewer, { DocViewerRenderers, PDFRenderer } from "react-doc-viewer";

function DocumentCard() {
  const [viewDoc, setViewDoc] = useState(false);
  const toggleViewDoc = () => {
    setViewDoc(!viewDoc);
  };
  const [docThumbnail, setDocThumbnail] = useState(null);
  const thumb = async () => {
    const CoreControls = window.CoreControls;
    CoreControls.setWorkerPath("/webviewer/core");
    const doc = await CoreControls.createDocument(PDF);
    doc.loadCanvas({
      pageNumber: 1,
      drawComplete: (thumbnail) => setDocThumbnail(thumbnail),
    });
  };
  useEffect(() => {
    thumb();
  }, []);
  return (
    <>
      <Dialog open={viewDoc} maxWidth="md" fullWidth onClose={toggleViewDoc}>
        <div className="d-flex justify-content-end">
          <IconButton onClick={toggleViewDoc}>
            <Close />
          </IconButton>
        </div>

        <Box className="w-100">
          <DocViewer
            pluginRenderers={DocViewerRenderers}
            config={{
              header: {
                disableHeader: true,
              },
            }}
            documents={[
              {
                uri: PDF,
              },
            ]}
          />
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
        elevation={0}
        onClick={toggleViewDoc}
      >
        <div className="d-flex align-items-center justify-content-center flex-column ">
          <Box
            sx={{ height: "200px", overflow: "hidden", position: "relative" }}
            className={
              docThumbnail
                ? ""
                : "d-flex align-items-center justify-content-center"
            }
          >
            <img
              src={docThumbnail ? docThumbnail.toDataURL() : PDFIcon}
              alt="pdf"
              width={docThumbnail ? "100%" : "30px"}
            />
          </Box>
          <Typography className="mt-2">
            License Agreement Document.pdf
          </Typography>
        </div>
        <Divider
          className="mt-3"
          sx={{
            border: (theme) =>
              `1px solid ${alpha(theme.palette.grey.light, 1)}`,
          }}
        />
        <div className="p-3 ">
          <Typography className="text-muted mt-3" variant="caption">
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

export default DocumentCard;
