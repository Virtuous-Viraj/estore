import React from 'react'
import { Row, Col, Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AdminLinksComponent from '../../../components/admin/AdminLinksComponent'

import { useState, useEffect } from 'react'

function ProductsPageComponent({fetchProducts, deleteProduct}) {
    const [products, setProducts] = useState([])
    const [productDeleted, setProductDeleted] = useState(false)
    const deleteHandler = async(productId) =>{

      if(window.confirm("Are you sure?")){
        const data = await deleteProduct(productId)
        if(data.message === 'Product Removed')
        {
            setProductDeleted(!productDeleted)
        }
      }
    }
    useEffect(() => {
    const abtctrl = new AbortController();
    fetchProducts(abtctrl)
      .then((res) => setProducts(res))
      .catch((er) =>
        setProducts([{
            name : er.response.data.message ? er.response.data.message : er.response.data
        }])
      );
        return () => abtctrl.abort()
    }, [productDeleted])
    
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
              {Array.isArray(products) && products.map((item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>
                    <Link to={`/admin/edit-product/${item._id}`}>
                      <Button className='btn-sm'><i className="bi bi-pencil-square"></i></Button>
                    </Link>
                    {" / "}
                    <Button className='btn-sm' variant='danger' onClick={()=>deleteHandler(item._id)}><i className="bi bi-x-circle"></i></Button>
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

export default ProductsPageComponent