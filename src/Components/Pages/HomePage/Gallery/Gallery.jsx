
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";




// // import required modules
// import { Autoplay, EffectCoverflow, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import  { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';




import './Gallery.css'
import { useEffect, useState } from "react";
const Gallery = () => {
 
const [toys,setToys] =useState([])
useEffect(()=>{
  fetch('https://car-toy-shop-server.vercel.app/alltoys')
  .then(res=>res.json())
  .then(data=>setToys(data))
},[])



    return (
<div data-aos="fade-down-right">
      <Swiper
      slidesPerView={1}
      spaceBetween={10}
      autoplay={{
              delay: 700,
              disableOnInteraction: false,
            }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay,Pagination]}
      className="mySwiper"
    >

      {toys &&
        toys.map((toy)=>{
  
        return <div key={toy._id}><SwiperSlide key={toy._id} >

<div className="card w-96 m-2 shadow-xl">

  <figure><img src={toy.photo} alt="toys" /></figure>
</div>

           
          </SwiperSlide></div>})
  
        }
      

    </Swiper>
  </div>

    );
};

export default Gallery;