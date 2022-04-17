import { Route, Switch } from "react-router-dom";
import { lazy } from "react";
const Main = lazy(() => import("../Layouts/Main"));
const ProductPage = lazy(() => import("../Layouts/ProductPage"));
const CartPage = lazy(() => import("../Layouts/CartPage"));
const UserRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/product/:id" exact component={ProductPage} />
      <Route path="/cart" exact component={CartPage} />
    </Switch>
  );
};

export default UserRouter;
