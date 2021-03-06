import React from "react";

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


const indexRoutes = [
  { path: "/db", component: Dashboard },
  { path: "/login", component: Login, props: { } },
  { redirect: true, path: "/", to: "/login" }
];

export default indexRoutes;
