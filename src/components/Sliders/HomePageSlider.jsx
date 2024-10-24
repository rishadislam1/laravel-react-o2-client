import { motion } from "framer-motion";
import img1 from '../../assets/img/pic/1.jpeg';
import img2 from '../../assets/img/pic/1.jpg';
import img3 from '../../assets/img/pic/2.jpeg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

const HomePageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // State to track the current slide

  return (
    <div className="w-100">
      {/* Custom Prev/Next Buttons */}
      <div>
        <div className="swiper-button-prev-custom"><ArrowLeft /></div>
        <div className="swiper-button-next-custom"><ArrowRight /></div>
      </div>

      <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper"
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)} // Update current slide index on change
      >
        <SwiperSlide data-hash="slide1" key="slide1">
          <img src={img1} alt="Slide 1" />
          <div className="overlay">
            <motion.div
              className="overlay-content"
              initial={{ x: "-100vw", opacity: 0 }} 
              animate={currentSlide === 0 ? { x: 0, opacity: 1 } : { x: "-k100vw", opacity: 0 }}        
              exit={{ x: "-100vw", opacity: 0 }}    
              transition={{ duration: 0.5, ease: "easeInOut" }} 
            >
              <h1 className="font-bold md:text-6xl ">Plant Trees and <br /> help the earth</h1>
              <p className="text-xl mt-10">Consider the birds and the bees</p>
            </motion.div>
            <motion.div className=""
              initial={{ x: "-100vw", opacity: 0 }} 
              animate={currentSlide === 0 ? { x: 400, y:160, opacity: 1 } : { x: "100vw", opacity: 0 }}        
              exit={{ x: "-100vw", opacity: 0 }}    
              transition={{ duration: 0.5, ease: "easeInOut" }} >
              <Link to='/shop' className="text-2xl font-bold text-white border p-3 rounded-xl hover:bg-white hover:text-black cursor-pointer transition-all duration-1000">Shop Now</Link>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide data-hash="slide2" key="slide2">
          <img src={img2} alt="Slide 2" />
          <div className="overlay">
            <motion.div
              className="overlay-content"
              initial={{ x: "-100vw", opacity: 0 }} 
              animate={currentSlide === 1 ? { x: 0, opacity: 1 } : { x: "-100vw", opacity: 0 }}        
              exit={{ x: "-100vw", opacity: 0 }}    
              transition={{ duration: 0.5, ease: "easeInOut" }} 
            >
              Slide 2 Content
            </motion.div>
            
          </div>
        </SwiperSlide>
        <SwiperSlide data-hash="slide3" key="slide3">
          <img src={img3} alt="Slide 3" />
          <div className="overlay">
            <motion.div
              className="overlay-content"
              initial={{ x: "-100vw", opacity: 0 }} 
              animate={currentSlide === 2 ? { x: 0, opacity: 1 } : { x: "-100vw", opacity: 0 }}        
              exit={{ x: "-100vw", opacity: 0 }}    
              transition={{ duration: 0.5, ease: "easeInOut" }} 
            >
              Slide 3 Content
            </motion.div>
          </div>
        </SwiperSlide>
        {/* Additional slides */}
      </Swiper>
    </div>
  );
};

export default HomePageSlider;
