import DashboardPage from "views/Dashboard/Dashboard.jsx";
// import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import AboutUs from "views/AboutUs/AboutUs.jsx";
import HowItWorks from "views/HowItWorks/HowItWorks.jsx";
import Onboarding from "views/Onboarding/Onboarding.jsx";
import DetailsTemplate from "views/DetailsTemplate/Comment.jsx";

import {
    Dashboard, Person, ContentPaste, LibraryBooks, BubbleChart, Build
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
  {
    path: "/commentFeature",
    sidebarName: "Comment Feature",
    navbarName: "WIP area (to be removed)",
    icon: Build,
    component: DetailsTemplate
  },
  { redirect: true, path: "/", to: "/aboutus", navbarName: "Redirect" }
];

export default appRoutes;
