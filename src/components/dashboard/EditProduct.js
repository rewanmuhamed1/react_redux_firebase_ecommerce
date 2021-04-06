import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase/app';
import { editProduct } from '../../store/actions/dashboardProduct'
import {getbrands } from '../../store/actions/brandActions'
import './Dashboard.css'

class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product:
            {
                id :'',
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
    } // constructor 

    componentDidMount() {
        this.props.getbrands();
      //  console.log("this.props.match.params.id", this.props.match.params.id);
        const ref = firebase.firestore().collection('products').doc(this.props.match.params.id);
        ref.get().then((doc) => {
            if (doc.exists) {
                const board = doc.data();
                this.setState({
                    //id: doc.id,
                    product:
                    {
                        title: board.title,
                        category: board.category,
                        images: board.images,
                        brand: board.brand,
                        price: board.price,
                        cpu: board.cpu,
                        camera: board.camera,
                        size: board.size,
                        weight: board.weight,
                        display: board.display,
                        battery: board.battery,
                        memory: board.memory,
                        description: board.description
                    }
                   
                });
            } else {
                console.log("No such document!");
            }
        });


    } // component did mount


    handleChange = (e) => {
        
        if (e.target.id === "images") {
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

    

    } //  handle  Change



    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.product);
       this.props.editProduct(this.state.product);
       
    } // handle Submit

    render() {

        const { brands } = this.props;
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Add Product</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" value={this.state.product.title} id='title' onChange={this.handleChange} />
                    </div>

                    <div className="input-field col s12 ">
                        <select id="category" value={this.state.product.category} onChange={this.handleChange} >
                            <option value="" defaultValue  >Choose Category</option>
                            {this.state.categories.map((cat, i) => <option value={cat} key={i}>{cat}</option>)}
                        </select>

                    </div>

                    <div className="input-field col s12">
                        <select id="brand" value={this.state.product.brand} onChange={this.handleChange} >
                            <option value="" defaultValue>Choose Brand</option>
                            { brands.map((brand, i) => <option value={brand.name} key={i}>{brand.name}</option>)}
                        </select>

                    </div>

                    <div>
                        <div className="file-field input-field">
                            <div className="btn">
                                <span>File</span>
                                <input type="file" id="images" onChange={this.handleChange} />
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path " value={this.state.product.images}  type="text" placeholder="Upload one image" />
                            </div>
                        </div>
                    </div>

                    <div className="input-field">
                        <label htmlFor="price">Price</label>
                        <input type="number" value={this.state.product.price}  id='price' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="cpu">CPU</label>
                        <input type="text" id='cpu' value={this.state.product.cpu}  onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="camera">Camera</label>
                        <input type="text" id='camera' value={this.state.product.camera}  onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="size">Size</label>
                        <input type="text" id='size' value={this.state.product.size}  onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="weight">Weight</label>
                        <input type="text" id='weight' value={this.state.product.weight}  onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="display">Display</label>
                        <input type="text" id='display' value={this.state.product.display}  onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="battery">Battery</label>
                        <input type="text" id='battery' value={this.state.product.battery}  onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="memory">Memory</label>
                        <input type="text" id='memory' value={this.state.product.memory}  onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <textarea id="description" value={this.state.product.description}  className="materialize-textarea" data-length="500" onChange={this.handleChange}></textarea>
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
   // console.log( "brands" , state.brand.brands  );
    return {
        brands : state.brand.brands  
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        editProduct: (product) => dispatch(editProduct(product)),
        getbrands : () => dispatch(getbrands())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditProduct)
