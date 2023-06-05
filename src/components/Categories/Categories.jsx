import "./categories.css"

import {Link } from "react-router-dom"

export default function Categories() {
 
    return(
      
        <div className="categories">
           <div className="col">
            <div className="row">
             <img className = "first"src = "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt ="" />
              <Link  to = "/products">
                  <button className="categoryBtn">
                     Sale
                   </button>
               </Link>
            </div>
            <div className="row">
            <img className = "first"src = "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt ="" />
             <button className="categoryBtn">
              <Link className="categoryLink" to = "/products">Women</Link>
             </button>
            </div>

           </div>
           <div className="col">
           <div className="row">
           <img className = "first"src ="https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg"alt ="" />
             <button className="categoryBtn">
              <Link className="categoryLink" to = "/products">New Season</Link>
             </button>
           </div>

           </div>
           <div className="col col-l">
           <div className="row">
           <div className="col">
            <div className="row">
            <img className = "first"src = "https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt ="" />
             <button className="categoryBtn">
              <Link className="categoryLink" to = "/products">Men</Link>
             </button>
            </div>
           </div>
           <div className="col">
           <div className="row">
           <img className = "first"src = "https://images.pexels.com/photos/2002502/pexels-photo-2002502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt ="" />
             <button className="categoryBtn">
              <Link className="categoryLink" to = "/products">Accessories</Link>
             </button>
           </div>

           </div>
           

           </div>
           <div className="row">
           <img className = "first"src = "https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt ="" />
             <button className="categoryBtn">
              <Link className="categoryLink" to = "/products">Shoes</Link>
             </button>
           </div>

           </div>
        </div>
    )
}