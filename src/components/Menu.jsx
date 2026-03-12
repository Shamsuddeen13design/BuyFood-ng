import { useState, useContext } from 'react'

const menuItems = [
  { id: 1, name: 'Cheeseburger', price: 8000, category: 'Burgers', image: '/cheeseburger.png', button: 'Add to Tray' },
  { id: 2, name: 'Margherita Pizza', price: 12000, category: 'Pizza', image: '/magheritapizza.png', button: 'Add to Tray' },
  { id: 3, name: 'Chicken Salad', price: 7000, category: 'Salads', image: '/chickensalad.png', button: 'Add to Tray' },
  { id: 4, name: 'Grilled Chicken', price: 10000, category: 'Main', image: '/roastedchicken.png', button: 'Add to Tray' },
  { id: 5, name: 'French Fries', price: 3500, category: 'Sides', image: '/frenchfries.png', button: 'Add to Tray' },
  { id: 6, name: 'Chocolate Cake', price: 5000, category: 'Desserts', image: '/chocolatecake.png', button: 'Add to Tray' },
  { id: 7, name: 'Pepperoni Pizza', price: 13000, category: 'Pizza', image: '/pepperonipizza.png', button: 'Add to Tray' },
  { id: 8, name: 'Meat Pie', price: 1000, category: 'Meat Pie', image: '/meatpie.png', button: 'Add to Tray' },
  { id: 9, name: 'Fried Fish', price: 11000, category: 'Main', image: '/friedfish.png', button: 'Add to Tray' },
  { id: 10, name: 'Ice Cream', price: 4000, category: 'Desserts', image: '/icecream.png', button: 'Add to Tray' },
]

export default function Menu({ onAddToCart, onCheckoutClick }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(menuItems.map(item => item.category))]

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory)

  return (
    <main className="menu-container">
      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-item">
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
            <p className="item-price">₦{item.price.toFixed(2)}</p>
            <button 
              className="add-btn"
              onClick={() => onAddToCart(item)}
            >
              Add to Tray
              
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}
