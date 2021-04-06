import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const SignedOutLinks = ({ allQuantity }) => {
    return (
        <div>
           

            <ul id="nav-mobile" className="right hide-on-med-and-down">
                { //  <li><NavLink to='/signup'>Signup</NavLink></li>
                }
                <li><NavLink to='/signin'>Admin Login</NavLink></li>
                <li><NavLink to='/cart' ><i className="medium material-icons cart-icon" >add_shopping_cart</i><span className="count-cart-icon" >{allQuantity}</span></NavLink></li>
            </ul>

            <ul className="sidenav" id="mobile-links">
                {  //<li><NavLink to='/signup'>Signup</NavLink></li>
                }
                <li><NavLink to='/signin'>Admin Login</NavLink></li>
                <li><NavLink to='/cart' ><i className="medium material-icons cart-icon " >add_shopping_cart</i><span className="count-cart-icon" >{allQuantity}</span></NavLink></li>
            </ul>
        </div>
    )
}

export default SignedOutLinks