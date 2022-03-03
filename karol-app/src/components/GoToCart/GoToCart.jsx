import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import './GoToCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
export default function GoToCart ({cantidad}) {
  return (
        <div style={{display:'grid'}}>
                <p className='margin' style={{marginTop:'15px'}}>
                    { (cantidad === 1)   ? `Agregado al carrito.`
                                            : `Agregaste ${cantidad} items al carrito.`}
                    
                </p>
                <NavLink to={'/cart'}>
                    <Button className='go-to-cart'>
                        Ir al Carrito 
                    </Button>
                </NavLink>

                <NavLink className='keep-buying' to={'/'}>
                        Seguir Comprando
                </NavLink>
        </div>
    );
};