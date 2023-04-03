import axios from 'axios';
import OrderDetailsPageComponent from "./components/OrderDetailsPageComponent";

const getOrder = async(id) =>{
    const {data} = await axios.get("/api/orders/user/" +id )
    // console.log(data)
    return data
}

const markAsDelivered = async (id) =>{
  const {data} = await axios.put("/api/orders/delivered/"+id)
  console.log(data)
  if(data) {
    return data
  }
}

// getOrder()
const AdminOrderDetailsPage = () => {
  return (
      <OrderDetailsPageComponent getOrder = {getOrder} markAsDelivered= {markAsDelivered}/>
  );
};



export default AdminOrderDetailsPage;

