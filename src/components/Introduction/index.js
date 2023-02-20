import React, { Component } from 'react'
import AwesomeSwiper from 'react-awesome-swiper';
const config = {
    loop : true,
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 18,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }
  };

class Introduction extends Component {
    render() {
        return (
            <div className="p-3 md:p-20 " >
               <div className="w-container grid sm:grid-cols-1 md:grid-cols-2">
                    <div>
                        <h1 id="aboutSection" className="section-heading text-pink font-bold italic">WELCOME </h1>
                        <p className="text-white font-default font-bold italic md:text-2xl sm:text-1xl">
                            The CryptoETS are 1000 NFT automatically generated randomly all of them are unique and some are rarer than others.
                        </p>               
                        <p className="text-white font-default font-bold italic md:text-2xl sm:text-1xl">
                            CryptoETS reappear again in our lives to bring us out of the abyss of monotony of the world we live in.
                        </p>     
                        <p className="text-white font-default font-bold italic md:text-2xl sm:text-1xl">
                            By adopting a CryptoETS you have 100% of the creative and commerical rights. <br/>
                            Join our adventure!     
                        </p>     
                    </div>
                    <div>
                        <img src={'/images/enigma.jpg'}></img>
                    </div>
                </div>               
            </div>
        )
    }
}

export default Introduction