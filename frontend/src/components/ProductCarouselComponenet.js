import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

function ProductCarouselComponenet() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
        crossOrigin='anonymous'
          className="d-block w-100"
          style={{height:"300px", objectFit:"cover"}}
          src="/images/carousel/carousel-1.png"
          alt="First slide"
        />
        <Carousel.Caption>
            <Link to="/product-details" style={{textDecoration:'None', color:'inherit'}}>
          <h3>Bestseller in Laptops Category</h3>
          <p>Dell Inspiron 15 3000 Laptop, 15.6 inch HD </p>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-2.png"
          style={{height:"300px", objectFit:"cover"}}
          alt="Second slide"
        />

        <Carousel.Caption>
        <Link to="/product-details" style={{textDecoration:'None', color:'inherit'}}>
          <h3>Bestseller in Books Category</h3>
          <p>world of eric carle, hear bear roar</p>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel/carousel-3.png"
          style={{height:"300px", objectFit:"cover"}}
          alt="Third slide"
        />

        <Carousel.Caption>
        <Link to="/product-details" style={{textDecoration:'None', color:'inherit'}}>
          <h3>Bestseller in Cameras Category</h3>
          <p>BestSeller Cameras Category Description</p>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default ProductCarouselComponenet