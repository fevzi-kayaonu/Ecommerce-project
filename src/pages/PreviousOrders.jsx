import { useEffect, useState } from "react";
import { PreviousOrderCart } from "../components/order/PreviousOrderCart";
import { METHODS, sendRequest } from "../util/axiosUtil";

const PreviousOrders = () => {
  const [previousOrders, setPreviousOrders] = useState([]);
  const [selectOrders, setSelectOrders] = useState([]);

  const handleClick = (e) => {
    const id = e.target.value;
    const newSelectOrders = selectOrders.includes(id)
      ? selectOrders.filter((orderId) => orderId !== id)
      : [...selectOrders, id];
    setSelectOrders(newSelectOrders);
    console.log("selectorder:", selectOrders);
  };

  useEffect(() => {
    const callBackAction = (data) => {
      setPreviousOrders(data);
    };

    sendRequest({
      url: "/order",
      method: METHODS.GET,
      authentication: true,
      callbackSuccess: (data) => {
        console.log(data);
        callBackAction(data);
      },
      callbackError: (error) => {
        console.log(error.message);
      },
    });
  }, []);

  console.log("prev: ", previousOrders);
  return (
    <section className="flex justify-center py-8">
      <main className="basis-[90%] p-4">
        {previousOrders.length > 0 ? (
          previousOrders?.map((order, index) => (
            <PreviousOrderCart
              key={order.id}
              order={order}
              index={index}
              isVisibleDetail={selectOrders.includes(Number(order.id))}
              handleClick={handleClick}
            />
          ))
        ) : (
          <p className="text-center text-xl font-bold">
            {" "}
            Geçmiş Siparişiniz Yoktur...
          </p>
        )}
      </main>
    </section>
  );
};

export default PreviousOrders;
