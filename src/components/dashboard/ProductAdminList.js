import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { dashboardProduct } from '../../store/actions/dashboardProduct'
import { Link } from 'react-router-dom';



const ProductAdminList = (props) => {

  const { products } = props;

  const deleteProductClick = (e, productId) => {
    e.preventDefault();
    // console.log(this.state);
    props.deleteProduct(productId);
  }



  return (
    <div>
      <h4>Product Admin List</h4>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {

            products && products.map((product, i) => {
              return (


                <tr  key={product.id}>
                  <th scope="row" > {i + 1}</th>
                  <td> <Link to={'/product/' + product.id}> {product.title} </Link> </td>
                  <td>
                    <Link to={'/dashboard/editproduct/' + product.id} key={i} className="edit" title="" data-toggle="tooltip" data-original-title="Edit">
                      <i className="material-icons"></i>
                    </Link>
                    <button className="delete btn-flat" title="" data-toggle="tooltip" data-original-title="Delete" onClick={(e) => deleteProductClick(e, product.id)} ><i className="material-icons"></i></button >
                  </td>
                </tr>


              )
            }
            )


          }

        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    products: state.firestore.ordered.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteProduct: (productId) => dispatch(dashboardProduct(productId))
  }
}



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'products' }
  ])
)(ProductAdminList)
