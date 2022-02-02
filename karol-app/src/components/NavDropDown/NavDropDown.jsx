import {NavDropdown} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './NavDropDown.css'

export default function NavDropDown ({title, categories}){
    return (
        <NavDropdown title={title} id="basic-nav-dropdown" className='normalizeBlackLink'>
            {
                categories.map( category =>
                    <> 
                        <NavDropdown.Item href={'/category'+category.link}>
                            <NavLink to={'/category'+category.link} className='categoria'>
                                {category.name}
                            </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        
                    </>
                )
            }
        </NavDropdown>
    )
}