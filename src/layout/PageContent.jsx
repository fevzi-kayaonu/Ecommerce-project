import { Switch, Route } from "react-router-dom/";
import { HomePage } from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ShopPage from "../pages/ShopPage";
import BlogPage from "../pages/BlogPage";

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
        <Route path="/blog">
          <BlogPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/about-us">
          <AboutPage />
        </Route>
      </Switch>
    </>
  );
};
