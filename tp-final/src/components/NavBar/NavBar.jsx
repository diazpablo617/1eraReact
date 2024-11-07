import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./navBar.css"

const NavBar = () =>{
    return(
        <div className='flex'>
            <h3>NavBar</h3>
            <CartWidget/>
        </div>

    )
}

export default NavBar