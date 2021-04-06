import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getProducts } from '../store/actions/productActions'
import ProductsList from '../components/products/ProductsList';
import Brands from '../components/filters/Brands';
import Prices from '../components/filters/Prices';
import { brandFilter } from "../pipes/brandFilter";
import {  orderByFilter } from "../pipes/orderByFilter";
import './products.css';
class Products extends Component {

  constructor(props) {
    super(props);
    this.props.getProducts();
    // console.log("this.props.getProducts();");
  }


  render() {

    const { products, allProduct ,brands } = this.props;
     console.log("brands.length", brands.length);

    if (products.length || brands.length > 0 ) {
      return (
        <div className="products container">
          <div className="row">
            <div className="col s12 m3">
              <Brands products={allProduct} />
              <Prices />
            </div>
            <div className="col s12 m9 ">
              <ProductsList products={products} />
            </div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div>loading ...</div>
      )


    }
  }
}

const mapStateToProps = (state) => {
  //console.log( "products products_data",state.product.products  );

  const brands = state.brandFilter;
  //  console.log( "brands",state.brandFilter );
  const priceFilter = state.priceFilter;

  const filterByBrandArr = brandFilter(state.product.products, brands);
  // console.log( "filterByBrandArr", filterByBrandArr );
  const filterByOrderArr = orderByFilter(filterByBrandArr, priceFilter);

  return {
    products: filterByOrderArr ,
    allProduct: state.product.products ,
    brands :brands
  }
}



export default connect(mapStateToProps, { getProducts })(Products)