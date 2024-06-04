import { ProductDescription } from "../components/ProductDescription";
import { ProductDetail } from "../components/ProductDetail";
import ProductBestSellers from "../components/ProductsBestSeller";

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
