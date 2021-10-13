import React from "react";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";

const Checkout = () => {
  return (
    <>
      <div className="container p-12 sm:pt-24 mx-auto h-screen">
        <div className="flex flex-col w-full h-full px-0 mx-auto md:flex-row">
          <CheckoutForm />
          <div className="inset-y-0 h-full flex">
            <div className="w-screen md:max-w-sm xl:max-w-lg">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
