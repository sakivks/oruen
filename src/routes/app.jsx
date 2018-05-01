import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
// import Typography from "views/Typography/Typography.jsx";
import AboutUs from "views/AboutUs/AboutUs.jsx";
import HowItWorks from "views/HowItWorks/HowItWorks.jsx";
import Onboarding from "views/Onboarding/Onboarding.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";

import {
    Dashboard, Person, ContentPaste, LibraryBooks, BubbleChart, LocationOn, Notifications
} from 'material-ui-icons';

const appRoutes = [
  {
    path: "/aboutus",
    sidebarName: "About us",
    navbarName: "About us",
    icon: LibraryBooks,
    component: AboutUs
  },
  {
    path: "/howitworks",
    sidebarName: "How it works",
    navbarName: "How it works",
    icon: BubbleChart,
    component: HowItWorks
  },
  {
    path: "/onboarding",
    sidebarName: "Onboarding",
    navbarName: "Onboarding",
    icon: Person,
    component: Onboarding
  },
  {
    path: "/workinprogress",
    sidebarName: "Work in progress",
    navbarName: "Work in progress",
    icon: ContentPaste,
    component: TableList
  },
  {
    path: "/dashboard",
    sidebarName: "templates(dashboard)",
    navbarName: "Things can be used from here",
    icon: Dashboard,
    component: DashboardPage
  },
  { redirect: true, path: "/", to: "/aboutus", navbarName: "Redirect" }
];

export default appRoutes;
