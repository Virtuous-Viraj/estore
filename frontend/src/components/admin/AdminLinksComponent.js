import React from 'react'
import { Nav } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {logout} from '../../redux/actions/userActions'
function AdminLinksComponent() {
  const dispatch = useDispatch()
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
      <Link to="" onClick={() => dispatch(logout())}>
        Logout
      </Link>
    </Nav>
    </>
  )
}

export default AdminLinksComponent