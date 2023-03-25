import { Card, Button } from "react-bootstrap";
import { Rating } from 'react-simple-star-rating'
import { Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
const ProductForListComponent = ({images, idx}) => {
  return (
    <Card style={{ marginTop: "30px", marginBottom: "50px" }}>
      <Row>
        <Col lg={5}>
          <Card.Img variant="top" src={"/images/"+images[idx]+"-category.png"} crossOrigin="anonymous"/>
        </Col>
        <Col lg={7}>
          <Card.Body>
            <Card.Title>Product Name Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, suscipit!</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, earum 
              doloribus quisquam aliquam, accusamus pariatur doloremque consectetur eligendi perferendis 
              delectus molestiae expedita esse aperiam dolorem.
            </Card.Text>
            <Card.Text>
              <Rating readonly size={20} initialValue={5}/> (1)
            </Card.Text>
            <Card.Text className="h4">
              $124{" "} 
              <Button variant="danger">
                  <Link to="/product-details" style={{ color: 'white', textDecoration: 'none' }}>
                    See Product
                  </Link>
                </Button>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductForListComponent;
