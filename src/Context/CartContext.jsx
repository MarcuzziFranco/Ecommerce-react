import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext); //custom hook

export const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [quantityproducts, setQuantityProducts] = useState(0);

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
    setQuantityProducts(quantityproducts + quantity);
  };

  const removeItemCart = (itemCart) => {
    setQuantityProducts(quantityproducts - itemCart.quantity);
    const newList = cartProducts.filter((item) => item !== itemCart);
    setCartProducts(newList);
  };

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
    removeItemCart,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};
