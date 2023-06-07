import { Link } from "react-router-dom";
import "./Cart.css"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useContext } from "react";
import { SupplyContext } from "../../components/Context/Context"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Emptycart from "../../assets/Emptycart.gif" 


export default function Cart() {
   const {cart, removeItem,clearCart, setCart,selectedCurrency} = useContext(SupplyContext);
   const subTotal = cart.reduce((acc,curr) => acc + (curr.qty * curr.price),0)
  
   const decreaseHandler = (item, index) => {
    if(item.qty > 1) {
      setCart(cart => cart.map(cartItem => cartItem.id === item.id ? {...cartItem, qty: cartItem.qty--} : {...cartItem}));
    } else {
      removeItem(index);
    }
   }
   
   const increaseHandler = (item) => {
    setCart(cart => cart.map(cartItem => cartItem.id === item.id ? {...cartItem, qty: cartItem.qty++} : {...cartItem}));
   }
    
   const notifyRemovedItems = () => {
    toast("ITEM REMOVED FROM CART!",{
      position:"bottom-right",
      theme:"dark"
    });
   }
   const notifyForResetCart = () =>{
    toast("NO ITEMS IN THE CART!",{
      position:"bottom-right",
      theme:"dark"
    });
   }
   return(
    <>
        <div className="cart">
         { 
          cart.length == 0 ? <img src = {Emptycart}/>: 
            cart.map((item,index) => 
            <>
            <div className="cartItem" key = {item.id}>
                <img className = "cartImg"src= {item.img} alt = ""/>
                <div className="cartDetails">
                    <h1 className="itemTitle">{item.title}</h1>
                    <p className="itemDesc">{item.desc}</p>
                    <div className="cartPrice">
                      Price: {selectedCurrency == "IND" ? `₹${item.price*82}` : `$${item.price}`}
                    </div>
                    <div className="quantity"> 
                    <button className="quantityBtn"
                    onClick={() => decreaseHandler(item, index)}
                    >-</button>
                     {item.qty}
                    <button className=" quantityBtn"
                    onClick={() => increaseHandler(item)}
                    >+</button>
                    </div>
                </div>
                <div onClick={notifyRemovedItems}>
                <Link to = "/cart"><DeleteOutlineOutlinedIcon className = "deleteItem" onClick ={() => removeItem(index)}/></Link>
               </div>
            </div>
            
         </>
            )
            
         }
         
         <ToastContainer />
        </div>
        <div className="bill">
        <div className="total">
            <span >Subtotal : {selectedCurrency == "IND" ? `₹${subTotal*82}` : `$${subTotal}`}</span>
         </div>
     <Link to = "/checkout" className="checkoutLink"> <button className= "checkoutBtn">PROCEED TO CHECKOUT</button> </Link>
         <div onClick={notifyForResetCart}>
         <span className="resetCart" onClick={clearCart}>Reset Cart</span>
         </div>
         </div>
         </>
    )
}