import { Card, Button } from "react-bootstrap";
import { Rating } from 'react-simple-star-rating'
import { Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
const ProductForListComponent = ({ productId, name, description, price, images, rating, reviewsNumber }) => {
  return (
    <Card style={{ marginTop: "30px", marginBottom: "50px" }}>
      <Row>
        <Col lg={5}>
          <Card.Img variant="top" src={images[0] ? images[0].path : ''} crossOrigin="anonymous"/>
        </Col>
        <Col lg={7}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
            <Card.Text>
            <Rating readonly size={20} initialValue={rating} /> ({reviewsNumber})
            </Card.Text>
            <Card.Text className="h4">
            ${price}{" "}
              <Button variant="danger">
                  <Link to={`/product-details/${productId}`} style={{ color: 'white', textDecoration: 'none' }}>
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
