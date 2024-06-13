import { ProductDescription } from "../components/product/ProductDescription";
import { ProductDetail } from "../components/product/ProductDetail";
import ProductBestSellers from "../components/product/ProductsBestSeller";

const ProductDetailPage = () => {
  return (
    <>
      <ProductDetail />
      <ProductDescription />
      <ProductBestSellers />
    </>
  );
};

export default ProductDetailPage;
