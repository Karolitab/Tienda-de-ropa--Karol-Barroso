import React from 'react';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget.js'

export default function NavBar(){
    return (
            <>
            <div className="navBar">
                <ul>
               <li className="Icon">YouManga</li> 
               <li><a href="Home">Home</a> </li>
                <li><a href="products">Products</a> </li>
                <li><a href="contact">Contact</a></li>
                <li><a href="about">About</a> </li>
                <li> <CartWidget/></li>
                </ul>
            </div>
          
            
            </>

    )


}