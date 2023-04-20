import React from 'react'
import OrdersListItem from '../components/OrdersListItem.jsx'
import "../styles/OrdersScreen.css"
import { useSelector } from 'react-redux'
import arrow from "../static/352020_arrow_back_icon.svg"

export default function Orders({handleBack}) {

  const currentOrders = useSelector(state => state.foodRed.currentOrders);
  const previousOrders = useSelector(state => state.foodRed.previousOrders);
  
  return (
    <div className="orders-container">
        <div className="orders-header">
            <img src={arrow} onClick={handleBack}/>
            <h1> Place Order </h1>
        </div>
        <div className="orders-main">
            <h1>Orders</h1>
            <ul className="orders-list">
                {currentOrders.map(id => <OrdersListItem id={id}/>)}
            </ul>
        </div>
        <div className="orders-prev">
            <h1>Previous Orders</h1>
            <ul className="orders-list">
                {previousOrders.map(id => <OrdersListItem id={id} prev={true}/>)}
            </ul>
        </div>
    </div>
  )
}
