import React, { useContext, useState } from 'react';
import { Col, Row, Image, Container } from 'react-bootstrap';
import ItemCount from './../ItemCount/ItemCount'
import GoToCart from '../GoToCart/GoToCart';
import iconDefault from '../../assets/defaultIMG.png'

import { context } from '../../context/CartProvider';

export default function ItemDetail({ item }) {

    const {addToCart} = useContext(context)

    const { title, price, description, image, initial, stock } = item

    const [added, setAdded] = useState(null)

    function onAdd(counter){
        console.log(`Agregaste ${item.title}, cantidad: ${counter}.`);
        addToCart(item, counter)
        setAdded(counter)
    }

    return (
      
<Container fluid  className="containere">
               <section id="scroll">
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6 order-lg-2">
                    <h2>{title}</h2>
                    <h3>${price}</h3>
                    {
                        (description)?
                        <p>{description}</p>
                        :
                        <></>
                    }
                    
                    {
                        (!added)?
                        <ItemCount initial={initial} stock={stock} onAdd={onAdd}/>
                        :
                        <GoToCart cantidad={added}/>
                    }
                    
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5">
                            <h2 class="display-4"></h2>
                            <Image src={image || iconDefault} fluid rounded></Image>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Container>
           
    );
};