import { Clients } from "../components/Clients";
import { Content } from "../components/Content";
import { FeaturedPosts } from "../components/FeaturedPosts";
import { Hero } from "../components/Hero";
import { ProductsHome } from "../components/ProductsHome";
import { Services } from "../components/Services";
import { ShopCard } from "../components/ShopCard";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Clients />
      <ShopCard />
      <ProductsHome />
      <Content />
      <Services />
      <FeaturedPosts />
    </>
  );
};
