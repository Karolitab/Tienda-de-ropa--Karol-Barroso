import React, {useContext} from 'react';
import {Button, ButtonGroup} from 'react-bootstrap'
import { context } from '../../context/CartProvider';
import iconDefault from '../../assets/defaultIMG.png'
import './CartItem.css'

export default function CartItem({product, quantity}) {
  
    const {deleteFromCart, oneItemMore, oneItemLess} = useContext(context)

  return (
    <div className='item'>
        <img src={product.image || iconDefault} alt="producto" width="18%" height="10%"/>

        <div style={{marginLeft:'3px'}}>
          <h4>{product.title}</h4>
          <p>${product.price} - Cantidad: {quantity}</p>
          <div >
            <ButtonGroup>
              <Button type="button" class="btn" className="ordena" onClick={()=>oneItemLess(product.id)}> - </Button>
              <Button type="button" class="btn" className="ordena" onClick={()=>oneItemMore(product.id)}> + </Button>
            </ButtonGroup>
            <Button type="button" class="btn" className="ordena elimina" onClick={()=>deleteFromCart(product.id)} style={{marginTop:'15px',display:'block'}}>
              Eliminar
            </Button>
          </div>
        </div>
    </div>
  );
};
