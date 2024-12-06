import React from "react";
import { useStateValue } from "../../context";
import Products from "../../components/products/Products";
import Empty from "../empty/Empty";
import empt from "../../assets/emp.png"


const Wishes = () => {
  const { wishlist } = useStateValue();
  console.log(wishlist);
  return (
    <>
      <div className="min-h-[80vh]">
        {wishlist.length ? (
          <Products title="Wishlist" data={wishlist} />
        ) : (
          <Empty
            title="Sizga yoqqanini qoʻshing"
            url={empt}
          />
        )}
      </div>
    </>
  );
};

export default Wishes;
