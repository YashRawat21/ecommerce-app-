import "./FeaturedProducts.css"
import Card from "../Card/Card"
import {data} from "../../assets/images"
export default function FeaturedProducts({type}) {


    return(
        <div className="featuredProducts">
         <div className="top">
            <h1 className="myProd">{type} products</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem saepe beatae sapiente ducimus quaerat placeat similique voluptatibus pariatur! Reprehenderit veniam mollitia qui accusamus labore eaque, expedita praesentium itaque possimus consequatur.
            </p>
         </div>
         <div className="bottom">
            {
                data.slice(0,4).map(item => (
                    <Card item = {item} key = {item.id}/>
                  
                ))
            }
         </div>
        </div>
    )
}