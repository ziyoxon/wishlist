import { useContext, createContext, useState, useEffect } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(1);
  const [auth, setAuth] = useState(null);
  const [wishlist, setwishlist] = useState(JSON.parse(localStorage.getItem("wishlist")) || []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <Context.Provider value={{ count, setCount, wishlist, setwishlist }}>
      {children}
    </Context.Provider>
  );
};

export const useStateValue = () => useContext(Context);
