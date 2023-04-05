
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import ProductDetailsPageComponent from './components/ProductDetailsPageComponent';
function ProductDetails() {
  // const products = useSelector((state) => state.cart.value);
  const dispatch = useDispatch()

  // const addToCartHandler = () => {
  //     dispatch(addToCart());
  // }
  return (
    <ProductDetailsPageComponent addToCartReduxAction={addToCart} reduxDispatch = {dispatch}/>
  )
}

export default ProductDetails