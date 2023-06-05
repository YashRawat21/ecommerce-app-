import { useParams } from "react-router-dom"
import List from "../../components/List/List";
import { useState } from "react";
import "./Products.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useContext, useEffect } from "react";
import { SupplyContext } from "../../components/Context/Context";
import { data } from "../../assets/images"

export default function Products() {

    const categoryId = parseInt(useParams().id)
    const [maxPrice, setMaxPrice] = useState(1000)
    const [sort, setSort] = useState(null)
    const { searchHandler, filters, setFilters } = useContext(SupplyContext)


    const checkboxHandler = (e) => {
        if(e.target.checked) {
            setFilters({...filters, checkboxes: [...filters.checkboxes, e.target.value]});
        } else {
            setFilters({...filters, checkboxes: filters.checkboxes.filter(f => f !== e.target.value)})
        }
    }
    return (

        <div className="categoryProducts">
            <div className="categoryLeft">
                <div className="searchItem">
                    <label htmlFor="seachbar"> <SearchOutlinedIcon /></label>

                    <input type="search" name="searchbar" placeholder="search"
                        onChange={(e) => setFilters({ ...filters, searchValue: e.target.value })}
                    />
                </div>
                <div className="categorycategoryFilterItem">
                    <h2 className="categoryH2">Product Categories</h2>
                    <div className="categoryInputItem">
                        <input type="checkbox" id="1" value='Long Sleeve Graphic Tshirt'
                        onChange={checkboxHandler}
                        />

                        <label className="categoryLabel" htmlFor="1">Long Sleeve Graphic Tshirt</label>
                    </div>
                    <div className="categoryInputItem">
                        <input type="checkbox" id="2" value='Skirt'
                        onChange={checkboxHandler}
                        />
                        <label className="categoryLabel" htmlFor="2">Skirts</label>
                    </div>
                    <div className="categoryInputItem">
                        <input type="checkbox" id="3" value='Coat'
                        onChange={checkboxHandler}
                        />
                        <label className="categoryLabel" htmlFor="3">Coats</label>
                    </div>
                    <div className="categoryInputItem">
                        <input type="checkbox" id="4" value='Hat'
                        onChange={checkboxHandler}
                        />
                        <label className="categoryLabel" htmlFor="4">Hat</label>
                    </div>
                </div>
                <div className="categoryFilterItem">
                    <h2 className="categoryH2">Filter By Price</h2>
                    <div className="categoryInputItem">
                        <span>0</span>
                        <input type="range" min={0} max={3000}
                            value={filters.priceRange}

                            onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                        />
                        <span>3000</span>
                    </div>
                </div>
                <div className="categoryFilterItem">
                    <h2 className="categoryH2">Sort by Price</h2>
                    <div className="categoryInputItem">
                        <input type="radio" id="asc" value="lowToHigh" name="sortBy"
                            onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                        />
                        <label className="categoryLabel" htmlFor="asc" >Price (Lowest First)</label>
                    </div>
                    <div className="categoryInputItem">
                        <input type="radio" id="desc" value="highToLow" name="sortBy"
                            onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                        />
                        <label className="categoryLabel" htmlFor="desc" >Price (Highest first)</label>
                    </div>
                </div>
                {/* FILTER BY STARS LATER  */}
            </div>
            <div className="categoryRight">
                <img
                    className="categoryImg"
                    src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <List maxPrice={maxPrice} sort={sort} categoryId={categoryId} />


            </div>


        </div>

    )
}