import CartContext from "./CartContext";

export const CartProvider = (props) => {

    const addItemToCartHander =(item)=>{

    }
    const removeItemFromCartHander =(id)=>{

    }


    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHander,
        removeItem: removeItemFromCartHander
    }

  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>;
};
