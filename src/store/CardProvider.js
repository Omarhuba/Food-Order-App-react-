import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) =>{
    if(action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item)
        const newTotelAmount = state.totalAmount + action.item.price * action.item.amount
        return {
            items: updatedItems,
            totalAmount: newTotelAmount,
        }
    }
    return defaultCartState;
}

export const CartProvider = (props) => {
    const[cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    const addItemToCartHander =(item)=>{
        dispatchCartAction({type: 'ADD', item: item})
    }
    const removeItemFromCartHander =(id)=>{
        dispatchCartAction({type: 'REMOVE', id: id})
    }


    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHander,
        removeItem: removeItemFromCartHander
    }

  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>;
};
