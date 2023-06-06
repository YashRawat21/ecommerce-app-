import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { useContext } from 'react';
import { SupplyContext } from '../Context/Context';
import { useAuth } from '../Context/auth-context';

export default function Navbar(){
  const {cart,wishList,currencyHandler} = useContext(SupplyContext)
  const { token } = useAuth();
    return(
        <div className="navbar">
            <div className="wrapper">

        <div className="left">
          <div className="item">
            <img src ="/img/en.png" alt =""/>
            <KeyboardArrowDownOutlinedIcon />
          </div>
          <div className="item">
            <select className='currency' onChange={(e) => currencyHandler(e)}>
              <option value = "USD">USD</option>
              <option value = "IND">IND</option>
            </select>
          </div>
          <div className="item">
            <Link className='link' to ="/products">Women</Link>
          </div>
          <div className="item">
            <Link className='link' to ="/products">Men</Link>
          </div><div className="item">
            <Link className='link' to ="/products">Kids</Link>
          </div>
        </div>
        <div className="center">
         <Link className='link' to ="/">SHOPIFY</Link> 
        </div>
        <div className="right">
        <div className="item">
            <Link className='link' to ="/"> HomePage</Link>
        </div>
        <div className="item">
            <Link className='link' to ="/"> About</Link>
        </div>
        <div className="item">
            <Link className='link' to ="/"> Contact</Link>
        </div>
        <div className="item">
            <Link className='link' to ="/"> Stores</Link>
        </div>
        <div className="icons">
         <Link to = {`${token ? "/profile" : "/login"}`}> <PersonOutlineOutlinedIcon /> </Link>
         <Link to ="/wishList"> <FavoriteOutlinedIcon /> </Link>
         <span className='wishListItems'>{wishList.length}</span>
        </div>
        
        <div className="cartIcon">
        <Link to= "/cart"> <ShoppingCartOutlinedIcon /> </Link> 
        
         <span className='cartItems'>{cart.length}</span>
        </div>
        </div>
        </div>
        
        </div>
    )
}