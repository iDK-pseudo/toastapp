import React from 'react'
import "../styles/PlaceOrder.css"
import { useSelector, useDispatch } from 'react-redux'
import {placeOrder} from "../model/foodSlice.js"

export default function PlaceOrder() {
    const currentOrders = useSelector(state=>state.foodRed.currentOrders);
    const dispatch = useDispatch();

    const handlePlaceOrder = () => {
        dispatch(placeOrder());
    }

    return (
        <div className="place-order-container" onClick={handlePlaceOrder}>
            <div>{currentOrders.length} Items</div>
            <div>Place Order</div>
        </div>
    )
}
