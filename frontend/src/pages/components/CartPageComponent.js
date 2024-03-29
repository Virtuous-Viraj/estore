import React from 'react'
import { Row, Col, Container, Alert , ListGroup, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartItemComponent from '../../components/CartItemComponent'
// import { addToCart } from '../redux/actions/cartActions'

function CartPageComponent({addToCart,removeFromCart ,cartItems, cartSubtotal, reduxDispatch}) {
    console.log(cartItems)
    const changeCount = (productID, count) =>{
        reduxDispatch(addToCart(productID, count));
    }

    const removeFromCartHandler = (productID, quantity, price) =>{
            if(window.confirm("Are you sure"))
            {
                // console.log(productID)
                // console.log(quantity)
                // console.log(price)
                reduxDispatch(removeFromCart(productID, quantity, price))
            }
    }
  return (
    <Container className='fluid'>
    <Row className="mt-4">
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length ===0 ? (

            <Alert variant='info'>Your Cart is Empty</Alert>
        ): 
        (
        <ListGroup variant='flush'>
          {cartItems.map((item, idx)=>(
            <CartItemComponent item={item} key={idx} changeCount={changeCount} removeFromCartHandler = {removeFromCartHandler}/>
          ))}
        </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <ListGroup>
          <ListGroup.Item>
          <h3>Subtotal ({cartItems.length}{cartItems.length===1? " Product" : " Products"} Items) </h3>
          </ListGroup.Item>
          <ListGroup.Item>
            Price: <span className='fw-bold'>${cartItems.length === 0 ? 0 : cartSubtotal}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button disabled={cartItems.length === 0} className='btn btn-secondary '><Link to="/user/cart-details" className=''>Proceed To Checkout</Link></Button>
            
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
    </Container>
  )
}

export default CartPageComponent