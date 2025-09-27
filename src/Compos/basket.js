import React, { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Basket() {
  const { cart, totalItems, totalPrice } = useContext(CartContext);

  return (
    <div className="container">
      <h1>Your Basket</h1>
      {cart.length === 0 ? (
        <p>Basket is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
          <h3>Total Items: {totalItems}</h3>
          <h3>Total Price: ₹{totalPrice}</h3>
        </>
      )}
    </div>
     );
}