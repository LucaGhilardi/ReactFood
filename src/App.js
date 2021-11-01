import { useState } from 'react';
import Header from './components/layouts/Header'
import Meals from './components/meals/Meals'
import Cart from './components/cart/Cart'
import CartProvider from './store/CartProvider';

function App() {
  const [showCart, setshowCart] = useState(false)
  
  const showCartHandler = () => {
    setshowCart(true)
  }
  const hideCartHandler = () => {
    setshowCart(false)
  }

  return (
    <CartProvider>
      {showCart && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
