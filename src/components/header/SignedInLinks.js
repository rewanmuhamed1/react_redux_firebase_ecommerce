import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'


const SignedInLinks = (props) => {
    return (
        <div>
            <nav className="nav-wrapper grey darken-3">

               
                    <div className="container">
                        <Link to='/' className="brand-logo left">Ecommerce</Link>
                       {/*  <Link to="#" data-target="mobile-links" className="sidenav-trigger"><i className="material-icons">menu</i></Link> */}
                        <ul  className="right ">
                            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                            <li><a href="#" onClick={props.signOut}>Log Out</a></li>
                            <li><NavLink to='/cart' ><i className="medium material-icons cart-icon " > add_shopping_cart </i><span className="count-cart-icon"> {props.allQuantity} </span></NavLink></li>
                        </ul>
                    </div>
            
            </nav>




            <ul className="sidenav" id="mobile-links">
                <li><NavLink to='/dashboard'> Dashboard </NavLink></li>
                <li><a href="#" onClick={props.signOut}>Log Out</a></li>
                <li><NavLink to='/cart' ><i className="medium material-icons cart-icon" > add_shopping_cart </i><span className="count-cart-icon" > {props.allQuantity} </span></NavLink></li>
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignedInLinks)
