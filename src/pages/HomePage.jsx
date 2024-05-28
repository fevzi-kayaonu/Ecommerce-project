import { Clients } from "../components/Clients";
import { Hero } from "../components/Hero";
import { ShopCard } from "../components/ShopCard";
import { Header } from "../layout/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <ShopCard />
    </>
  );
};
