import { useContext } from "react"
import { SupplyContext } from "../../components/Context/Context"
import { Link } from "react-router-dom"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./WishList.css"
import EmptywishList from "../../assets/EmptywishList.gif"

export default function WishList () {
    const {wishList,removeWishlistItem} = useContext(SupplyContext);
    const notifyWishlistRemovedItems = () => {
        toast("ITEM REMOVED FROM WISHLIST!",{
            position:"bottom-right",
            theme:"dark"
          });
    }
    return(
        <div className="wishList">
             {
             wishList.length == 0 ? <img class = "emptyWishlist"src = {EmptywishList} />:
            wishList.map((item,index) => <div className="wishListItem" key = {item.id}>
                <img className = "wishListImg"src= {item.img} alt = ""/>
                <div className="wishListDetails">
                    <h1 className="wishListTitle">{item.title}</h1>
                    <p className="wishListDesc">{item.desc}</p>
                    <div className="wishListPrice">
                      Price: ${item.price} 
                    </div>
                </div>
                <div onClick={notifyWishlistRemovedItems}>
                <Link to = "/wishList"><DeleteOutlineOutlinedIcon className = "wishListDeleteItem" onClick = {() => removeWishlistItem(index)}/></Link>
                </div>
            </div>
            )
         }
         <ToastContainer />
        </div>
    )
}