import React from 'react'
import { addProductToCart } from '../../store/actions/cartActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {formatMoney} from "../../pipes/priceFormatter";

const ProductItem = (props) => {
    const { product } = props;

    const addProductToCart = () => {
       // console.log("product" ,product );
        props.addToCart(product);
    }

    return (
        <div className="col s12 m4">
            <div className="card">
                <div className="card-image">
                <Link to={'/product/' + product.id} key={product.id}>
                    <img src={"images/"+product.images} alt="" />
                    <h3 className="card-title">{product.title}</h3>
                    <h4>{ formatMoney(parseFloat(product.price) ) }$</h4>
                    </Link>
                    <button className="btn-floating halfway-fab waves-effect waves-light red"
                        onClick={addProductToCart}
                    ><i className="material-icons">add</i>
                    </button>
                </div>
                <div className="card-content">
                    <p>{product.description}</p>
                </div>
            </div>
        </div>

    )
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (product) => dispatch(addProductToCart(product))
    }
}


export default connect(null, mapDispatchToProps)(ProductItem)
