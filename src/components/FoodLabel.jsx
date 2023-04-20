import React from 'react'
import "../styles/FoodLabel.css"

export default function FoodLabel({isVeg}) {
    let border = null, bg = null;
    
    if(isVeg){
        border = "food-label-veg-border";
        bg ="food-label-veg-bg";
    }else{
        border = "food-label-nonveg-border";
        bg ="food-label-nonveg-bg";
    }

    return (
        <div className={`food-label-container ${border}`}>
            <div className={`food-label-content ${bg}`}>
            </div>
        </div>
    )
}
