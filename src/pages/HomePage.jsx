import { Clients } from "../components/Clients";
import { Content } from "../components/Content";
import { Hero } from "../components/Hero";
import { Products } from "../components/Products";
import { Services } from "../components/Services";
import { ShopCard } from "../components/ShopCard";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Clients />
      <ShopCard />
      <Products />
      <Content />
      <Services />
    </>
  );
};
