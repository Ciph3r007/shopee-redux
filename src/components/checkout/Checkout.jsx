import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
import { IoPricetag } from "react-icons/io5";
import { cartActions } from "../../store/productsSlice";
import { getSubtotal } from "../../store/productsSlice";

const Checkout = () => {
  const { quantityById, cartItems } = useSelector((state) => state);
  const subTotal = useSelector(getSubtotal);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container p-12 pt-24 mx-auto h-screen">
        <div className="flex flex-col w-full h-full px-0 mx-auto md:flex-row">
          <div className="flex flex-col md:w-full">
            <h2 className="mb-4 font-bold md:text-xl text-heading ">
              Shipping Address
            </h2>
            <form
              className="justify-center w-full mx-auto"
              method="post"
              action
            >
              <div className="">
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label
                      for="firstName"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      First Name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label
                      for="firstName"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Last Name
                    </label>
                    <input
                      name="Last Name"
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label
                      for="Email"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Email
                    </label>
                    <input
                      name="Last Name"
                      type="text"
                      placeholder="Email"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label
                      for="Address"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Address
                    </label>
                    <textarea
                      className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      name="Address"
                      cols="20"
                      rows="4"
                      placeholder="Address"
                    ></textarea>
                  </div>
                </div>
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label
                      for="city"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      City
                    </label>
                    <input
                      name="city"
                      type="text"
                      placeholder="City"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label
                      for="postcode"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Postcode
                    </label>
                    <input
                      name="postcode"
                      type="text"
                      placeholder="Post Code"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
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
                    for="note"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    {" "}
                    Notes (Optional)
                  </label>
                  <textarea
                    name="note"
                    className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                    rows="4"
                    placeholder="Notes for delivery"
                  ></textarea>
                </div>
                <div className="mt-4">
                  <button className="w-full px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-700 hover:bg-indigo-800">
                    Process
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="inset-y-0 h-full flex">
            <div className="w-screen md:max-w-sm xl:max-w-lg">
              <div className="flex flex-col h-screen md:pl-12 md:h-full">
                <div className="flex items-start justify-between px-2 py-2 ">
                  <div className="text-lg font-bold text-gray-900">
                    Order Summary
                  </div>
                </div>
                <div className="overflow-y-scroll sm:px-6">
                  <div className="flow-root mt-8">
                    <ul className="-my-6 divide-y divide-gray-200">
                      {cartItems.map((product) => (
                        <li key={product.id} className="py-6 flex">
                          <div className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden ">
                            <img
                              src={product.image}
                              alt={product.title}
                              className="w-full h-full object-center object-contain"
                            />
                          </div>

                          <div className="ml-4 flex-1 flex flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <a href={product.href}>{product.title}</a>
                                </h3>
                                <p className="ml-4 font-bold">
                                  $
                                  {(
                                    product.price * quantityById[product.id]
                                  ).toFixed(2)}
                                </p>
                              </div>
                              <p className="my-3 text-sm font-medium text-gray-900">
                                <IoPricetag className="inline text-gray-900 h-5 w-5 mr-1" />
                                <span class="  px-2 py-1  text-md font-bold leading-none text-gray-700 bg-gray-200 rounded-md">
                                  ${product.price}
                                </span>
                              </p>
                            </div>
                            <div className="flex-1 flex items-end justify-between text-sm">
                              <div className="flex justify-center items-center border border-transparent rounded-md shadow-sm text-base font-medium text-gray-900">
                                <button
                                  onClick={() =>
                                    dispatch(
                                      cartActions.itemDecremented({
                                        product,
                                      })
                                    )
                                  }
                                  className={`text-white mx-1 my-2 px-3 py-1 rounded-lg shadow-sm   ${
                                    quantityById[product.id] === 1
                                      ? "bg-indigo-400 cursor-default"
                                      : "bg-indigo-700 hover:bg-indigo-800"
                                  }`}
                                  disabled={quantityById[product.id] === 1}
                                >
                                  <MinusIcon
                                    className="h-3 w-3"
                                    aria-hidden="true"
                                  />
                                </button>
                                <span className="mx-2 text-lg">
                                  {quantityById[product.id]}
                                </span>
                                <button
                                  onClick={() =>
                                    dispatch(
                                      cartActions.itemIncremented({
                                        product,
                                      })
                                    )
                                  }
                                  className="bg-indigo-700 text-white mx-2 my-3 px-3 py-1 rounded-lg shadow-sm cursor-pointer hover:bg-indigo-800"
                                >
                                  <PlusIcon
                                    className="h-3 w-3"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>

                              <div className="flex">
                                <button
                                  type="button"
                                  onClick={() =>
                                    dispatch(
                                      cartActions.itemRemoved({ product })
                                    )
                                  }
                                  className="font-medium font-bold text-red-500 mb-3 hover:text-red-800"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-gray-200 py-3 px-4 sm:px-6">
                  <div className="flex justify-between text-base font-semibold text-gray-700">
                    <p>Subtotal</p>
                    <p>${subTotal}</p>
                  </div>
                  <div className="border-t border-gray-200 px-4 my-1 sm:px-6"></div>
                  <div className="flex justify-between text-base font-semibold text-gray-700">
                    <p>Shipping Fee</p>
                    <p>${10 * cartItems.length}.00</p>
                  </div>
                  <div className="flex justify-between text-base font-semibold text-gray-700">
                    <p>Tax</p>
                    <p>${(subTotal * 0.125).toFixed(2)}</p>
                  </div>
                  <div className="border-t border-gray-200 px-4 my-1 sm:px-6"></div>
                  <div className="flex justify-between text-base font-bold text-gray-900">
                    <p>Total</p>
                    <p>
                      ${(subTotal * 1.125 + 10 * cartItems.length).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
