export const PreviousOrderCart = ({
  order,
  index,
  isVisibleDetail,
  handleClick,
}) => {
  console.log("order: ", order);
  return (
    <article className="border-t-2 mb-6 p-4 rounded-md shadow-xl ">
      <div className="flex max-sm:flex-col justify-between items-center font-bold ">
        <div
          className="flex items-center gap-2"
          onClick={() =>
            handleClick({
              target: { value: order.id },
            })
          }
        >
          <h5>Order: {index + 1}</h5>
          <i className="fa-solid fa-angle-down text-xl"></i>
        </div>
        <p>Date : {order.order_date}</p>
      </div>
      {isVisibleDetail && (
        <div className="">
          {order.products?.map((product) => (
            <div
              key={product.id}
              className="sm:flex items-center gap-5  shadow-lg rounded-md m-4 p-4"
            >
              <div className="sm:basis-[20%] max-sm:w-full max-sm:mb-4 aspect-[1/1.3] ">
                <img
                  src={product.images[0].url}
                  alt="images"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="sm:basis-[80%] flex flex-col gap-10 max-xl:gap-6 max-lg:gap-4">
                <p>
                  {" "}
                  <span className="font-bold">Product Name :</span>{" "}
                  {product.name}
                </p>
                <p>
                  {" "}
                  <span className="font-bold">Product Description : </span>
                  {product.description}
                </p>
                <p>
                  {" "}
                  <span className="font-bold">Product Count : </span>
                  {product.count}
                </p>
                <p>
                  {" "}
                  <span className="font-bold">Product Price :</span> $
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </article>
  );
};
