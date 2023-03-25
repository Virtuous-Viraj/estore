import React from 'react'
import { Row, Col, Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AdminLinksComponent from '../../components/admin/AdminLinksComponent'

const deleteHandler = () =>{
  if(window.confirm("Are you sure?")) alert ("Product deleted!")
}
function AdminProductsPage() {
  return (
    <>
      <Row className='m-5'>
        <Col md={2}>
          <AdminLinksComponent />
        </Col>
        <Col md={10}>
          <h1>Product List{" "}
            <Link to="/admin/create-new-product">
              <Button variant='primary'  >Create Product</Button>
            </Link>
          </h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Cateogry</th>
                <th>Edit / Delete</th>
              </tr>
            </thead>
            <tbody>
              {[{ name: "Panasonic", price: "$250", category: "TV" }, {
                name: "Lenovo", price: "$1000", category: "Laptops"
              }, {
                name: "GTA 10", price: "$345", category: "Games"
              }].map((item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>
                    <Link to="/admin/edit-product">
                      <Button className='btn-sm'><i className="bi bi-pencil-square"></i></Button>
                    </Link>
                    {" / "}
                    <Button className='btn-sm' variant='danger' onClick={deleteHandler}><i className="bi bi-x-circle"></i></Button>
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

export default AdminProductsPage