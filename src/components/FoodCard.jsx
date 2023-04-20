import { AddButton } from "./AddButton.jsx"
import FoodLabel from "./FoodLabel.jsx"
import "../styles/FoodCard.css"

export function FoodCard ({item}) {
    return (
        <div className="food-card-container">
            <img className="food-card-img" src={item.src}/>
            <div className="food-card-section-one">
                <FoodLabel isVeg={item.isVeg}/>
                <p>{item.name}</p>
            </div>
            <div className="food-card-section-two">
                <p>{item.price}</p>
                <AddButton id={item.id}/>
            </div>
        </div>
    )
}