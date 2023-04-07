
import React from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = (props) => {
  const { product } = props;
  const { title, price,description,id } = product;
  const handleFormSubmit = () => {
    
  };
  return (
    <>
      
      <card  sx={{ minWidth: 345, maxWidth: 345 }}
        className="float-left m-5 h-auto mb-20">
      <Link to={`/productdetails/${id}`} variant="body2">
      <div className="w-80 flex flex-col h-full bg-white shadow rounded">
        <div
          class="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
         style={{ backgroundImage: `url(../src/image)` }}
        >
          <div class="flex justify-between">
            <input type="checkbox" />
            <button class="text-white hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
          <div>
            <span class=" h-full overflow-hidden uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
              {/* {Category} */}
            </span>
          </div>
        </div>
        <div class="p-4 flex flex-col items-center">
          <p class="text-gray-400 font-light text-xs text-center">
            {description}
          </p>
          <h1 class="text-gray-800 text-center mt-1">{title}</h1>
          <p class="text-center text-gray-800 mt-1">{price}€</p>
          <div class="inline-flex items-center mt-4">
            <button class="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 12H4"
                />
              </svg>
            </button>
            <div class="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
              2
            </div>
            <button class="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
          <Link to={`/edit`} variant="body2">
          <button  onClick={handleFormSubmit} class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
            Teklif Ver
          </button>
          </Link>
        </div>
      </div>
      </Link>
      </card>
    </>
  );
};

export default ProductCard;
