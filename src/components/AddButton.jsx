import { useState } from "react";
import minus from "../static/minus.454d66ce.svg"
import plus from "../static/plus.a5d317a6.svg"
import "../styles/AddButton.css"
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem,incrementItemCount, decrementItemCount } from "../model/foodSlice.js";

export function AddButton ({id}) {
    const currentOrders = useSelector(state => state.foodRed.currentOrders);
    const dispatch = useDispatch();
    const itemVsCount = useSelector(state => state.foodRed.itemVsCount);
    const [count, setCount] = useState(itemVsCount[id]);

    const handleAdd = () => {
        if(count == 0 && !currentOrders.includes(id)){
            dispatch(addItem(id));
        }
        dispatch(incrementItemCount(id));
        setCount(count+1);
    }

    const handleMinus = () => {
        if(count-1==0){
            dispatch(removeItem(id));
        }
        dispatch(decrementItemCount(id));
        setCount(count-1);
    }
    
    const Default = () => {
        return (
            <div className="btn" onClick={handleAdd}>
                <img className="plus-img" src={plus}/>
                <p>Add</p>
            </div>
        )
    }

    const Count = ({count}) => {
        return (
            <div className="btn count-btn">
                <img className="minus-img" onClick={handleMinus} src={minus}/>
                <p>{count}</p>
                <img className="plus-img" src={plus} onClick={handleAdd}/>
            </div>
        )
    }

    return (
        <div>
            {count == 0 && <Default/>}
            {count > 0 && <Count count={count}/>}
        </div>
    )
}