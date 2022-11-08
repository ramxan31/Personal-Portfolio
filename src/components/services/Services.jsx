import React from 'react'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Own A Website That Works</h3>
          </div>
          <p>If you have a dream, you also have a website. It has to look good and you want it to work each time. Well, that's why I am here. I will turn your ideas and dreams into reality. I will help you with designing, developing, and hosting a great site that will improve your business.</p>
        </article>


        <article className="service">
          <div className="service_head">
            <h3>Control The Features</h3>
          </div>
          <p>Do you feel restricted by all the drag-and-drop web builders out there? I offer a powerful custom code solution that fits your specific needs. Eventually, you will become the owner of a fast, handsome site. You will be able to change any existing functionality or can add new functionality in your website by hiring any web developer.</p>
        </article>


        <article className="service">
          <div className="service_head">
            <h3>Sell Your Stuff Online</h3>
          </div>
          <p>You have a vision. You want to make it an online business without any problems and restrictions. Perfect! I am here to help you set up an e-commerce store that looks amazing and makes you money as much as you want and bright your future as you wish.</p>
        </article>
      </div>
    </section>
  )
}

export default Services