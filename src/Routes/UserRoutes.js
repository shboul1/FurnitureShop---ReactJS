import { Route, Switch } from "react-router-dom";
import { lazy } from "react";
const Main = lazy(() => import("../Layouts/Main"));
const UserRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
    </Switch>
  );
};

export default UserRouter;
