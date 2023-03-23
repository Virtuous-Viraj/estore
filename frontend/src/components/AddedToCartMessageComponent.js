import { Alert, Button } from "react-bootstrap"
import { useState } from "react"
import { Link } from "react-router-dom";
function AddedToCartMessageComponent() {
    const [show, setShow] = useState(true);
  return (
    <>
    <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
    <Alert.Heading>Product added to your Cart</Alert.Heading>
    <p>
        <Button variant="suceess">Go Back</Button>{" "}
        <Link to="/cart"></Link>
        <Button variant="danger">Go to Cart</Button>
    </p>
    </Alert>
    </>
  )
}

export default AddedToCartMessageComponent