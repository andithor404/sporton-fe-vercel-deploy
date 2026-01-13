"use client";

import { useState } from "react";
import CartItems from "../components/checkout/cart-items";
import OrderInformation from "../components/checkout/order-information";
import { customerInfo, useCartStore } from "@/app/hooks/use-cart-store";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const { push } = useRouter();
  const { customerInfo, setCustomerInfo } = useCartStore();
  const [formData, setFromData] = useState<customerInfo>({
    customerName: "",
    customerContact: null,
    customerAddress: "",
  });

  const handlePayment = () => {
    if (
      !formData.customerName ||
      !formData.customerContact ||
      !formData.customerAddress
    ) {
      alert("Please fill in all fields");
      return;
    }

    setCustomerInfo(formData);
    push("/payment");
  };

  return (
    <main className="bg-gray-100 min-h-[80vh] pt-20">
      <div className="max-w-5xl mx-auto p-20">
        <h1 className="text-5xl font-bold text-center mb-10">Checkout Now</h1>
        <div className="grid grid-cols-2 gap-14">
          <OrderInformation
            formData={formData}
            setFormData={setFromData}
          ></OrderInformation>
          <CartItems handlePayment={handlePayment}></CartItems>
          {/*<p>{JSON.stringify(customerInfo)}</p>*/}
        </div>
      </div>
    </main>
  );
};

export default Checkout;
