import React, {useContext} from 'react';
import { context } from '../../context/CartProvider';
import CartItem from '../CartItem/CartItem';
import {Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import './Cart.css'

export default function Cart() {
  
  const {cart, cleanCart, totalPrice} = useContext(context)

  return (
    <div className='containerCart'>
      {
        (cart.length === 0) ?
          <div class='dentro'>
            <h2>Añade algo a tu carrito!</h2>
            <br/>
            <NavLink to={'/'} style={{color:'white'}}>Regresa a comprar</NavLink>
          </div>
          :
          <>
            <h2>Tu Carrito</h2> 
            {
              cart.map(item => <CartItem product={item.product} quantity={item.quantity} key={item.product.id}/>)
            }
             <NavLink to={'/checkout'}>
              <Button type="button" class="btn" className="ordena">
                Continuar
              </Button>
            </NavLink>

            <Button variant='light' onClick={()=>cleanCart()} className='boton'>
              Vaciar Carrito
            </Button>

            <h3>Total: ${totalPrice()}</h3>
          </>
      }
      

    </div>
    );
};

