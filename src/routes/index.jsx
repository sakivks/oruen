import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import Login from "layouts/Login/Login.jsx";

const indexRoutes = [
  { path: "/db", component: Dashboard },
  { path: "/login", component: Login, props:{successURL: "/db"}},
  { redirect: true, path: "/", to: "/login"}
];

export default indexRoutes;
