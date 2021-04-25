import React, { useState } from 'react'
import { shortenTitle } from "../../pipes/shortenTitle";
import { incrementCartQuantity, decrementCartQuantity , deleteCartItem } from '../../store/actions/cartActions'
import { connect } from 'react-redux'
import {formatMoney} from "../../pipes/priceFormatter";


const CartItem = (props) => {
  //  console.log(props);
    const { cartItem } = props;
    const quantity = cartItem.quantity;
    const { product } = cartItem;
    const [itemQuantity, setItemQuantity] = useState(quantity);

    const incrementOrDecrement = (e, type) => {
        const value = itemQuantity;
        //  console.log(type, value);

        if (type === 'inc' && value < 10) {
            setItemQuantity(itemQuantity + 1);
            props.incCartQuantity(product.id);
        }


        if (type === 'desc' && value > 1) {
            setItemQuantity(itemQuantity - 1);
            props.decCartQuantity(product.id);
        }

    };

  const deleteItem = (productId) => props.deleteCartItem(productId);

    return (
        <div className="row">

            <div className="col m2 ">
                <div className="cart-img ">
                    <img src={product.images} alt="" style={{ height: "60%", width: "60%" }} />
                </div>
            </div>
            <div className="col m6 ">
                <div className="cart-details">
                    <h4><strong>{shortenTitle(product.title)}</strong></h4>
                    <p>{product.description}</p>
                </div>
            </div>
            <div className="col m4 ">
                <div className="row">
                    <div className="col m6 text-md-right">
                        <h6><strong>{ formatMoney( product.price * itemQuantity )  }$ </strong></h6>
                    </div>
                    <div className="col m4">
                        <div className="quantity">
                            <input type="button" className="plus" value="+" onClick={(e) => { incrementOrDecrement(e, 'inc') }} />
                            <input type="number" step="1" max="10" min="1" title="Qty" className="qty" size="4" onChange={e => setItemQuantity(e.target.value)}  value={ itemQuantity } />
                            <input type="button" className="minus" value="-" onClick={(e) => { incrementOrDecrement(e, 'desc') }} />

                        </div>

                    </div>
                    <div className="col m2">
                        <button type="button" className="btn red accent-4" onClick={()=> deleteItem(product.id)} >
                            <i className=" material-icons">delete</i>
                        </button>
                    </div>
                </div>
            </div>

        </div>

    )
}

const mapDispatchToProps = dispatch => {
    return {
        incCartQuantity: (productId) => dispatch(incrementCartQuantity(productId)),
        decCartQuantity: (productId) => dispatch(decrementCartQuantity(productId)),
        deleteCartItem: (productId) => dispatch(deleteCartItem(productId))
    }
}


export default connect(null, mapDispatchToProps)(CartItem)