import React from 'react';
import { render } from 'react-dom';
import './style.css'
import { useCart } from './hooks/useCart'
import { availableItems, initialCart } from './items'

const App = () => {

  const [
    items,
    addItem,
    removeItem,
    totalItems,
    totalCost,
    tax
  ] = useCart(initialCart)

  return (
    <div>
      <h3>Grocery Cart</h3>
      <hr />
      <div className="cart-container">
        {
          items.map((item) => (
            <div className="item-row" key={ item.name }>
              <div>
                <div>
                  Name: { item.name }
                </div>
                <div>
                  Unit Price:${ item.price }
                </div>
                <div>
                  Qty: { item.quantity }
                </div>
              </div>
              <div>
                <button
                  onClick={ () => { removeItem(item) } }
                  className="remove"
                  type="button"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        }
      </div>
      <hr />
      <div className="cart-data">
        <div>
          Total Items: { totalItems }
        </div>
        <div>
          Taxes: ${ tax } 
        </div>
        <div>
          Total Cost: ${ totalCost }
        </div>
      </div>
      <hr />
      <h3> Available Groceries </h3>
      <div>
        {
          availableItems.map((item) => (
            <div className="item-row" key={item.name}>
              <div>
                <div>
                  Name: { item.name }
                </div>
                <div>
                  Unit Price:${ item.price }
                </div>
              </div>
              <div>
                <button
                  onClick={ () => addItem(item) }
                  className="add"
                  type="button"
                >
                  Add
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}


render(
  <App />,
  document.getElementById('root')
);