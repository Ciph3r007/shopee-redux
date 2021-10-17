import React from "react";

const CheckoutForm = () => {
  return (
    <div className="flex flex-col md:w-full">
      <h2 className="mb-4 font-bold md:text-xl text-heading ">
        Shipping Address
      </h2>
      <form className="justify-center w-full mx-auto" method="post" action>
        <div className="">
          <div className="space-x-0 space-y-4 lg:flex lg:space-x-4 lg:space-y-0">
            <div className="w-full lg:w-1/2">
              <label
                htmlFor="firstName"
                className="block mb-3 text-sm font-semibold text-gray-500"
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                required
              />
            </div>
            <div className="w-full lg:w-1/2 ">
              <label
                htmlFor="lastName"
                className="block mb-3 text-sm font-semibold text-gray-500"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="Last Name"
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full">
              <label
                htmlFor="email"
                className="block mb-3 text-sm font-semibold text-gray-500"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full">
              <label
                htmlFor="address"
                className="block mb-3 text-sm font-semibold text-gray-500"
              >
                Address
              </label>
              <textarea
                className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                id="address"
                name="address"
                cols="20"
                rows="4"
                placeholder="Address"
                required
              ></textarea>
            </div>
          </div>
          <div className="space-x-0 space-y-4 lg:flex lg:space-x-4 lg:space-y-0">
            <div className="w-full lg:w-1/2">
              <label
                htmlFor="city"
                className="block mb-3 text-sm font-semibold text-gray-500"
              >
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                placeholder="City"
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                required
              />
            </div>
            <div className="w-full lg:w-1/2 ">
              <label
                htmlFor="postcode"
                className="block mb-3 text-sm font-semibold text-gray-500"
              >
                Postcode
              </label>
              <input
                id="postcode"
                name="postcode"
                type="number"
                placeholder="Post Code"
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                required
              />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <label className="flex items-center text-sm group text-heading">
              <input
                type="checkbox"
                className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1 mx-2"
              />
              Save details for future
            </label>
          </div>
          <div className="relative pt-3 xl:pt-6">
            <label
              htmlFor="note"
              className="block mb-3 text-sm font-semibold text-gray-500"
            >
              {" "}
              Notes (Optional)
            </label>
            <textarea
              id="note"
              name="note"
              className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
              rows="4"
              placeholder="Notes for delivery"
            ></textarea>
          </div>
          <div className="mt-4">
            <button className="w-full px-6 py-1 sm:py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-700 hover:bg-indigo-800 mb-4">
              Process
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
