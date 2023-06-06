import { createContext, useEffect } from "react";
import { data } from "../../assets/images"
import { useState } from "react";
import { filtersHandler } from "../../Utils/filterFunction";
export const SupplyContext = createContext();

export function SupplyProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [selectedCurrency, setSelectedCurrency] = useState();
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState({
        searchValue: "",
        checkboxes: [],
        priceRange: 3000,
        sortBy: ""
    });
    const [address, setAddress] = useState([
        {
            name: 'yash',
            mobile: '9999999999',
            pincode: '121002',
            city: 'Delhi',
            state: 'New Delhi'
        }
    ])

    //To remove Item from Cart
    useEffect(() => {
        setProducts(data);
    }, [])

    const removeItem = (index) => {
        const updatedCart = [...cart]
        updatedCart.splice(index, 1)
        setCart(updatedCart);
    }
    //Add to Cart
    function addToCart(prodId) {
        const item = data.find(({ id }) => id === prodId)
        setCart((cart) => [...cart, { ...item, qty: 1 }]);

    }
    //Add To WishList

    function addToWishList(prodId) {
        const item = data.find(({ id }) => id === prodId)
        setWishList((wishList) => [...wishList, item])
    }
    //To Clear The Cart
    const clearCart = () => {
        const updatedCart = [...cart]
        updatedCart.splice(0)
        setCart(updatedCart);
    }
    //To Remove Item From Wishlist
    const removeWishlistItem = (index) => {
        const updateWishlist = [...wishList]
        updateWishlist.splice(index, 1)
        setWishList(updateWishlist)
    }
    const currencyHandler = (e) => {
        setSelectedCurrency(e.target.value)
    }
    const searchHandler = (e) => {
        setSearch(e.target.value)
    }
    const filteredItems = filtersHandler(filters, products);
    return (
        <SupplyContext.Provider value={{ cart, products, filters, address, setAddress, setFilters, filteredItems, setCart, addToCart, wishList, addToWishList, removeItem, clearCart, removeWishlistItem, selectedCurrency, currencyHandler, search, setSearch, searchHandler }}>
            {children}
        </SupplyContext.Provider>
    )
}