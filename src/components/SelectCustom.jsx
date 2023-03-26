import { Select } from "@mui/material";
import { alpha, styled } from "@mui/system";
import React from "react";

const CustomTextFeild = styled(Select, {
  shouldForwardProp: (prop) => prop !== "border",
})(({ theme, border }) => ({
  backgroundColor: theme.palette.grey.dark,
  color: theme.palette.light.main,
  height: "50px",
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
    borderColor: border ? alpha(theme.palette.light.main, 1) : "transparent",
  },
  "&.Mui-focused .MuiSvgIcon-root ": {
    fill: alpha(theme.palette.light.main, 1),
  },
  "& .MuiSvgIcon-root ": {
    fill: alpha(theme.palette.light.main, 1),
  },
}));

function SelectCustom(props) {
  return (
    <CustomTextFeild size={"small"} {...props}>
      {props.children}
    </CustomTextFeild>
  );
}

export default SelectCustom;
