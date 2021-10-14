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
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            class="mx-auto w-2/3 sm:1/2 lg:w-2/5 shadow-lg sm:p-8 object-cover object-center rounded border border-gray-200"
            src={product.image}
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest uppercase">
              {product.category}
            </h2>

            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
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
                  {product.rating.count} Reviews
                </span>
              </span>
            </div>
            <p class="leading-relaxed">{product.description}</p>
            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
            <div class="flex">
              <span class="title-font font-medium text-2xl text-gray-900">
                ${product.price}
              </span>
              <Link
                to="/"
                class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
              >
                Return Home
              </Link>
              <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductOverview;
