import React from 'react'
import { AddButton } from './AddButton.jsx'
import "../styles/OrdersListItem.css"
import FoodLabel from "./FoodLabel.jsx"
import { useSelector } from 'react-redux'

export default function OrdersListItem({id, prev}) {

  const allItems = useSelector(state => state.foodRed.allItems);
  const selectedOrder = allItems.find((order)=>order.id == id);
  const prevItemVsCount = useSelector(state => state.foodRed.prevItemVsCount);
  const count = prevItemVsCount[id];

  return (
    <li className="orders-li">
       <FoodLabel/>
        <div className="orders-li-section">
            <p>{selectedOrder.name}</p>
            <p>{selectedOrder.price}</p>
        </div>
        {!prev && <AddButton id={id}/>}
        {prev && <p>{count}</p>}
    </li>
  )
}
