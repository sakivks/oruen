import React from "react";
import utils from "core/utils/utils";

function asyncComponent(getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(Component => {
          AsyncComponent.Component = Component;
          this.setState({ Component });
        });
      }
    }
    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props} />;
      }
      return null;
    }
  };
}

const Dashboard = asyncComponent(() =>
  import("layouts/Dashboard/Dashboard.jsx").then(module => module.default)
);
const Login = asyncComponent(() =>
  import("layouts/Login/Login.jsx").then(module => module.default)
);

function register() {
  utils.fetch("/public/api/users", {
    method: "post",
    data: {
      "user":{
        "name":"vikas",
        "email":"cba@mno.com",
        "password":"cba"
      }
    }
  });
}

function login() {
  console.log("====================================");
  console.log("Login");
  console.log("====================================");
}

const indexRoutes = [
  { path: "/db", component: Dashboard },
  { path: "/login", component: Login, props: { register, login } },
  { redirect: true, path: "/", to: "/login" }
];

export default indexRoutes;
