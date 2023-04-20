import { Banner } from "../components/Banner.jsx";
import { FoodCard } from "../components/FoodCard.jsx";
import { useDispatch, useSelector } from 'react-redux';
import "../styles/SpecialScreen.css"

export function Special () {
    
  const allItems = useSelector(state => state.foodRed.allItems);

    return (
        <div className="special-container">
            <Banner imgSrc="https://toast-prod-data.s3.ap-south-1.amazonaws.com/restruant/52553522735652184/2020-06-20/feature_image_2.jpeg"/>
            <div className="special-food-card-container">
                {allItems.map((item)=><FoodCard item={item}/>)}
            </div>
        </div>
    )
}