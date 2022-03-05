import React, {useContext} from "react"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'
import { context } from "../../context/CartProvider"

export default function CartWidget(){

    const {total} = useContext(context)

    return (
        <div className='cart'>
            <NavLink to={'/cart'} > 
            <FontAwesomeIcon icon={faCartArrowDown} className="CartIcon"/>
            <span className='number'>{total}</span>
            </NavLink>
        </div>
    )
}