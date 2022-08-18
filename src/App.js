import {  useState } from 'react';
import './App.css';
import {Header} from './components/Layout/Header'
import {Meals} from './components/Meals/Meals'
import {Cart} from './components/Card/Cart'
import { CartProvider } from './store/CardProvider';


function App() {
  const [showCart, setShowCard] = useState(false)

  const showCartHandler = ()=>{
    setShowCard(true)
  }
  const hideCartHandler = ()=>{
    setShowCard(false)
  }

  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHandler}/>}
        <Header onShowCart ={showCartHandler} />
        <main>
          <Meals/>
        </main>
    </CartProvider>
  );
}

export default App;
