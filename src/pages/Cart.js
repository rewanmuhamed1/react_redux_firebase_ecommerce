import React, { Component } from 'react';
import CartList from '../components/cart/CartList';
import { connect } from 'react-redux';
import {formatMoney} from "../pipes/priceFormatter";

class Cart extends Component {
  render() {

   const {cartItems} = this.props ;
   const {totalPrice} = this.props ;
    return (
      <div className="products container">
            <CartList cartItems= {cartItems}/>
            <div className="total-cart">
            <p className="total-title">Total price:</p>
            <p className="total-price"> {formatMoney( parseFloat(totalPrice) )} </p>
            </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  //console.log("cart " ,state.cart.cartItems );
   return {
     cartItems : state.cart.cartItems  ,
     totalPrice : state.cart.cartItems.reduce( (total , item) => total + item.quantity *item.product.price ,0)
   }
 }

export default connect(mapStateToProps)(Cart) 