import { Button, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const Custom = styled(Button, {
  shouldForwardProp: (prop) => prop !== "textDark",
})(({ theme, textDark }) => ({
  textTransform: "capitalize",
  color: textDark ? theme.palette.grey.dark : theme.palette.light.main,
  borderRadius: "8px",
  height: "40px",
  minWidth: 0,
  p: 0,
  m: 0,
}));

function ButtonCustom(props) {
  return (
    <Custom disableElevation {...props}>
      {!props.loading ? props.label : <CircularProgress size={24} />}
    </Custom>
  );
}

export default ButtonCustom;
