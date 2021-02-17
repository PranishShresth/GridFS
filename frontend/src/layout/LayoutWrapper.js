import React from "react";
import { Route, Redirect } from "react-router-dom";

const LayoutWrapper = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default LayoutWrapper;
