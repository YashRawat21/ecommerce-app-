import { useContext } from "react";
import { useParams } from "react-router-dom"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { data } from "../../assets/images"
import { SupplyContext } from "../../components/Context/Context";
import "./Product.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Product() {
    const productId = parseInt(useParams().id)
     const {addToCart,addToWishList,selectedCurrency} = useContext(SupplyContext)

    const findData = data.find((items) => {
        return items.id == productId
    })
    const notifyForWishlist = () => {
      toast("ITEM ADDED TO WISHLIST!",{
        position:"bottom-right",
        theme:"dark"
      });
     }
     const notifyForCart = () => {
      toast("ITEM ADDED TO CART!",{
        position:"bottom-right",
        theme:"dark"
      });
     }
  
    return (
        <div className="prod">
            <div className="productLeft">
               
                <div className="ProductMainImg">
                    <img className="prodMainImg" src={findData.img[0]} alt=" " />
                </div>
            </div>

            <div className="productRight">
                <h1>PRODUCT</h1>
                <span className="prodPrice">{selectedCurrency == "IND" ? `₹${findData.price*82}` : `$${findData.price}`}</span>

                  <div className="info">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nulla recusandae
                        adipisci laboriosam modi? Voluptatem nisi tempora veniam natus est iste cupiditate
                        praesentium non commodi enim a, voluptatibus, sed ex?
                    </p>
                 
                 <div onClick={notifyForCart}>
                <button className="addBtn" onClick = {() => addToCart(productId)}>
                    
                   <ShoppingCartOutlinedIcon/> ADD TO CART
                </button>
                </div>
                <div className="linkItem" onClick = {() => addToWishList(productId)}>
                    <div className="prodItem" onClick = {notifyForWishlist}>
                      <FavoriteOutlinedIcon /> ADD TO WISHLIST
                    </div>
                </div>
                <div className="details">
                    <span>Description</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                 </div>
                </div>
                </div>
           <ToastContainer />
        </div>
    )
}

