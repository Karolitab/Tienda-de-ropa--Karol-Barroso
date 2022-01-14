import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function CartWidget(){
    return (
        <div>

<FontAwesomeIcon icon={faCartArrowDown} className="CartIcon"/>
        </div>
    )
}