import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function AdminLinksComponent() {
  return (
    <>
    <Nav className="flex-column">
      <Link to="/admin/orders">
        Orders
      </Link>
      <Link to="/admin/products">
        Products
      </Link>
      <Link to="/admin/users">
        Users
      </Link>
      <Link to="/admin/chats">
        Chats
      </Link>
      <Link to="/admin/analytics">
        Analytics
      </Link>
    </Nav>
    </>
  )
}

export default AdminLinksComponent