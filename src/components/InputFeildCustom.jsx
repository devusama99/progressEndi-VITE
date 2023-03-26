import { TextField } from "@mui/material";
import { alpha, styled } from "@mui/system";
import React from "react";

const CustomTextFeild = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "border",
})(({ theme, border }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: theme.palette.light.main,
    "& fieldset": {
      borderColor: border
        ? alpha(theme.palette.grey.light, 0.5)
        : "transparent",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.grey.light,
    },
    "&.Mui-focused fieldset": {
      borderColor: alpha(theme.palette.primary.main, 0.4),
    },
  },
}));

function InputFeildCustom(props) {
  return <CustomTextFeild size={"small"} {...props} />;
}

export default InputFeildCustom;
