import { Switch, Route } from "react-router-dom/";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ShopPage from "../pages/ShopPage";
import TeamPage from "../pages/TeamPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import CreateOrderPage from "../pages/CreateOrderPage";
import PrivateRoute from "../util/PrivateRoute";

export const PageContent = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shop/:gender?/:categoryName?/:categoryId?" exact>
          <ShopPage />
        </Route>
        <Route path="/shop/:gender?/:categoryName?/:categoryId?/:productNameSlug?/:productId?">
          <ProductDetailPage />
        </Route>
        <Route path="/team">
          <TeamPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/about-us">
          <AboutPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/shopping-cart">
          <ShoppingCartPage />
        </Route>
        {/*         <Route path="/create-order">
          <CreateOrderPage />
        </Route> */}
        <PrivateRoute path="/create-order" component={CreateOrderPage} />
      </Switch>
    </>
  );
};
