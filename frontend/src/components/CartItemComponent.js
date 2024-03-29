import React from 'react'
import {ListGroup, Row, Col, Image, Form} from 'react-bootstrap'
import RemoveFromCartComponent from "./RemoveFromCartComponent"
function CartItemComponent({item, removeFromCartHandler = false, orderCreated = false, changeCount = false}) {

  return (
    <>
    <ListGroup.Item>
        <Row>
            <Col md={2}>
                <Image crossOrigin='anonymous' src={item.image ? (item.image.path ?? null) : null} fluid/>
            </Col>
            <Col md={2}>
                {item.name}
            </Col>
            <Col md={2}>
                <b>${item.price}</b>
            </Col>
            <Col md={3}>
                <Form.Select onChange={changeCount ? (e)=> changeCount(item.productID, e.target.value) : undefined} disabled={orderCreated}>
                        {[...Array(item.count).keys()].map(x =>(
                            <option key={x+1}>{x+1}</option>
                        ))}
                        </Form.Select>
            </Col>
            <Col md={3}>
                 <RemoveFromCartComponent
                 orderCreated = {orderCreated}
                 productID = {item.productID}
                 quantity = {item.quantity}
                 price = {item.price}
                 removeFromCartHandler = {removeFromCartHandler ? removeFromCartHandler : undefined}
                 />
            </Col>
        </Row>
    </ListGroup.Item>
    </>
  )
}

export default CartItemComponent