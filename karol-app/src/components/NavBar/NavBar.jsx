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
      <nav class="navbar navbar-dark navbar-expand-md navbar-custom">
    <div class="container"><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only"></span><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navcol-1">
            <ul class="nav navbar-nav flex-grow-1 justify-content-between">
                <li class="nav-item" role="presentation"><a class="nav-link" href="#"><img src={logo} alt="logo"  width="120px" height="65px" /></a></li>
                <li class="nav-item" role="presentation" className="logo"> WolfGaming </li>
                <li class="nav-item" role="presentation"><a class="nav-link" href="#"> <Nav.Link><NavLink to={'/'} className='normalizeBlackLink'>Home</NavLink></Nav.Link></a></li>
                <li class="nav-item" role="presentation"><a class="nav-link" href="#"> <NavDropDown title='Productos' categories={collection} /></a></li>
                <li class="nav-item" role="presentation"><a class="nav-link" href="#"> <Nav.Link><NavLink to={'/acerca'} className='normalizeBlackLink'>Acerca</NavLink></Nav.Link></a></li>
                <li class="nav-item" role="presentation"><a class="nav-link" href="#"><Nav.Link><NavLink to={'/contact'} className='normalizeBlackLink'>Soporte</NavLink></Nav.Link></a></li>
                <CartWidget />
            </ul>
        </div>
  </div>
</nav>
      }
    </div>
  );
}
