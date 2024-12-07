import React, { memo, useRef, useState } from "react";
import { PROMOCODE } from "../../static";

const Promocode = () => {
  const code = useRef(null);
  const [message, setMessage] = useState("");
  const [price, setPrice] = useState(100); 
  const [discountedPrice, setDiscountedPrice] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (PROMOCODE.includes(code.current.value.toUpperCase())) {
      setMessage("✅ Promocode successfully submitted");
      const discounted = price - price * 0.2;
      setDiscountedPrice(discounted.toFixed(2)); 
    } else {
      setMessage("❌ Promocode failed to submit");
      setDiscountedPrice(null); 
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 p-4 bg-white border border-gray-300 rounded-lg shadow-md"
      >
        <input
          ref={code}
          type="text"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Promokodni kiriting"
        />
        <button
          type="submit"
          className="px-3 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Yuborish
        </button>
      </form>

      {message && (
        <p
          className={`mt-4 text-lg ${
            message.startsWith("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}

    </div>
  );
};

export default memo(Promocode);
