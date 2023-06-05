import { Link } from "react-router-dom"
import "./Card.css"
import { useContext} from "react"
import { SupplyContext } from "../Context/Context"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Card({item}) {
    const {addToCart,selectedCurrency} = useContext(SupplyContext);

    const addToCartNotification = () => {
        toast("ITEM ADDED TO CART!",{
            position:"bottom-right",
            theme:"dark"
          });
    }
    return(
        <>
            <div className="card"> 
            <Link className = "link" to = {`/product/${item.id}`} >
               <div className="cardImages">
                {item.isNew && <span className="newItem">New Season</span>}
                  <img src = {item.img[0]}alt = "" className="mainImg" />
                  <img src = {item.img[1]} alt = "" className="secondImg" />
               </div>
            
               </Link>
               <h2>{item.title}</h2>
   
               <div className="prices">
                  <h3 className="oldPrice"> {selectedCurrency == "IND" ? `₹${item.oldPrice*82}` : `$${item.oldPrice}`}</h3>
                  <h3 className="newPrice"> {selectedCurrency == "IND" ? `₹${item.price*82}` : `$${item.price}`}</h3>
                  <div onClick = {addToCartNotification}>
                   <button className="addToCartBtn" onClick = {() => addToCart(item.id)}>
                    <ShoppingCartOutlinedIcon /> ADD TO CART
                </button>
                </div>
               </div>
               <ToastContainer />
            </div>
            </>
       
    )
}