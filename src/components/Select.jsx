import { Select } from "@mui/material";
import { alpha, styled } from "@mui/system";
import React from "react";

const CustomTextFeild = styled(Select, {
  shouldForwardProp: (prop) => prop !== "border",
})(({ theme, border }) => ({
  color: theme.palette.primary.main,
  textAlign: "center",
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: border ? alpha(theme.palette.grey.light, 0.5) : "transparent",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: border
      ? alpha(theme.palette.primary.main, 0.5)
      : "transparent",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: border ? alpha(theme.palette.grey.light, 1) : "red",
  },
  "&.Mui-focused .MuiSvgIcon-root ": {
    fill: alpha(theme.palette.primary.main, 1),
  },
  "& .MuiSvgIcon-root ": {
    fill: alpha(theme.palette.grey.main, 1),
  },
}));

function SelectForm(props) {
  return (
    <CustomTextFeild size={"small"} {...props}>
      {props.children}
    </CustomTextFeild>
  );
}

export default SelectForm;
