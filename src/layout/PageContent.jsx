import { Switch, Route } from "react-router-dom/";
import { HomePage } from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ShopPage from "../pages/ShopPage";
import TeamPage from "../pages/TeamPage";
import ProductDetailPage from "../pages/ProductDetailPage";

export const PageContent = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shop" exact>
          <ShopPage />
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
        <Route path="/detail">
          <ProductDetailPage />
        </Route>
      </Switch>
    </>
  );
};
