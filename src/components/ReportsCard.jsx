import { FileDownload } from "@mui/icons-material";
import {
  alpha,
  Card,
  Checkbox,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import PDFIcon from "../assets/pdf-icon.png";

function ReportsCards() {
  return (
    <Card
      sx={{
        background: "white",
        boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.05)",
        borderRadius: "10px",
        cursor: "pointer",
        overflow: "hidden",
      }}
      className="p-3 pt-1 "
      elevation={0}
    >
      <div className="d-flex justify-content-end">
        <Checkbox />
      </div>
      <div className="d-flex align-items-center justify-content-center flex-column py-5">
        <img src={PDFIcon} alt="pdf" width={"30px"} />
      </div>
      <Divider
        className="my-3"
        sx={{
          border: (theme) => `1px solid ${alpha(theme.palette.grey.light, 1)}`,
        }}
      />
      <div>
        <Typography className="mt-2">License Agreement Document.pdf</Typography>

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
  );
}

export default ReportsCards;
