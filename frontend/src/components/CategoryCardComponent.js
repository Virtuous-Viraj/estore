import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function CategoryCardComponent({ category, idx }) {
    const images = [
        "/images/tablets-category.png",
        "/images/tablets-category.png",
        "/images/tablets-category.png",
        "/images/tablets-category.png",
        "/images/tablets-category.png",
        "/images/tablets-category.png",
        "/images/tablets-category.png",
        "/images/tablets-category.png"
    ]
    return (
        <Card style={{ width: '29rem' }}>
            <Card.Img variant="top" src={images[idx]} />
            <Card.Body>
                <Card.Title>{category}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Link to='/product-list'>
                    <Button variant="primary">Go to category</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default CategoryCardComponent;