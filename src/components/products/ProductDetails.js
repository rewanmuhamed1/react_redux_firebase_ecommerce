import React , {Component} from 'react'
import { connect } from 'react-redux'
import { addProductToCart } from '../../store/actions/cartActions'
import { getProduct } from '../../store/actions/productActions'

class ProductDetails extends Component {


    componentDidMount()
    {
      
       const id = this.props.match.params.id;
       this.props.getProduct(id);
    }

    render()
    {
   

    const { product } = this.props;
    const addProductToCart = () => {
        // console.log("product" ,product );
        this.props.addToCart(product);
    }

    if (product) {
        return (

            <div className="container section project-details">

                <div className="row">
                    <div className="col s5 ">
                        <div className="cart-img ">
                            <img src={"images/" + product.images} alt="" style={{}} />
                        </div>
                    </div>
                    <div className="col s7 ">
                        <div className="cart-details">
                            <h4> {product.title} </h4>
                            <p>{product.description}</p>
                            <button type="button" className="btn  accent-4" onClick={addProductToCart}>
                                <i className=" material-icons">add </i> add to card
                        </button>
                        </div>
                    </div>
                </div>

            </div>


        )
    } else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }
}
}
const mapStateToProps = (state, ownProps) => {
  //  console.log('product details ', state.product.products);
   // const id = ownProps.match.params.id;
    //  const products = state.product.products;
    // const product = products ? products[id] : null;
    return {
        product:  state.product.product.productData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (product) => dispatch(addProductToCart(product)),
        getProduct: (id) => dispatch(getProduct(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)