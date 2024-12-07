import React, { useState } from "react";
import { useStateValue } from "../../context";

const Checkout = () => {
  const { cart } = useStateValue();
  const [isModalOpen, setModalOpen] = useState(false);

  // Calculate Total Price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );

  const handlePayment = (e) => {
    e.preventDefault();
    setModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <div className="container mx-auto">
        {/* Header */}
        <h2 className="text-center text-5xl font-bold text-[#0B254B] mb-6">
          Checkout
        </h2>
        <p className="text-center text-xl text-gray-600 mb-10">
          Review your order and complete the payment process.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="md:col-span-2 bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Order Summary
            </h3>
            {cart.length > 0 ? (
              <div className="divide-y">
                {cart.map((product) => (
                  <div
                    key={product.id}
                    className="py-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        className="w-20 h-20 object-cover rounded-md"
                        src={product.thumbnail}
                        alt={product.title}
                      />
                      <div>
                        <h4 className="text-lg font-medium text-gray-800">
                          {product.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          Qty: {product.amount}
                        </p>
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-gray-800">
                      ${(product.price * product.amount).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 mt-6">
                Your cart is empty.
              </p>
            )}
            {cart.length > 0 && (
              <div className="mt-6 text-right">
                <h4 className="text-xl font-bold text-gray-800">
                  Total:{" "}
                  <span className="text-green-600">
                    ${totalPrice.toFixed(2)}
                  </span>
                </h4>
              </div>
            )}
          </div>

          {/* Payment Details */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Payment Details
            </h3>
            <form onSubmit={handlePayment}>
              {/* Name on Card */}
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="name"
                >
                  Name on Card
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Card Number */}
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="cardNumber"
                >
                  Card Number
                </label>
                <input
                  id="cardNumber"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Expiration Date */}
              <div className="mb-4 flex gap-4">
                <div className="w-1/2">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="expiryDate"
                  >
                    Expiry Date
                  </label>
                  <input
                    id="expiryDate"
                    type="text"
                    placeholder="MM/YY"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="cvv"
                  >
                    CVV
                  </label>
                  <input
                    id="cvv"
                    type="text"
                    placeholder="123"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200 font-semibold"
              >
                Complete Payment
              </button>
            </form>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Payment Successful!
            </h3>
            <p className="text-gray-600 mb-6">
              Your payment was processed successfully. Your items will be
              delivered soon!
            </p>
            <button
              onClick={closeModal}
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200 font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
