import React, { useState } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/productsSlice";
import Modal from "../common/Modal";

const CartSideBar = ({ open, setOpen }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const {
    items: cartItems,
    itemQuantity,
    totalQuantity,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden z-50"
          onClose={setOpen}
        >
          <div className="absolute inset-0 overflow-hidden ">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-y-0 right-0 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen max-w-md">
                  <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                    <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul className="-my-6 divide-y divide-gray-200">
                            {cartItems.map((product) => (
                              <li key={product.id} className="py-6 flex">
                                <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                  <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-center object-cover"
                                  />
                                </div>

                                <div className="ml-4 flex-1 flex flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={product.href}>
                                          {product.title}
                                        </a>
                                      </h3>
                                      <p className="ml-4 font-bold">
                                        ${product.price}
                                      </p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {product.category.toUpperCase()}
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
                                          itemQuantity[product.id] === 1
                                            ? "bg-indigo-400 cursor-default"
                                            : "bg-indigo-700 hover:bg-indigo-800"
                                        }`}
                                        disabled={
                                          itemQuantity[product.id] === 1
                                        }
                                      >
                                        <MinusIcon
                                          className="h-3 w-3"
                                          aria-hidden="true"
                                        />
                                      </button>
                                      <span className="mx-2 text-lg">
                                        {itemQuantity[product.id]}
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
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-bold text-gray-900">
                        <p>Subtotal</p>
                        <p>
                          $
                          {cartItems
                            .reduce(
                              (accumulator, current) =>
                                accumulator +
                                current.price * itemQuantity[current.id],
                              0
                            )
                            .toFixed(2)}
                        </p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500 italic">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6 grid grid-flow-row grid-cols-2 gap-2">
                        <Link
                          to="/checkout"
                          className={`flex justify-evenly items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
                            totalQuantity > 0
                              ? "bg-indigo-600 hover:bg-indigo-700"
                              : "bg-indigo-400 cursor-default"
                          }`}
                          onClick={
                            totalQuantity > 0
                              ? () => setOpen(false)
                              : (e) => e.preventDefault()
                          }
                        >
                          Checkout
                        </Link>
                        <button
                          className={`items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
                            totalQuantity > 0
                              ? "bg-red-600 hover:bg-red-700"
                              : "bg-red-400 cursor-default"
                          }`}
                          onClick={
                            totalQuantity > 0
                              ? () => {
                                  setModalIsOpen(!modalIsOpen);
                                  setOpen(false);
                                }
                              : (e) => e.preventDefault()
                          }
                        >
                          Empty Cart
                        </button>
                      </div>
                      <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                        <p>
                          or{" "}
                          <button
                            type="button"
                            className="text-indigo-600 font-medium hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <Modal
        open={modalIsOpen}
        setOpen={setModalIsOpen}
        onConfirm={() => dispatch(cartActions.cartEmptied())}
        title="Confirmation"
        description="Are you sure you want to empty your cart? This will remove all items currently in the cart."
        buttonName="Empty"
      />
    </>
  );
};

export default CartSideBar;
