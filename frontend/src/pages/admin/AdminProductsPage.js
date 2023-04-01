import ProductsPageComponent from '../admin/components/ProductsPageComponent'
import axios from 'axios'


const fetchProducts = async(abtctrl) =>{
  const products = await axios.get("/api/products/admin", {
    signal : abtctrl.signal,
  })
  // console.log(products.data)
  return products.data
}
// fetchProducts()

const deleteProduct = async (productId) =>{
  const {data} = await axios.delete(`/api/products/admin/${productId}`)
  return data
}

function AdminProductsPage() {
  return (
    <ProductsPageComponent fetchProducts = {fetchProducts} deleteProduct = {deleteProduct}/>
  )
}

export default AdminProductsPage