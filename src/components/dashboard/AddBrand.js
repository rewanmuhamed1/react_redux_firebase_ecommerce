import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createBrand } from '../../store/actions/brandActions'
import './Dashboard.css'


class AddBrand extends Component {
    state = {
       name:''
    };
    handleChange = (e) => {
       // console.log(e);
        this.setState({
            name : e.target.value 
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
       // console.log(this.state);
       this.props.createBrand(this.state.name);
    }
    render() {
        return (
            <div className="container">
                {this.props.addBrand ? (
                                        <div className="alert-addBrand" >brand added successfuly</div>
                                    ) : null }
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Add Brand</h5>
                    <div className="input-field">
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' onChange={this.handleChange} />
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
    console.log( "addBrand" , state.brand.add  );
    return {
        addBrand : state.brand.add
    }
  }
const mapDispatchToProps = dispatch => {
    return {
        createBrand: (brand) => dispatch(createBrand(brand))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AddBrand)