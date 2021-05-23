import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const SignedOutLinks = ({ allQuantity }) => {
    return (
        <div>
            <nav className=" grey darken-3">
            <div className="nav-wrapper">

                <div className="container">
                    <Link to='/' className="brand-logo left">Ecommerce</Link>
                    {/* <Link to="#" className="sidenav-trigger" data-target="mobile-links">
                        <i className="material-icons">menu</i>
                        </Link> */}
                    <ul className="right ">
                        { //hide-on-med-and-down  <li><NavLink to='/signup'>Signup</NavLink></li>
                        }
                        <li><NavLink to='/signin'>Admin Login</NavLink></li>
                        <li><NavLink to='/cart' ><i className="medium material-icons cart-icon" >add_shopping_cart</i><span className="count-cart-icon" >{allQuantity}</span></NavLink></li>
                    </ul>
                </div>
</div>
            </nav>



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