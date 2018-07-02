import DashboardPage from "views/Dashboard/Dashboard.jsx";

// import UserProfile from "views/UserProfile/UserProfile.jsx";
import Table from "views/TableList/Table.jsx";
// import CardView from "views/TableList/CardView.jsx";
import AboutUs from "views/AboutUs/AboutUs.jsx";
import HowItWorks from "views/HowItWorks/HowItWorks.jsx";
import Onboarding from "views/Onboarding/Onboarding.jsx";
import CardView from "views/TableList/CardView.jsx";
import CardViewCreate from "views/TableList/CardViewCreate.jsx";

import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  Build
} from "material-ui-icons";

const dbPath = "/db";

const appRoutes = [
  // {
  //   path: `${dbPath}/aboutus`,
  //   sidebarName: "About us",
  //   navbarName: "About us",
  //   icon: LibraryBooks,
  //   component: AboutUs
  // },
  // {
  //   path: `${dbPath}/howitworks`,
  //   sidebarName: "How it works",
  //   navbarName: "How it works",
  //   icon: BubbleChart,
  //   component: HowItWorks
  // },
  {
    path: `${dbPath}/onboarding`,
    sidebarName: "Onboarding",
    navbarName: "Onboarding",
    icon: Person,
    component: Onboarding
  },
  {
    path: `${dbPath}/workinprogress`,
    sidebarName: "Work in progress",
    navbarName: "Work in progress",
    icon: ContentPaste,
    component: Table
  },
  {
    path: `${dbPath}/dashboard`,
    sidebarName: "templates(dashboard)",
    navbarName: "Things can be used from here",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: `${dbPath}/card`,
    sidebarName: "Card",
    navbarName: "Card",
    icon: Build,
    component: CardView
  },
  {
    path: `${dbPath}/CcardCreate`,
    sidebarName: "Card create",
    navbarName: "Card create",
    icon: Build,
    component: CardViewCreate
  },
  {
    redirect: true,
    path: `${dbPath}/`,
    to: `${dbPath}/onboarding`,
    navbarName: "Redirect"
  }
];

export default appRoutes;
