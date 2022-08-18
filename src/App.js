import { Fragment, useState } from 'react';
import './App.css';
import {Header} from './components/Layout/Header'
import {Meals} from './components/Meals/Meals'
import {Cart} from './components/Card/Cart'


function App() {
  const [showCart, setShowCard] = useState(false)

  const showCartHandler = ()=>{
    setShowCard(true)
  }
  const hideCartHandler = ()=>{
    setShowCard(false)
  }

  return (
    <Fragment>
      {showCart && <Cart onClose={hideCartHandler}/>}
        <Header onShowCart ={showCartHandler} />
        <main>
          <Meals/>
        </main>
    </Fragment>
  );
}

export default App;
