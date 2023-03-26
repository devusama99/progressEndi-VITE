import { createBrowserRouter } from "react-router-dom";
import Archive from "../screens/Archives";
import CADViewer from "../screens/CADViewer";
import Collabrators from "../screens/Collabrators";
import Documents from "../screens/Documents";
import IFCViewer from "../screens/IFCViewer";
import Images from "../screens/Images";
import MainApp from "../screens/MainApp";
import Metrics from "../screens/Metrics";
import Plans from "../screens/Plans";
import Projects from "../screens/Projects";
import ProjectsEvents from "../screens/ProjectsEvents";
import ProjectView from "../screens/ProjectView";
import Reports from "../screens/Reports";
import Settings from "../screens/Settings";
import SignIn from "../screens/SignIn";
import Signup from "../screens/Signup";
import TimeAndCost from "../screens/TimeAndCost";
import Timeline from "../screens/Timeline";
import VideoTutorials from "../screens/VideoTutorials";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/app",
    element: <MainApp />,
    children: [
      {
        path: "",
        element: <Projects />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "tutorials",
        element: <VideoTutorials />,
      },
    ],
  },
  {
    path: "/app/:id",
    element: <ProjectView />,
    children: [
      {
        path: "",
        element: <ProjectsEvents />,
      },
      {
        path: "plans",
        element: <Plans />,
      },
      {
        path: "documents",
        element: <Documents />,
      },
      {
        path: "images",
        element: <Images />,
      },
      {
        path: "collabrators",
        element: <Collabrators />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "archives",
        element: <Archive />,
      },
      {
        path: "time-cost",
        element: <TimeAndCost />,
      },
      {
        path: "metrics",
        element: <Metrics />,
      },
      {
        path: "ifc",
        element: <IFCViewer />,
      },
      {
        path: "cad",
        element: <CADViewer />,
      },
      {
        path: "timeline",
        element: <Timeline />,
      },
    ],
  },
]);