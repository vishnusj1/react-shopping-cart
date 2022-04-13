import { useEffect, useState } from "react";

const Cart = ({ cart, addToCart, removeFromCart }) => {
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const sumTotal = () => {
      return cart
        .reduce(
          (total, curProduct) => total + curProduct.qty * curProduct.price,
          0
        )
        .toFixed(2);
    };
    setCartTotal(sumTotal);
  }, [cart]);

  const itemTotal = (itemId) => {
    const item = cart.find((item) => item.id === itemId);
    const total = item.qty * item.price;
    return total;
  };

  const itemsList = cart.map((item) => {
    let total = itemTotal(item.id);
    return (
      <CartItem
        key={item.id}
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        qty={item.qty}
        itemTotal={total}
        increment={addToCart}
        decrement={removeFromCart}
      />
    );
  });

  return (
    <div className="cartContainer">
      <div className="cartHeader">
        <h2>Your Cart</h2>
      </div>
      {cart.length > 0 ? (
        <div className="cartBody">
          <div className="cartItems">
            <ul>{itemsList}</ul>
          </div>
          <div className="summary">
            <div className="cartSummary">
              <h2>Summary</h2>
              <div className="subTotal">
                <h3>Total : $ {cartTotal}</h3>
              </div>
              <div className="checkout">
                <div className="checkoutButton">Checkout</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="cartEmpty">
          <h3>No Items in your cart</h3>
        </div>
      )}
    </div>
  );
};

const CartItem = ({ id, title, qty, itemTotal, decrement, increment }) => {
  return (
    <li className="cartItem">
      <div className="itemTitle">{title}</div>
      <div className="itemDetails">
        <QuantityController
          key={id}
          id={id}
          qty={qty}
          increment={increment}
          decrement={decrement}
        />
        <div className="itemTotal">
          <span>$</span> {itemTotal}
        </div>
      </div>
    </li>
  );
};

const QuantityController = ({ id, qty, increment, decrement }) => {
  return (
    <div className="QtyController">
      <div className="btn decrement" onClick={() => decrement(id)}>
        -
      </div>
      <div>{qty}</div>
      <div className="btn increment" onClick={() => increment({ id })}>
        +
      </div>
    </div>
  );
};
export {CartItem,QuantityController};
export default Cart;
