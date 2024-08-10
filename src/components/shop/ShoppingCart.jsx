function ShoppingCart({ product }) {
  console.log();
  return (
    <div className="flex border-b-[1px] border-gray-300 gap-6 px-5 py-3">
      <div className="basis-[35%]">
        <picture className=" w-full ">
          <img
            src={product?.images[0].url}
            alt="ProductImg"
            className="w-full h-full object-cover rounded-lg"
          />
        </picture>
      </div>
      <div className="basis-[65%]">
        <p className="pt-2 mb-6 gap-1 tracking-wider text-base max-md:text-black  max-md:text-sm max-sm:text-sm  line-clamp-2 break-words">
          <span className="  font-bold "> {product?.name} -</span>
          {product?.description}
        </p>
        <div className="flex justify-between">
          <p className="text-base text-gray-500 max-md:text-sm max-sm:text-sm">
            count:{product.sell_count}
          </p>
          <p className="text-base text-gray-500 max-md:text-sm max-sm:text-sm">
            ${(product.price * product.sell_count * 0.8).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
/*   return (
    <>
      <div className="flex">
        <img className="basis-[35%]" src={img} alt="img" />
        <div className="flex flex-col basis-[55%]">
          <p className="text-xl"> BEYAZ pamuk</p>
          <div className="flex justify-between">
            <p>count:1</p>
            <p>149.99 TL</p>
          </div>
        </div>
      </div>
    </>
  );
} */

export default ShoppingCart;
