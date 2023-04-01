import React from 'react'
import axios from 'axios'
import OrdersPageComponent from './components/OrdersPageComponent'

const getOrders = async(abcctrl) =>{
    const orders = await axios.get("/api/orders/admin",{
      signal : abcctrl.signal
    })
    // console.log(orders.data)
    return orders.data
}

function AdminOrdersPage() {
  return (
    <>
    <OrdersPageComponent getOrders = {getOrders}/>
    </>
  )
}

export default AdminOrdersPage