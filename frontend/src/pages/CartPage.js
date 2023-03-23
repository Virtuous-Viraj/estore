import React from 'react'
import { Row, Col, Container, Alert , ListGroup, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartItemComponent from '../components/CartItemComponent'
function CartPage() {
  return (
    <Container className='fluid'>
    <Row className="mt-4">
      <Col md={8}>
        <h1>Shopping Cart</h1>
        <ListGroup variant='flush'>
          {Array.from({length : 3}).map((item, idx)=>(
            <CartItemComponent key={idx}/>
          ))}
        </ListGroup>
        <Alert variant='info'>Your Cart is Empty</Alert>
      </Col>
      <Col md={4}>
        <ListGroup>
          <ListGroup.Item>
          <h3>Subtotal (2 Items) </h3>
          </ListGroup.Item>
          <ListGroup.Item>
            Price: <span className='fw-bold'>$892</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to="/user/cart-details"><Button>Proceed To Checkout</Button>
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
    </Container>
  )
}

export default CartPage