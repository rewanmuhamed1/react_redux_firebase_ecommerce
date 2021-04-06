import React from 'react'
import {connect} from 'react-redux';
import { orderByAsc ,orderByDesc , clearOrderBy } from "../../store/actions/priceFilterAction";
import './prices.css' ;

class Prices extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            removeSelected: '',
            selected: ''
        };
    }


    handlePriceFilterChange = (event) => {
        const value = event.target.value;
        this.setState({ ...this.state, selected: value });
        if (value === "ORDER_BY_ASC") {
            this.props.orderByAsc();
        } else {
            this.props.orderByDesc();
        }

    }

    removeFilter = (e) => {

        const buttons = document.getElementsByName('priceFilter');

        buttons.forEach(el => {
            el.checked = false;
        });

        this.props.clearOrderBy();
        this.setState({ ...this.state, selected: '' });
        // setSelected('');
    }



    render() {
        
    if(this.state.selected) {
        this.state.removeSelected = <span onClick={this.removeFilter} className="empty-brand-x">  x </span>
    }else
    {
        this.state.removeSelected = <span onClick={this.removeFilter} className="empty-brand-x"> </span>
    }

        return (
            <div>
                <h3>Prices  {this.state.removeSelected} </h3>  
                <form >
                    <p>
                        <label>
                            <input
                                name="priceFilter"
                                type="radio"
                                value="ORDER_BY_ASC"
                                onChange={this.handlePriceFilterChange}
                            />
                            <span>Low to High </span>
                        </label>
                    </p>

                    <p>
                        <label>
                            <input name="priceFilter"
                                type="radio"
                                value="ORDER_BY_DESC"
                                onChange={this.handlePriceFilterChange} />
                            <span>High to Low </span>
                        </label>
                    </p>

                </form>
            </div>


        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        orderByAsc : () => dispatch( orderByAsc() ) ,
        orderByDesc : () => dispatch( orderByDesc() ) ,
        clearOrderBy : () => dispatch( clearOrderBy() )
        
    }
}

export default connect(null , mapDispatchToProps ) ( Prices )