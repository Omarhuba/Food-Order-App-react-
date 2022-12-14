import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) =>{
    if(action.type === 'ADD'){
        // const updatedItems = state.items.concat(action.item)
        const existingCartItemIndex = state.items.findIndex(item =>item.id === action.item.id)
        const existingCartItem = state.items[existingCartItemIndex]
        const newTotelAmount = state.totalAmount + action.item.price * action.item.amount
        let updatedItem ;
        let updatedItems;
        if(existingCartItem){
            updatedItem={
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }else{
            updatedItem = {...action.item}
            updatedItems = state.items.concat(action.item)
        }


        return {
            items: updatedItems,
            totalAmount: newTotelAmount,
        }
    }
 
    if(action.type === 'REMOVE'){
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
            )
            const existingItem = state.items[existingCartItemIndex]
            const updatedTotelAmount = state.totalAmount - existingItem.price;
            let updatedItems;
            if(existingItem.amount === 1){
                updatedItems = state.items.filter(item => item.id !== action.id)
            }else{
                const updatedItem = {...existingItem, amount: existingItem.amount -1}
                updatedItems = [...state.items]
                updatedItems[existingCartItemIndex] = updatedItem
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotelAmount
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
