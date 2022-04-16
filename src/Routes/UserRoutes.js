import { Route, Switch } from "react-router-dom";
import { lazy } from "react";
const Main = lazy(() => import("../Layouts/Main"));
const ProductPage = lazy(() => import("../Components/ProductPage"));
const UserRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/product/:id" exact component={ProductPage} />
    </Switch>
  );
};

export default UserRouter;
