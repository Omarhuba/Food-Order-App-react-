import React,{useContext} from 'react'
import styles from '../../Modules/HeaderCartButton.module.scss'
import CartContext from '../../store/CartContext'
import CartIcon from '../Card/CartIcon'

export const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext)

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
        return curNumber + item.amount
    }, 0)

  return <button className={styles.button} onClick={props.onClick}>
    <span className={styles.icon}>
        <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span className={styles.badge}>
        {numberOfCartItems}
    </span>
  </button>

}
