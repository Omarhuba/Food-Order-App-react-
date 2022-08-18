import React, { Fragment } from 'react'
import styles from '../../Modules/Modal.module.scss'
import  ReactDOM  from 'react-dom'



const  Backdrop = (props)=>{
   return <div className={styles.backdrop} onClick={props.onClose}></div>
}


const  ModalOverlay = (props)=>{
   return <div className={styles.modal}>
       <div className={styles.content}>
           {props.children}
       </div>
   </div>
}

const portalElement = document.getElementById('overlays')

export const Modal = (props) => {
  return (
    <Fragment  >
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}


    </Fragment>
  )
}



// import { Fragment } from 'react';
// import ReactDOM from 'react-dom';

// import styles from '../../Modules/Modal.module.scss';

// const Backdrop = (props) => {
//   return <div className={styles.backdrop} />;
// };

// const ModalOverlay = (props) => {
//   return (
//     <div className={styles.modal}>
//       <div className={styles.content}>{props.children}</div>
//     </div>
//   );
// };

// const portalElement = document.getElementById('overlays');

// const Modal = (props) => {
//   return (
//     <Fragment>
//       {ReactDOM.createPortal(<Backdrop />, portalElement)}
//       {ReactDOM.createPortal(
//         <ModalOverlay>{props.children}</ModalOverlay>,
//         portalElement
//       )}
//     </Fragment>
//   );
// };

// export default Modal;