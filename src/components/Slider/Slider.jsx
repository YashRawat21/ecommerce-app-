import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import "./Slider.css"
import { useState } from 'react';
export default function Slider() {
   const [currentSlide , setCurrentSlide] = useState(0) 
    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
        
      ];
      const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 :(prev) => prev - 1 )
      }
      const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
    
      }
  
    return(
        <div className="slider">
          <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img className = "sliderImg"src = {data[0]} alt ="" />
            <img  className= "sliderImg"src= {data[1]} alt ="" />
            <img className = "sliderImg"src  = {data[2]} alt ="" />
          </div>
         <div className="sliderIcons">
           <div className="sliderIcon" onClick={prevSlide}>
            <KeyboardDoubleArrowLeftOutlinedIcon />
           </div>
           <div className="sliderIcon" onClick = {nextSlide}>
            <KeyboardDoubleArrowRightOutlinedIcon />
           </div>
         </div>
        </div>
    )
}