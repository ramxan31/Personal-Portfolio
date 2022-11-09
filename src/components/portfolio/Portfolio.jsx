import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'

const Portfolio = () => {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'This is a School Management System website',
      github: 'https://github.com/Ramzanchandia',
      demo: 'https://school.rawebsolution.com/'
    },

    {
      id: 2,
      image: IMG2,
      title: 'Best MCQs Learning Solution',
      github: 'https://github.com/Ramzanchandia',
      demo: 'https://r2school.rawebsolution.com/'
    },

  ]

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article className="portfolio_item" key={id}>
                <div className="portfolio_item-image">
                  <img src={image} alt="portfolio" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio