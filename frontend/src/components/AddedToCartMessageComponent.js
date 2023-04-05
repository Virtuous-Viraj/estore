import { Alert, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";

function AddedToCartMessageComponent({showCartMessage, setShowCartMessage}) {
  const navigate =  useNavigate()
  const goBack = ()=>{
    navigate(-1)
  }
  return (
    <>
    <Alert show={showCartMessage} variant="success" onClose={() => setShowCartMessage(false)} dismissible>
    <Alert.Heading>Product added to your Cart</Alert.Heading>
    <p>
      <Link to="/product-list"><Button variant="suceess" onClick={goBack}>Go Back</Button></Link>
        {" "}
        <Link to="/cart"><Button variant="danger">Go to Cart</Button></Link>
        
    </p>
    </Alert>
    </>
  )
}

export default AddedToCartMessageComponent