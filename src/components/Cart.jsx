export default function Cart({ items, onRemove, onUpdateQuantity, onCheckout, onContinueShopping }) {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  if (items.length === 0) {
    return (
      <main className="cart-container">
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Add some delicious food to get started!</p>
          <button className="primary-btn" onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </main>
    )
  }
  


  return (
    <main className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {items.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-info">
              <span className="item-emoji">{item.emoji}</span>
              <div>
                <h4>{item.name}</h4>
                <p>₦{item.price.toFixed(2)} each</p>
              </div>
            </div>
            <div className="cart-item-controls">
              <button 
                className="qty-btn"
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              >
                −
              </button>
              <span className="quantity">{item.quantity}</span>
              <button 
                className="qty-btn"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <div className="cart-item-price">
              ₦{(item.price * item.quantity).toFixed(2)}
            </div>
            <button 
              className="remove-btn"
              onClick={() => onRemove(item.id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      
      <div className="cart-summary">
        <h3>Total: ₦{total.toFixed(2)}</h3>
      </div>

      <div className="cart-actions">
        <button className="secondary-btn" onClick={onContinueShopping}>
          Continue Shopping
        </button>
        <button className="primary-btn" onClick={onCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </main>
  )
}
