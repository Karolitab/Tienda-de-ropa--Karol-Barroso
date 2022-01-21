import React from 'react';
import Item from '../Item/Item';


export default function ItemList ({products}) {

  return (
    <div>
        {
            products.map(product =><Item item={product} />)
        
        }
    </div>
  )
};