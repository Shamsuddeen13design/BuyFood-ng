import { useState } from 'react'

export default function Checkout({ items, total, onPlaceOrder, onBack }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    cardNumber: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.firstName || !formData.lastName || !formData.address || !formData.cardNumber) {
      alert('Please fill in all required fields')
      return
    }
    onPlaceOrder()
  }

  return (
    <main className="checkout-container">
      <h2>Checkout</h2>
      
      <div className="checkout-content">
        <div className="checkout-form">
          <form onSubmit={handleSubmit}>
            <h3>Delivery Information</h3>
            
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="address"
              placeholder="Street Address *"
              value={formData.address}
              onChange={handleChange}
              required
            />

            

            <h3>Payment Information</h3>
            
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number *"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />

            <button type="submit" className="primary-btn">
              Place Order - ₦{total.toFixed(2)}
            </button>
          </form>
        </div>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-items">
            {items.map(item => (
              <div key={item.id} className="summary-item">
                <span>{item.emoji} {item.name} x{item.quantity}</span>
                <span>₦{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="summary-total">
            <strong>Total: ₦{total.toFixed(2)}</strong>
          </div>
        </div>
      </div>

      <button className="secondary-btn" onClick={onBack}>
        Back to Cart
      </button>
    </main>
  )
}
