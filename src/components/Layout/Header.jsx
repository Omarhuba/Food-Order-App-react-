import React, { Fragment } from 'react'
import img from '../../assets/meals.jpeg'
import styles from '../../Modules/Header.module.scss'
import { HeaderCartButton } from './HeaderCartButton'

export const Header = (props) => {
  return (
    <Fragment>
        <header className={styles.header}>
            <h1>React Meals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={styles['main-image']}>
            <img src={img} alt='images' />
        </div>
    </Fragment>
  )
}
