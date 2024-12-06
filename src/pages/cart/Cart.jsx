import React, { useState } from "react";
import Empty from "../../pages/empty/Empty";
import { useStateValue } from "../../context";
import no from "../../assets/no.png"
import { useNavigate } from "react-router-dom";
import Promocode from "../../components/promocode/Promocode"

const Cart = () => {

  const [promoStatus] = useState({msg:"",error:false, success:false})

  const { cart , setCart} = useStateValue();
  console.log(cart);
  const handleIncrement = product => {
    setCart(prev => prev.map(item => item.id === product.id ? {...item, amount: item.amount + 1} :item))
  }

  const navigate = useNavigate()
  

  const handleDecrement = (product) => {
    console.log(product);
    
    setCart((prev) =>
      prev.map((item) =>
        item.id === product.id? {...item, amount: Math.max(item.amount - 1, 1) } : item
      )
    );
  };

  
  const handleDelete = (product) => {
    console.log(product);
    setCart((prev) => prev.filter((item) => item.id!== product.id));
    
  };

  
  


  return (
    <div className="min-h-[80vh] bg-gray-50 py-6">
      {cart.length ? (
        <div className="container mx-auto flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-4">
            {cart?.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg border border-gray-200"
              >
                <img
                  className="w-24 h-24 object-cover rounded-lg"
                  src={item.thumbnail}
                  alt={item.title}
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Narxi: ${item.price.toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleDelete(item)}
                    className="mt-2 text-sm font-medium text-red-600 hover:text-red-800 transition"
                  >
                    O'chirish
                  </button>
                </div>
                <div className="border border-gray-300 w-24 flex h-10 justify-between items-center rounded-lg shadow-sm overflow-hidden bg-gray-100">
                  <button
                    onClick={() => handleIncrement(item)}
                    className="flex-1 text-lg font-bold text-blue-600 hover:bg-blue-200 transition duration-200"
                  >
                    +
                  </button>
                  <span className="px-3 text-gray-800 font-medium">
                    {item.amount}
                  </span>
                  <button
                    onClick={() => handleDecrement(item)}
                    className="flex-1 text-lg font-bold text-red-600 hover:bg-red-200 transition duration-200"
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-96 p-6 bg-white shadow-lg rounded-lg border border-gray-200 sticky top-20">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Buyurtma Xulosasi
            </h2>
            <div className="space-y-2">
              <p className="flex justify-between text-gray-700">
                <span>Mahsulotlar:</span>
                <span>
                  $
                  {cart
                    ?.reduce((sum, item) => sum + item.price * item.amount, 0)
                    .toFixed(2)}
                </span>
              </p>
              <p className="flex justify-between text-gray-700">
                <span>Yetkazib berish:</span>
                <span>Siz uchun faqat Bepul</span>
              </p>
              <p className="flex justify-between text-gray-800 font-semibold text-lg">
                <span>Jami:</span>
                <span>
                  $
                  {(
                    cart?.reduce(
                      (sum, item) => sum + item.price * item.amount,
                      0
                    ) + 5
                  ).toFixed(2)}
                </span>
              </p>
                <Promocode promoStatus/>
              
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className="mt-4 w-full py-2 px-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <Empty title="Savatingiz bo‘sh" url={no} />
      )}
    </div>
  );
};

export default Cart;
