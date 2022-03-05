import React from 'react';
import { Button, Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import iconDefault from '../../assets/defaultIMG.png'
import './Item.css'

export default function Item({ item }) {

    const { id, title, price, description, image, stock} = item
    const link = (stock === 0) ? '/' : `/item/${id}`

    return (
        <NavLink to={link} id ="abajo"className='noDeco'> 
            <Card className='producto'>
            <Card.Img variant="top" src={image || iconDefault}/>
            <Card.Body>
                <Card.Title className='padding'>{title}</Card.Title>
                <Card.Text className='padding'> 
                    <div className='description'>
                        {description}
                    </div>
                    ${price}
                </Card.Text>
                <Button type="button" class="btn" className="ordena">
                    <NavLink to={`/item/${id}`} className='normalizeWhiteLink'> 
                        Ordena
                    </NavLink>
                </Button>
            </Card.Body>
        </Card>
        </NavLink>
    );
};

