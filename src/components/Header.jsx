export default function Header({ cartCount, onCartClick }) {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo-text">BuyFood.ng</h1>
        <button className="cart-button" onClick={onCartClick}>
          Tray ({cartCount})
        </button>
      </div>
    </header>
  )
}
