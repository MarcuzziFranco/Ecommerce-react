import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext); //custom hook

export const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [quantityproducts, setQuantityProducts] = useState(0);

  const updateQuantyProducts = (amount) => {
    setQuantityProducts(quantityproducts + amount);
  };

  const addProduct = (product, quantity) => {
    console.log(product);
    let cartProduct = {
      product,
      quantity,
    };

    if (!isInCart(product)) {
      console.log("no existe");
      setCartProducts([...cartProducts, cartProduct]);
    } else {
      console.log("existe");
      let cartProduct = cartProducts.find((item) => item.id === product.Id);
      cartProduct.quantity += quantity;
    }
  };
  const removeItem = (productId) => {};

  const clearCart = () => {
    setCartProducts([]);
  };

  const isInCart = (product) => {
    console.log(cartProducts);
    return (
      cartProducts.find((item) => item.product.id === product.id) !== undefined
    );
  };

  const context = {
    quantityproducts,
    cartProducts,
    addProduct,
    updateQuantyProducts,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};
