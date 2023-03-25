import React from 'react'
import { Row, Col } from 'react-bootstrap'
import AdminChatRoomComponent from '../../components/admin/AdminChatRoomComponent'
import AdminLinksComponent from '../../components/admin/AdminLinksComponent'
function AdminChartsPage() {
  return (
    <Row className='m-5'>
      <Col md={2}>
          <AdminLinksComponent/>
      </Col>
      <Col md={8}>
          <AdminChatRoomComponent/>
      </Col>
    </Row>
  )
}

export default AdminChartsPage