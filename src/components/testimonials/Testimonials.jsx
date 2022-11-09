import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

  const addReviewHandler = async () => {

  }
  return (
    <section id='testimonials'>
      <h5>Review From CLient</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        <SwiperSlide className='testimonial'>
          <div className="client_avatar">
            <img src = {AVTR1} alt="client" />
          </div>
          <h5 className='client_name'>Enrest Achiever</h5>
            <small className='client_review'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae eius asperiores unde qui ipsum quidem, sapiente odit distinctio voluptates! Recusandae est repudiandae fugiat magni! Exercitationem ex suscipit reiciendis amet at!
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client_avatar">
            <img src = {AVTR1} alt="client" />
          </div>
          <h5 className='client_name'>Enrest Achiever</h5>
            <small className='client_review'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae eius asperiores unde qui ipsum quidem, sapiente odit distinctio voluptates! Recusandae est repudiandae fugiat magni! Exercitationem ex suscipit reiciendis amet at!
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client_avatar">
            <img src = {AVTR1} alt="client" />
          </div>
          <h5 className='client_name'>Enrest Achiever</h5>
            <small className='client_review'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae eius asperiores unde qui ipsum quidem, sapiente odit distinctio voluptates! Recusandae est repudiandae fugiat magni! Exercitationem ex suscipit reiciendis amet at!
            </small>
        </SwiperSlide>
      </Swiper>

      <div className="client_add-review">
        <h5 style={{textAlign:'center'}}>Give Your Feedback</h5>

        <form onSubmit={addReviewHandler} method="post">
          <label htmlFor="name">Enter Your Name</label>
          <div>
            <input type="text" name="name" id="name" required />
          </div>
          <label htmlFor="image">Insert Your Image </label>
          <div>
            <input type="file" name="image" />
          </div>
          <label htmlFor="">Type Your Message Here</label>
          <div>
            <textarea name="message" id="" rows="10"></textarea>
          </div>

          <input className='btn btn-primary' type="button" value="Submit" />
        </form>
      </div>
    </section>
  )
}

export default Testimonials