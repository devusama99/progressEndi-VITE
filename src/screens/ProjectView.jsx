import * as React from "react";
import logo from "../assets/DrawerLogo.png";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountMenu from "../components/AccountMenu";
import { Outlet, useLocation, useNavigate } from "react-router";
import {
  Archive,
  BarChart,
  BlurLinear,
  DescriptionOutlined,
  Home,
  ImageOutlined,
  MapOutlined,
  NoteAddOutlined,
  PeopleAlt,
  PointOfSale,
  ThreeDRotation,
  ViewInArOutlined,
  ViewModule,
  Work,
  Menu,
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";

const drawerWidth = window.innerWidth > 900 ? 60 : 0;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,

    [theme.breakpoints.up("md")]: {
      maxWidth: `calc(100% - ${open ? 220 : drawerWidth}px)`,
    },
    width: "100%",
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    maxHeight: "95vh",
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  // paddingTop: theme.spacing(2),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function ProjectView() {
  const [open, setOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState("");
  const history = useLocation();
  const navigate = useNavigate();
  const DrawerItems = [
    {
      name: "Projects",
      link: "/app",
      icon: <Work color={activeItem === "/app" ? "primary" : "light"} />,
    },
    {
      name: "Home",
      link: undefined,
      icon: <Home color={activeItem === undefined ? "primary" : "light"} />,
    },
    {
      name: "Plans",
      link: "plans",
      icon: (
        <MapOutlined color={activeItem === "plans" ? "primary" : "light"} />
      ),
    },
    {
      name: "Risks",
      link: "risks",
      icon: <ViewModule color={activeItem === "risks" ? "primary" : "light"} />,
    },
    {
      name: "Documents",
      link: "documents",
      icon: (
        <DescriptionOutlined
          color={activeItem === "documents" ? "primary" : "light"}
        />
      ),
    },
    {
      name: "Images",
      link: "images",
      icon: (
        <ImageOutlined color={activeItem === "images" ? "primary" : "light"} />
      ),
    },
    {
      name: "Collabrators",
      link: "collabrators",
      icon: (
        <PeopleAlt
          color={activeItem === "collabrators" ? "primary" : "light"}
        />
      ),
    },
    {
      name: "Reports",
      link: "reports",
      icon: (
        <NoteAddOutlined
          color={activeItem === "reports" ? "primary" : "light"}
        />
      ),
    },
    {
      name: "Archives",
      link: "archives",
      icon: <Archive color={activeItem === "archives" ? "primary" : "light"} />,
    },
    {
      name: "Time & Cost",
      link: "time-cost",
      icon: (
        <PointOfSale color={activeItem === "time-cost" ? "primary" : "light"} />
      ),
    },
    {
      name: "Metrics",
      link: "metrics",
      icon: <BarChart color={activeItem === "metrics" ? "primary" : "light"} />,
    },
    {
      name: "Timeline",
      link: "timeline",
      icon: (
        <BlurLinear color={activeItem === "timeline" ? "primary" : "light"} />
      ),
    },
    {
      name: "IFC Viewer",
      link: "ifc",
      icon: (
        <ViewInArOutlined color={activeItem === "ifc" ? "primary" : "light"} />
      ),
    },
    {
      name: "CAD Viewer",
      link: "cad",
      icon: (
        <ThreeDRotation color={activeItem === "cad" ? "primary" : "light"} />
      ),
    },
  ];

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const drawerNavigate = (link) => {
    if (link && link[0] === "/") {
      navigate(link);
      return;
    }
    const temp = history.pathname.split("/");
    if (temp.length > 3) temp.length = 3;
    if (link) temp.push(link);
    navigate(temp.join("/"));
  };

  useEffect(() => {
    setActiveItem(history.pathname.split("/")[3]);
  }, [history.pathname]);

  const [mobileview, setMobileView] = React.useState(false);
  useEffect(() => {
    if (window.innerWidth > 900) setMobileView(false);
    else setMobileView(true);
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) setMobileView(false);
      else setMobileView(true);
    });
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={true} elevation={0}>
        <Toolbar>
          <div className="d-flex justify-content-between justify-content-md-end w-100">
            <IconButton onClick={toggleDrawer} className="d-md-none">
              <Menu />
            </IconButton>
            <AccountMenu />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: open ? 220 : drawerWidth,
          position: "relative",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? 220 : drawerWidth,
            boxSizing: "border-box",
            overflowX: "hidden",
            backgroundColor: (theme) => theme.palette.drawer,
            color: "white",
          },
        }}
        variant={mobileview ? "temporary" : "persistent"}
        anchor="left"
        open={mobileview ? open : true}
        onClose={toggleDrawer}
      >
        <DrawerHeader className="d-flex flex-column align-items-center mt-5 px-3">
          <img src={logo} alt="logo" className="mt-1 mb-3" />
          <IconButton
            onClick={toggleDrawer}
            className={open ? "align-self-end " : ""}
          >
            {" "}
            {open ? (
              <ChevronLeftIcon color={"light"} />
            ) : (
              <ChevronRightIcon color={"light"} />
            )}
          </IconButton>
        </DrawerHeader>
        <br />
        <List>
          {DrawerItems.map((item, i) => (
            <Tooltip
              key={item.name + i}
              title={!open ? item.name : ""}
              placement="right"
              arrow
            >
              <ListItem
                disablePadding
                style={{ marginBottom: open ? "" : "10px" }}
                onClick={() => {
                  drawerNavigate(item.link);
                  if (mobileview) toggleDrawer();
                }}
                selected={activeItem === item.link}
              >
                <ListItemButton>
                  <ListItemIcon color="primary">{item.icon}</ListItemIcon>
                  {open ? (
                    <ListItemText
                      primary={item.name}
                      className="text-capitalize"
                    />
                  ) : (
                    ""
                  )}
                </ListItemButton>
              </ListItem>
            </Tooltip>
          ))}
        </List>
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
}
