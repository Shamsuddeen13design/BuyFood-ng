import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

function App() {
  const [cart, setCart] = useState([])
  const [currentPage, setCurrentPage] = useState('menu')

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id)
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ))
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId))
  }

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId)
    } else {
      setCart(cart.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      ))
    }
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const handleCheckout = () => {
    alert(`Order placed! Total: $${getTotalPrice().toFixed(2)}`)
    setCart([])
    setCurrentPage('menu')
  }

  return (
    <div className="app">
      <Header cartCount={cart.length} onCartClick={() => setCurrentPage('cart')} />
      
      {currentPage === 'menu' && (
        <Menu onAddToCart={addToCart} onCheckoutClick={() => setCurrentPage('checkout')} />
      )}
      
      {currentPage === 'cart' && (
        <Cart 
          items={cart} 
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
          onCheckout={() => setCurrentPage('checkout')}
          onContinueShopping={() => setCurrentPage('menu')}
        />
      )}
      
      {currentPage === 'checkout' && (
        <Checkout 
          items={cart}
          total={getTotalPrice()}
          onPlaceOrder={handleCheckout}
          onBack={() => setCurrentPage('cart')}
        />
      )}
    </div>
  )
}

export default App
