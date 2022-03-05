import React from "react";
import { Nav  } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import NavDropDown from "../NavDropDown/NavDropDown"
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/gaminglogo.png";
import useFirestoreCollection from "../../hooks/useFirestoreCollection";
import Loading from "../Loading/Loading";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./NavBar.css";

export default function NavBar() {
  const { collection, loading, error } = useFirestoreCollection('items');

  return (
    <div>
      {
        error ? 
        <ErrorMessage error={error}/>
        :
        loading ? 
        <Loading />
        :
        <nav>
        <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div class="container px-5">
        <ol class="nav-item" role="presentation"><a class="nav-link"><Nav.Link><NavLink to={'/'} className='normalizeBlackLink'><img src={logo} alt="logo"  width="80px" height="50px" /></NavLink></Nav.Link></a></ol>
            <a class="navbar-brand" href="#page-top"><Nav.Link><NavLink to={'/'} className='normalizeBlackLink'>WolfGaming</NavLink></Nav.Link></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                <li class="nav-item" role="presentation"><a class="nav-link"> <Nav.Link><NavLink to={'/'} className='normalizeBlackLink'>Home</NavLink></Nav.Link></a></li>
                <li class="nav-item" role="presentation"><a class="nav-link"> <NavDropDown title='Productos' categories={collection} /></a></li>
                <li class="nav-item" role="presentation"><a class="nav-link"> <Nav.Link><NavLink to={'/about'} className='normalizeBlackLink'>About</NavLink></Nav.Link></a></li>
                <li class="nav-item" role="presentation"><a class="nav-link"><Nav.Link><NavLink to={'/Soporte'} className='normalizeBlackLink'>Soporte</NavLink></Nav.Link></a></li>
                <CartWidget />
                    
                </ul>
            </div>
        </div>
    </nav>

 </nav>
      }
    </div>
  );
}
 