import React from 'react'
import CartItem from './CartItem'

const CartList = ( { cartItems } ) => {
  return (
    <div className="project-list section">  
     <div className="row">

     {
          cartItems && cartItems.map( ( cartItem ) => {
           // console.log("cartlist " ,cartItem);
            return (
                
                <CartItem cartItem={cartItem} key={cartItem.product.id} />

            )
          }
          )

        }
   
      
      </div>
    </div>
  )
}

export default CartList