import React, { Component } from 'react'
import { createProduct } from '../../store/actions/productActions'
import { connect } from 'react-redux'
import {getbrands } from '../../store/actions/brandActions'

class AddProduct extends Component {
    state = {
        product:
        {
            title: '',
            category: '',
            images: '',
            brand: '',
            price: '',
            cpu: '',
            camera: '',
            size: '',
            weight: '',
            display: '',
            battery: '',
            memory: '',
            description: ''
        },
        categories: ['phones', 'tablets'],
        brands: []

    };

    handleChange = (e) => {
        

        if (e.target.id == "images") {
            console.log(e.target.files[0].name);
            this.setState({
                product: { ...this.state.product, [e.target.id]: e.target.files[0].name }
            })
        }
        else {
            this.setState({
                product: { ...this.state.product, [e.target.id]: e.target.value }
            })
        }

    }
    handleSubmit = (e) => {
        e.preventDefault();
      //   console.log(this.state.product);
        this.props.createProduct(this.state.product);
    }



    componentDidMount() {
        this.props.getbrands();

        //const brand_s = JSON.parse(localStorage.getItem('brands'));

    }


    render() {
        const { brands } = this.props;
        
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Add Product</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id='title' onChange={this.handleChange} />
                    </div>

                    <div className="input-field col s12 ">
                        <select id="category" value={this.state.category} onChange={this.handleChange} >
                            <option value="" defaultValue  >Choose Category</option>
                            {this.state.categories.map((cat, i) => <option value={cat} key={i}>{cat}</option>)}
                        </select>

                    </div>

                    <div className="input-field col s12">
                        <select id="brand" value={this.state.brand} onChange={this.handleChange} >
                            <option value="" defaultValue>Choose Brand</option>
                            {brands.map((brand, i) => <option value={brand.name} key={i}>{brand.name}</option>)}
                        </select>

                    </div>

                    <div>
                        <div className="file-field input-field">
                            <div className="btn">
                                <span>File</span>
                                <input type="file" id="images" onChange={this.handleChange} />
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path " type="text" placeholder="Upload one image" />
                            </div>
                        </div>
                    </div>

                    <div className="input-field">
                        <label htmlFor="price">Price</label>
                        <input type="number" id='price' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="cpu">CPU</label>
                        <input type="text" id='cpu' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="camera">Camera</label>
                        <input type="text" id='camera' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="size">Size</label>
                        <input type="text" id='size' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="weight">Weight</label>
                        <input type="text" id='weight' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="display">Display</label>
                        <input type="text" id='display' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="battery">Battery</label>
                        <input type="text" id='battery' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="memory">Memory</label>
                        <input type="text" id='memory' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <textarea id="description" className="materialize-textarea" data-length="500" onChange={this.handleChange}></textarea>
                        <label htmlFor="description">Description</label>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">add</button>
                    </div>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    //console.log( "brands" , state.brand.brands  );
    return {
        brands : state.brand.brands  
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        createProduct: (product) => dispatch(createProduct(product)),
        getbrands : () => dispatch(getbrands())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)

