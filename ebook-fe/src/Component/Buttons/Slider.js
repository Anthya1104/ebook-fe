import React from 'react'
import { Carousel } from 'react-bootstrap'
import bookfair1 from '../../img/bookfair1.png'
import bookfair2 from '../../img/bookfair2.png'
import bookfair3 from '../../img/bookfair3.png'
import bookfair4 from '../../img/bookfair4.png'

const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={bookfair1} alt="First slide" />
          <Carousel.Caption>
            {/* <h3>This is the first slide!</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={bookfair2} alt="Second slide" />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bookfair3} alt="Third slide" />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bookfair4} alt="Third slide" />
          <Carousel.Caption>
            {/* <h3>Fourth slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Slider
