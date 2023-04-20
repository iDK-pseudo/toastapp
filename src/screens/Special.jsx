import { Banner } from "../components/Banner.jsx";
import { FoodCard } from "../components/FoodCard.jsx";
import { useDispatch, useSelector } from 'react-redux';

export function Special () {
    
  const allItems = useSelector(state => state.foodRed.allItems);

    return (
        <div>
            <Banner imgSrc="https://toast-prod-data.s3.ap-south-1.amazonaws.com/restruant/52553522735652184/2020-06-20/feature_image_2.jpeg"/>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%"
            }}>
                {allItems.map((item)=><FoodCard item={item}/>)}
            </div>
        </div>
    )
}