import React from 'react'
import ProductCarouselComponenet from '../components/user/ProductCarouselComponenet'
import CategoryCardComponent from '../components/CategoryCardComponent'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
function HomePage() {
  const categories = [
    'Tablets', 'Monitors', 'Games', 'Printers', 'Software', 'Cameras', 'Books', 'Vidoes'
  ]
  return <>
    <ProductCarouselComponenet/>
    <Container>
    <Row className="g-4 mt-5 justify-content-center">

    {
      categories.map((category, idx) => (
      <CategoryCardComponent key={idx} category={category} idx={idx}/>
      ))
    }
    {/* <CategoryCardComponent/> */}
    </Row>
    </Container>
    </>
}

export default HomePage