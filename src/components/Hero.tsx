"use client";

import React from 'react'
import Slider from "react-slick"
import Slide from "./Slide"

const Hero = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        
    };

    const slideData = [
        {   id: 0,
            img: '/user-1.jpg',
            title: 'Trending item',
            mainTitle: "WOMEN'S LATEST FASHION ON SALE",
            price: "Ksh2600",
            
            
        },
        {   id: 1,
            img: '/banner-2.jpg',
            title: 'Trending SHIRTS',
            mainTitle: "CASUAL SHIRTS",
            price: "Ksh2100",
            
            
        },
        {   id: 2,
            img: '/user-3.jpg',
            title: 'Sale Offer',
            mainTitle: "SUMMER SALE",
            price: "Ksh3500",
            
            
        },


 ]


return <div>
    <div className='container pt-6 lg:pt-0'>
        < Slider {...settings}>
        {slideData.map((item) => (
          <Slide 
            key={item.id}
            img={item.img}
            title={item.title}
            mainTitle={item.mainTitle}
            price={item.price}
           />
        ))}
            

        </Slider>

    </div>
  </div>
  
}

export default Hero
