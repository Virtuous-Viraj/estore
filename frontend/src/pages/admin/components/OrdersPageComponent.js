import React from 'react'
import { Row, Col, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AdminLinksComponent from '../../../components/admin/AdminLinksComponent'
import { useState, useEffect } from 'react'
import { logout } from "../../../redux/actions/userActions";
import { useDispatch } from "react-redux";
function OrdersPageComponent({getOrders}) {

  const [orders, setOrders] = useState([])
  useEffect(() => {
      const abtctrl = new AbortController();
      getOrders(abtctrl).then((res) => setOrders(res)).catch((error) =>
      dispatchEvent(logout()))
        // console.log(error.response.data.message ? error.response.data.message : error.response.data))
        return () => abtctrl.abort()
  }, [])
  
  return (
    <>
      <Row className='m-5'>
        <Col md={2}>
          <AdminLinksComponent/>
        </Col>
          <Col md={10}>
            <h1>Orders</h1>
            <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Date</th>
              <th>Total</th>
              <th>Delivered</th>
              <th>Payment Method</th>
              <th>Order Details</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(orders) && orders.map((item, idx)=>(
                <tr key={idx}>
                <td>{idx+1}</td>
                <td>
                  {item.user !== null ? (<>{item.user.name} {item.user.lastname}</>) : null}
                  </td>
                <td>{item.createdAt.substring(0,10)}</td>
                <td>{item.orderTotal.cartSubtotal}</td>
                <td>
                  {item.isDelivered ? <i className="bi bi-check-lg text-success"></i> : <i className='bi bi-x-lg text-danger'></i> }
                </td>
                <td>{item.paymentMethod}</td>
                <td>
                  <Link to={`/admin/order-details/${item._id}`}>Go to order</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
          </Col>
      </Row>
    </>
  )
}

export default OrdersPageComponent