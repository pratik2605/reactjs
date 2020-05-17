import { useState, useEffect } from 'react';
import { calculateTax } from '../api/tax'

export const useCart = (initialItems = null) => {

  const [ items, setItems] = useState(initialItems)
  const [ totalItems, setTotalItems] = useState(0)
  const [ totalCost, setTotalCost] = useState(0)
  const [ tax, setTax ] = useState(0)

  useEffect(() => {
      const preTax = calcPreTaxCost()
      const tax$ = calculateTax(preTax).subscribe(
          (calcTax) => setTax(calcTax)
      )
      calcTotalCost()
      calcTotalItems()

      return tax$.unsubscribe()
  }, [ items ])

  useEffect(() => {
    calcTotalCost()
}, [ tax ])

  const calcPreTaxCost = () => {
    if (checkForItems()) {
        return items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    }
    return 0
  }

  const calcTotalCost = () => {
    if (checkForItems()) {
        const preTax = calcPreTaxCost()
        const total = preTax + tax
        setTotalCost(total)
    }
    else {
        setTotalCost(0)
    }
  }

  const calcTotalItems = () => {
    if (checkForItems()) {
        setTotalItems(
            items.reduce((acc, item) => acc + item.quantity, 0)
        )
    }
    else {
        setTotalItems(0)
    }
  }

  const checkForItems = () => {
    return !!(items && items.length > 0)
  }

  const addItem = (newItem) => {
    const foundItem = items.find((item) => item.name === newItem.name)
    
    if (foundItem) {
        foundItem.quantity += 1;
        setItems([
            ...items.filter((item) => item.name !== foundItem.name),
            foundItem
        ])
    }
    else {
        newItem.quantity = 1;
        setItems([
            ...items,
            newItem
        ])
    }
  }

  const removeItem = (itemToRemove) => {
    if (itemToRemove.quantity === 1) {
        setItems([
            ...items.filter((item) => item.name !== itemToRemove.name)
        ])
    }
    else {
        itemToRemove.quantity -= 1;
        setItems([
            ...items.filter((item) => item.name !== itemToRemove.name),
            itemToRemove
        ])
    }
}

  return [
      items,
      addItem,
      removeItem,
      totalItems,
      totalCost,
      tax
  ]
}