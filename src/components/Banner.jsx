import { borderRadius } from "@mui/system";
import "../styles/Banner.css";

export function Banner ({imgSrc}){
    return (
        <div className="banner-container">
            <img className="banner-img" src={imgSrc}/>
            <h2 className="banner-title">Welcome to Sacred Earth Cafe</h2>
        </div>
    )
}