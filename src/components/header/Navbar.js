import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'


const Navbar = (props) => {
    const { auth } = props;
    const links = auth.uid ? <SignedInLinks allQuantity={props.allQuantity} /> : <SignedOutLinks allQuantity={props.allQuantity} />;

    return (

        <div>
            
        {links}


        </div>

    )
}

const mapStateToProps = (state) => {
    //console.log("state");
    return {
        auth: state.firebase.auth,
        allQuantity: state.cart.cartItems.reduce((total, item) => total + item.quantity, 0)
    }
}

export default connect(mapStateToProps)(Navbar)
