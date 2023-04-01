import React from 'react'
import { Row, Col, Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AdminLinksComponent from '../../../components/admin/AdminLinksComponent'


import { useState, useEffect } from 'react'


function UsersPageComponent({ fetchUsers, deleteUser}) {
  const [users, setUsers] = useState([])
  const [userDeleted, setUserDeleted] = useState(false)
  
  const deleteHandler = async (userId) => {
    // setCounter(counter + 1)
    if (window.confirm("Are you sure?")){
      const data = await deleteUser(userId)
      if(data === 'user removed')
      {
        setUserDeleted(!userDeleted)
      }
    }

  }

  useEffect(() => {
    const abcctrl = new AbortController()
    fetchUsers(abcctrl).then(res => setUsers(res)).catch(error =>
      console.log(error.response.data.message ? error.response.data.message : error.response.data))
      return () => abcctrl.abort()
      // return ()=> console.log("cleanup the effect")
  }, [userDeleted])

  return (
    <>
      <Row className='m-5'>
        <Col md={2}>
          <AdminLinksComponent />
        </Col>
        <Col md={10}>
          <h1>Users List</h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>isAdmin ?</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>
                    { user.isAdmin ? <i className='bi bi-check-lg text-success'></i> : <i className='bi bi-x-lg text-danger'></i>}
                  </td>
                  <td>
                    <Link to={`/admin/edit-user/${user._id}`}><Button className='btn btn-sm'><i className='bi bi-pencil-square'></i></Button></Link>
                    {" / "}
                    <Link to=""><Button onClick={()=> deleteHandler(user._id)} className="btn btn-danger btn-sm"><i className='bi bi-x-circle'></i></Button></Link>
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

export default UsersPageComponent