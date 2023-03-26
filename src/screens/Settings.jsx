import {
  AccountBalance,
  Edit,
  Info,
  Key,
  Language,
  Person,
  YouTube,
} from "@mui/icons-material";
import {
  Divider,
  List,
  ListItem,
  styled,
  Switch,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

function Settings() {
  return (
    <Container maxWidth="lg" className="mb-3">
      <Typography variant="h5" className="fw-bold mb-3 text-center">
        Settings
      </Typography>
      <List>
        <ListItem>
          <Typography className="fw-bold">Security</Typography>
        </ListItem>
        <Divider className="my-2" />
        <ListItem>
          <div className="d-flex align-items-center justify-content-between w-100">
            <Typography className="text-muted">Change Password</Typography>
            <Key color="grey" />
          </div>
        </ListItem>
        <Divider className="my-2" />
        <ListItem>
          <div className="d-flex align-items-center justify-content-between w-100">
            <Typography className="text-muted">
              Change Email/Username
            </Typography>
            <Person color="grey" />
          </div>
        </ListItem>
        <Divider className="my-2" />
        <ListItem>
          <Typography className="fw-bold">General</Typography>
        </ListItem>
        <Divider className="my-2" />
        <ListItem>
          <div className="d-flex align-items-center justify-content-between w-100">
            <Typography className="text-muted">Notifications</Typography>
            <IOSSwitch checked />
          </div>
        </ListItem>
        <Divider className="my-2" />
        <ListItem>
          <div className="d-flex align-items-center justify-content-between w-100">
            <Typography className="text-muted">
              Notifications by Email
            </Typography>
            <IOSSwitch />
          </div>
        </ListItem>
        <Divider className="my-2" />
        <ListItem>
          <div className="d-flex align-items-center justify-content-between w-100">
            <Typography className="text-muted">
              Change Profile Picture
            </Typography>
            <Edit color="grey" />
          </div>
        </ListItem>
        <Divider className="my-2" />
        <ListItem>
          <div className="d-flex align-items-center justify-content-between w-100">
            <Typography className="text-muted">User ID</Typography>
            <Edit color="grey" />
          </div>
        </ListItem>
        <Divider className="my-2" />
        <ListItem>
          <div className="d-flex align-items-center justify-content-between w-100">
            <Typography className="text-muted">Language</Typography>
            <Language color="grey" />
          </div>
        </ListItem>
        <Divider className="my-2" />
        <ListItem>
          <Typography className="fw-bold">Plans</Typography>
        </ListItem>
        <Divider className="my-2" />
        <ListItem>
          <div className="d-flex align-items-center justify-content-between w-100">
            <Typography className="text-muted">
              Change Subscription Plan
            </Typography>
            <AccountBalance color="grey" />
          </div>
        </ListItem>
        <Divider className="my-2" />
        <ListItem>
          <Typography className="fw-bold">Video Guide</Typography>
        </ListItem>
        <Divider className="my-2" />
        <ListItem>
          <div className="d-flex align-items-center justify-content-between w-100">
            <Typography className="text-muted">View video guide</Typography>
            <YouTube color="grey" />
          </div>
        </ListItem>
        <Divider className="my-2" />
        <ListItem>
          <Typography className="fw-bold">Referral</Typography>
        </ListItem>
        <Divider className="my-2" />
        <ListItem>
          <div className="d-flex align-items-center justify-content-between w-100">
            <Typography className="text-muted">Referral Information</Typography>
            <Info color="grey" />
          </div>
        </ListItem>
      </List>
    </Container>
  );
}

export default Settings;
