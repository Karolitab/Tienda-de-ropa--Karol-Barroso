import React from 'react';
import { Button, Card } from 'react-bootstrap'



export default function Item({ item }) {

    const { title, price, description, image } = item

    return (
        <Card >
            <Card.Img variant="top" src={image}/>
            <Card.Body>
                <Card.Title >{title}</Card.Title>
                <Card.Text >
                    {price}
                    {description}
                </Card.Text>
                <Button variant="danger">Ordena</Button>
            </Card.Body>
        </Card>
    
    );
};