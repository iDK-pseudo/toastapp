import { LongFoodCard } from "../components/LongFoodCard.jsx";
import { useDispatch, useSelector } from 'react-redux';

export function Main () {
    const allItems = useSelector(state => state.foodRed.allItems);
    const dispatch = useDispatch();

    return (
        <div
            style={{
                padding: "20px",
            }}
        >
            {allItems.map(item => <LongFoodCard item={item}/>)}
        </div>
    )
}