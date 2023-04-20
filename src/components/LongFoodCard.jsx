import { AddButton } from "./AddButton.jsx";
import FoodLabel from "./FoodLabel.jsx"
import "../styles/LongFoodCard.css";

export function LongFoodCard ({item}) {
    return (
        <div className="lg-fc-container">
            <div className="lg-fc-img-container">
                <img className="lg-fc-img" src={item.src}/>
            </div>
            <div className="lg-fc-main">
                <p className="lg-fc-title"> {item.name} </p>
                <div className="lg-fc-main-section">  
                    <FoodLabel isVeg={item.isVeg}/>           
                    <p>{item.price}</p>
                </div>
            </div>
            <div className="lg-fc-add-container">
                <AddButton id={item.id}/>
            </div>
        </div>
    )
}