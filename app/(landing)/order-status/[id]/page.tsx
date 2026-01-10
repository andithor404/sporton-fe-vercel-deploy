"use client";

import { useState } from "react";
import OrderConfirmed from "../../components/order-status/order-confirmed";
import OrderSubmitted from "../../components/order-status/order-submitted";

const OrderStatus = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <main className="bg-gray-100 min-h-screen pt-10">
      <div className="max-w-5xl mx-auto ">
        {/*p-20*/}
        <h1 className="text-5xl font-bold text-center">Order Status</h1>
      </div>
      {isConfirmed ? (
        <OrderConfirmed></OrderConfirmed>
      ) : (
        <OrderSubmitted></OrderSubmitted>
      )}
    </main>
  );
};

export default OrderStatus;
