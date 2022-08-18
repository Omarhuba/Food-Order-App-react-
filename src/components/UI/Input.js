import React from 'react'
import styles from '../../Modules/Input.module.scss'


export const Input = (props) => {
  return (
    <div className={styles.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input  {...props.input}  />
    </div>
  )
}
