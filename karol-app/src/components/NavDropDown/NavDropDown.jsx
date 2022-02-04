import {NavDropdown} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './NavDropDown.css'

export default function NavDropDown ({title, categories}){
    return (
        <NavDropdown title={title} id="basic-nav-dropdown" className='normalizeBlackLink'>
            {
                categories.map( (category, index) =>
                    <> 
                        <NavDropdown.Item href={'/category'+category.link} key={index}>
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