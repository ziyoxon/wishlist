import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useStateValue } from "../../context";
import { IoCartOutline } from "react-icons/io5";

const Products = ({ data }) => {
  const { setWishlist, wishlist, setCart, cart } = useStateValue();

  // Like funksiyasi
  const handleLike = (product) => {
    const index = wishlist.findIndex((item) => item.id === product.id);
    if (index < 0) {
      setWishlist((prev) => [...prev, product]); // Wishlistga qo'shish
    } else {
      setWishlist((prev) => prev.filter((item) => item.id !== product.id)); // Wishlistdan o'chirish
    }
  };

  // Cartga mahsulot qo'shish funksiyasi
  const handleAddcart = (product) => {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index < 0) {
      setCart((prev) => [...prev, { ...product, amount: 1 }]);
    }
  };

  const visibleProducts = data?.slice(0, 8);

  const productItems = visibleProducts?.map((product) => (
    <div
      key={product.id}
      className="group shadow-lg p-4 rounded-lg bg-white hover:bg-blue-50 hover:scale-105 transition-all duration-300"
    >
      <div className="w-full h-64 relative overflow-hidden rounded-md">
        <img
          className="w-full h-full object-cover rounded-md group-hover:opacity-90 transition-opacity duration-300"
          src={product.thumbnail}
          alt={product.title}
        />
        <button
          onClick={() => handleLike(product)}
          className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-red-500 transition-colors duration-200"
        >
          {wishlist?.some((item) => item.id === product.id) ? (
            <FaHeart />
          ) : (
            <FaRegHeart />
          )}
        </button>
        <button
          onClick={() => handleAddcart(product)}
          className="absolute top-3 left-3 text-3xl hover:text-red-500 transition-colors duration-200"
        >
          <IoCartOutline />
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
          {product.title}
        </h3>
        <p className="text-xl font-bold text-gray-700 mt-2 group-hover:text-blue-700 transition-colors duration-200">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  ));

  return (
    <div className="py-10 bg-gray-50">
      <h2 className="text-center text-5xl font-bold text-[#0B254B] mb-4">
        Products
      </h2>
      <p className="text-center text-xl text-gray-600 mb-8">
        Order it for you or for your beloved ones
      </p>
      <div className="container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productItems}
      </div>
    </div>
  );
};

export default Products;
