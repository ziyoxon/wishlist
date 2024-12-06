import React from "react";
import { useStateValue } from "../../context";
import Products from "../../components/products/Products";
import Empty from "../empty/Empty";


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
            url="https://uzum.uz/static/img/hearts.cf414be.png"
          />
        )}
      </div>
    </>
  );
};

export default Wishes;
