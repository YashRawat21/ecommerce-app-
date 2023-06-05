
import Card from "../Card/Card"
import "./List.css"
import { useContext } from "react"
import {SupplyContext } from "../Context/Context"
export default function List() {
  const {search, products, filteredItems} = useContext(SupplyContext);
   const searchFilter = search.trim().toLowerCase();
    return(
        <div className="list">
         {

filteredItems.filter((item)=> {
             return  searchFilter.length == 0 ? item : item.title.toLowerCase().includes(searchFilter)
            }).map (item =>{ 
             return   <Card  item = {item}  key = {item.id} />
             
            } ) 
            
         
         }
        </div>
    )
        }
        