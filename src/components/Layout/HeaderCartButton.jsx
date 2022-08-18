import React from 'react'
import styles from '../../Modules/HeaderCartButton.module.scss'
import CartIcon from '../Card/CartIcon'

export const HeaderCartButton = (props) => {
  return <button className={styles.button} onClick={props.onClick}>
    <span className={styles.icon}>
        <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span className={styles.badge}>
        3
    </span>
  </button>

}
