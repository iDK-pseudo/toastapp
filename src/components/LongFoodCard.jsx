import { AddButton } from "./AddButton.jsx";
import FoodLabel from "./FoodLabel.jsx"
import "../styles/LongFoodCard.css";

export function LongFoodCard ({item}) {
    return (
        <div className="lg-fc-container">
            <div className="lg-fc-img-container">
                <img className="lg-fc-img" src="https://s3-ap-south-1.amazonaws.com/toast-prod-data/restruant/1532633202630259791/2022-03-10/Compressed_Compressed_WTFF--2.JPG"/>
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