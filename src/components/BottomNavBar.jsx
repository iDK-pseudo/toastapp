import React from 'react'
import { useSelector } from 'react-redux'
import bag from "../static/211626_bag_icon.svg"
import "../styles/BottomNavBar.css"

export default function BottomNavBar({handleOrdersClick}) {
  const currentOrders = useSelector(state=>state.foodRed.currentOrders);
  return (
    <div className="bottom-nav-container">
      <div>Events</div>
      <div>Menu</div>
      <div>
          <img className="bottom-nav-bag" src={bag} onClick={handleOrdersClick}/>
          <div className="bottom-nav-count">
              <p>{currentOrders.length}</p>
            </div>
      </div>
    </div>
  )
}
