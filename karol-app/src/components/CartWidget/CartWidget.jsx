import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'

export default function CartWidget(){
    return (
        <div className='cart'>
            <NavLink to={'/cart'} > 
            <FontAwesomeIcon icon={faCartArrowDown} className="CartIcon"/>
                <span className='number'>0</span>
            </NavLink>
        </div>
    )
}