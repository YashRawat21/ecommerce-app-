
import Slider from "../../components/Slider/Slider"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import "./Home.css"
import Categories from "../../components/Categories/Categories"
import Contact from "../../components/Contact/Contact"
export default function Home() {
    
    return(
         
             <div className="home">
            <Slider />
            <FeaturedProducts type = "featured" />
            <Categories />
            <FeaturedProducts type = "trending" />
            <Contact />
        </div>
    
    
    )
}