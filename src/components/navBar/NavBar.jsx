import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { ShoppingCartIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import CartSideBar from "../cartSidebar/CartSidebar";
import { Context } from "../../context/ContextProvider";

const NavBar = () => {
  const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "About", href: "/about", current: false },
    { name: "Contact", href: "/contact", current: false },
  ];
  const { totalItems } = useContext(Context);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <>
      <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-10">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <Link to="/">
                      <img
                        className="block lg:hidden h-8 w-auto p-1"
                        src="https://i.ibb.co/vjGVTRX/image-1.png"
                        alt="Workflow"
                      />
                      <img
                        className="hidden lg:block h-8 w-auto p-1 mr-10"
                        src="https://i.ibb.co/vjGVTRX/image-1.png"
                        alt="Workflow"
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          exact
                          to={item.href}
                          activeClassName="block px-3 py-2 rounded-md text-base font-medium bg-gray-900 text-white"
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    onClick={() => setCartIsOpen(!cartIsOpen)}
                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">Shopping Cart</span>
                    <ShoppingCartIcon className="h-8 w-8" aria-hidden="true" />
                    {totalItems !== 0 ? (
                      <span className="absolute top-11 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-blue-100 transform translate-x-1/2 -translate-y-1/2 bg-indigo-600 rounded-full">
                        {totalItems}
                      </span>
                    ) : null}
                  </button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    exact
                    to={item.href}
                    activeClassName="block px-3 py-2 rounded-md text-base font-medium bg-gray-900 text-white"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <CartSideBar open={cartIsOpen} setOpen={setCartIsOpen} />
    </>
  );
};

export default NavBar;
