import './Carrossel.css'
import React, { useState } from "react";
import Fundo from './fundo.png'
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import {EffectCoverflow, Pagination, Navigation} from 'swiper'

/* TESTE 1 */
export default function Carrossel(){
  return(
    <div className='container-fluid3'>
      <Swiper
      effect={'coverflow'}
      grabCursor = {true}
      centeredSlides = {true}
      loop={true}
      slidesPerView={'2'}
      coverflowEffect={{
          rotate:0,
          stretch:0,
          depth:100,
          modifier:2.5,
        }}
        className='swiper-container'
      >
        <SwiperSlide>
          <img src={Fundo} alt='img1'></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Fundo} alt='img1'></img>
        </SwiperSlide>
        <div className='slider-controler'>

        </div>
      </Swiper>

    </div>
  )

}



