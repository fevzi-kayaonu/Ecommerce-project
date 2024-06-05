import { Clients } from "../components/home/Clients";
import { ProductsShop } from "../components/product/ProductsShop";
import { ShopContainer } from "../components/shop/ShopContainer";
const ShopPage = () => {
  return (
    <>
      <ShopContainer />
      <ProductsShop />
      <Clients />
    </>
  );
};
export default ShopPage;
