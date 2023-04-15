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
import { useNavigate } from "react-router-dom";
import IFCIcon from "../assets/ifc-file-icon.png";

function IFCCard() {
  const navigate = useNavigate();
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
      onClick={() => {
        navigate("123");
      }}
    >
      <div className="d-flex align-items-center justify-content-center flex-column py-5">
        <img src={IFCIcon} alt="pdf" width={"60px"} />
      </div>
      <Divider
        className="my-3"
        sx={{
          border: (theme) => `1px solid ${alpha(theme.palette.grey.light, 1)}`,
        }}
      />
      <div>
        <Typography className="mt-2">Building.ifc</Typography>
        <div className="d-flex align-items-center justify-content-end mt-2">
          <FileDownload fontSize="small" className="me-2" />
          <Chip
            label="IFC"
            color="success"
            size="small"
            sx={{ borderRadius: "5px" }}
          />
        </div>
      </div>
    </Card>
  );
}

export default IFCCard;
