import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getbrands } from '../../store/actions/brandActions'
import {addBrandToFilter, removeBrandFromFilter} from "../../store/actions/brandActions";


class Brands extends Component {

    constructor(props) {
        super(props);

        this.props.getbrands();
    }


    handleCheckBoxs = (e) => {
        //console.log('event.target.value', event.target.value)
        const name = e.target.name;
       
        if (e.target.checked) {
            this.props.addBrandToFilter(name);
            console.log('name', name)
        } else {
            this.props.removeBrandFromFilter(name);
        }

    }


    displayBrands = (brand, i, brandItemsCount) => {
         // console.log("this.brandItemsCount in function i", i);
        return (

            <p key={i}>
                <label>
                    <input

                        onInput={this.handleCheckBoxs}
                        type="checkbox"
                        name={brand} />
                    <span>{brand} ({brandItemsCount[brand]})</span>
                </label>
            </p>


        )
    }


    render() {
        const brandItemsCount = {};
        //  console.log("this.props.products.productData brands", this.props.products);
        this.props.products.forEach(p => {

         //     console.log("p.products_data", p.products_data);
            brandItemsCount[p.products_data.brand] = brandItemsCount[p.products_data.brand] + 1 || 1;
        });
        // console.log("brandItemsCount", brandItemsCount);

        return (

            <div>

                <h3>Brands</h3>
                <form >
                    {
                        this.props.brands.map((brand, i) => this.displayBrands(brand.name, i, brandItemsCount))




                    }
                </form>
            </div>
        )

    }
}



const mapStateToProps = (state) => {
  //  console.log(state.brand.brands);
    return {

        brands: state.brand.brands
    }

}


const mapDispatchToProps = dispatch => {
    return {
        getbrands : () => dispatch(getbrands()),
        addBrandToFilter : (name) => dispatch(addBrandToFilter(name)),
        removeBrandFromFilter : (name) => dispatch(removeBrandFromFilter(name)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Brands); 