import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "./../context/UserContext";

const LayoutWrapper = ({
  component: Component,
  layout: Layout,
  location,
  ...rest
}) => {
  const {
    user: { isLoggedIn },
  } = useContext(UserContext);
  return isLoggedIn ? (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  ) : (
    <Redirect to={{ pathname: "/", state: { from: location } }} />
  );
};

export default LayoutWrapper;
