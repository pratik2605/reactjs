import React, { useState } from "react";
import { icecream } from "./icecreamList";
import "./style.css";

const Icecream = props => {

  const [flavorCount, setFlavourCount] = useState({
    chocolate: 0,
    vanilla: 0,
    strawberry: 0,
    mint: 0,
    cottonCandy: 0,
    cherry: 0
  })
  const [cart, setCart] = useState({
    subtotal: 0,
    discount: 0
  })
  const updateCart = (itemKey, itemPrice) => {
    const newItemCount = addItem(itemKey);
    const newSubtotal = calcSubtotal(itemPrice);
    const newDiscount = calcDiscount(newSubtotal);
    setFlavourCount({
      ...flavorCount,
      [itemKey]: newItemCount
    })

    setCart({
      subtotal: newSubtotal,
        discount: newDiscount
    })
  };

  const calcDiscount = subtotal => {
    // if you spend $10 you get 10% off
    return subtotal > 10 ? 0.1 : 0;
  };

  const addItem = itemKey => {
    return flavorCount[itemKey] + 1;
  };

  const calcSubtotal = amount => {
    return cart.subtotal + amount;
  };

  const getTotal = () => {
    const subtotal = cart.subtotal;
    const discount = cart.discount;
    const discountAmount = subtotal * discount;
    const total = subtotal - discountAmount;
    return total;
  };

  return (
    <div className="shop-container">
      <div className="wrapper">
        <div className="ice-cream-container">
          {icecream.map((item, index) => (
            <div
              onClick={() => updateCart(item.key, item.price)}
              style={{ background: item.color, color: item.fontColor }}
              key={index}
              className="icecream"
            >
              {item.flavor}
            </div>
          ))}
        </div>
        <div className="cart-container">
          <div className="selected-icecream">
            {icecream.map((item, index) => (
              <div
                style={{ color: item.color }}
                key={index}
                className="icecream-count"
              >
                {item.flavor}: {flavorCount[item.key]}
              </div>
            ))}
          </div>
          <div className="summary">
            <div>Discount: {cart.discount > 0 ? 10 : 0}%</div>
            <div>Subtotal: ${cart.subtotal}</div>
            <div style={{ fontWeight: "bold" }}>Total: ${getTotal()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icecream;
