import React, { memo, useRef } from "react";
import { PROMOCODE } from "../../static";

const Promocode = () => {
  const code = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (PROMOCODE.includes(code.current.value.toUpperCase())) {
        console.log([ "Uraa Uraaa Uraaa bugun ertalabgacha to'y"]);
    } else {
      console.log("Kod noto'g'ri kiritildi");
    }
  };
  return (
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
  );
};

export default memo(Promocode);
