import React,{useContext, useEffect, useState} from 'react'
import styles from '../../Modules/HeaderCartButton.module.scss'
import CartContext from '../../store/CartContext'
import CartIcon from '../Cart/CartIcon'

export const HeaderCartButton = (props) => {
    const [btnHighLight, setBtnHighLight] = useState(false)
    const cartCtx = useContext(CartContext)

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
        return curNumber + item.amount
    }, 0)


  const btnClasses = `${styles.button} ${ btnHighLight ? styles.bump : ''}`

  useEffect(()=>{
    if(cartCtx.items.length === 0){
        return
    }
    setBtnHighLight(true);

    const timer  = setTimeout(()=>{
        setBtnHighLight(false)
    },300)

    return()=>{
        clearTimeout(timer)
    }
  },[cartCtx])

  return <button className={btnClasses} onClick={props.onClick}>
    <span className={styles.icon}>
        <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span className={styles.badge}>
        {numberOfCartItems}
    </span>
  </button>

}
