import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";

function ProductOverview({ match }) {
  const { allProducts: products } = useSelector((state) => state);
  const product = products.filter((p) => p.id === parseInt(match.params.id))[0];

  return (
    <div className="w-full max-h-full text-gray-700 body-font overflow-hidden bg-white">
      <div class="container px-5 py-8 sm:py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            class="mx-auto w-2/3 sm:1/2 lg:w-2/5 max-w-md  sm:p-8 object-contain object-center rounded-lg border-2 border-gray-200 p-2 shadow-inner"
            src={product.image}
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-500 font-bold tracking-widest uppercase">
              {product.category}
            </h2>

            <h1 class="text-gray-900 text-xl sm:text-3xl title-font font-extrabold mb-1">
              {product.title}
            </h1>
            <div class="flex mb-4">
              <span class="flex items-center">
                <div className="text-red-500">
                  <Rating
                    name="read-only"
                    initialRating={product.rating.rate}
                    fractions={10}
                    readonly
                    emptySymbol={<BsStar />}
                    fullSymbol={<BsStarFill />}
                  />
                </div>
                <span class="text-gray-600 ml-3">
                  ({product.rating.count} Reviews)
                </span>
              </span>
            </div>
            <p class="leading-relaxed text- ">{product.description}</p>
            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
            <div class="flex">
              <span class="title-font font-medium text-2xl text-gray-900">
                ${product.price}
              </span>
              <Link
                to="/"
                class="flex ml-auto text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded"
              >
                Browse Shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductOverview;
