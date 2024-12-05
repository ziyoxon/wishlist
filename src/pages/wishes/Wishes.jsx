import React from "react";
import { useStateValue } from "../../context";
import Products from "../../components/products/Products";

const Wishes = () => {
  const { wishlist } = useStateValue();
  console.log(wishlist);
  return (
    <>
      <div>Wishes</div>
      <Products data={wishlist} />
    </>
  );
};

export default Wishes;
