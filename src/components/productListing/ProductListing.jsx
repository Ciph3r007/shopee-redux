import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../../store/productsSlice";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";

const ProductListing = () => {
  const { allProducts: products, quantityById } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="bg-white max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      {products ? (
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative flex-col flex justify-between"
            >
              <div className="group">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="bg-white w-full h-full object-center object-contain lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between space-x-0.5">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link
                        to={`/products/${product.id}`}
                        className="font-medium text-gray-700 hover:text-indigo-800 "
                      >
                        <span aria-hidden="true" className="absolute" />
                        {product.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.category.toUpperCase()}
                    </p>
                  </div>
                  <p className="my-2 text-sm font-medium text-gray-900">
                    <span class="px-2 py-1 text-md font-bold leading-none text-gray-700 bg-gray-200 rounded-md">
                      ${product.price.toFixed(2)}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center border border-transparent rounded-md shadow-sm text-base font-medium text-gray-900">
                {quantityById[product.id] ? (
                  <>
                    <button
                      onClick={() =>
                        dispatch(cartActions.itemDecremented({ product }))
                      }
                      className="text-white mx-2 my-2 px-6 py-2 rounded-lg shadow-sm cursor-pointer bg-indigo-700 hover:bg-indigo-800"
                    >
                      <MinusIcon className="h-3 w-3" aria-hidden="true" />
                    </button>
                    <span className="mx-5 text-xl">
                      {quantityById[product.id]}
                    </span>
                    <button
                      onClick={() =>
                        dispatch(cartActions.itemIncremented({ product }))
                      }
                      className="text-white mx-2 my-3 px-6 py-2 rounded-lg shadow-sm cursor-pointer bg-indigo-700 hover:bg-indigo-800"
                    >
                      <PlusIcon className="h-3 w-3" aria-hidden="true" />
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() =>
                      dispatch(cartActions.itemIncremented({ product }))
                    }
                    className="flex justify-center items-center mx-2 my-2 px-6 py-2 border border-transparent w-full rounded-md shadow-sm text-base font-medium text-white cursor-pointer bg-indigo-700 hover:bg-indigo-800"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ProductListing;
