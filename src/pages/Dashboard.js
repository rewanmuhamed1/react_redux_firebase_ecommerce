import React from 'react';
import { Route } from 'react-router-dom';
import NavbarAdmin from '../components/dashboard/NavbarAdmin';
import AddProduct from '../components/dashboard/AddProduct';
import AddBrand from '../components/dashboard/AddBrand';
import EditProduct from '../components/dashboard/EditProduct';
import ProductAdminList from '../components/dashboard/ProductAdminList';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class Dashboard extends React.Component {

    


    render() {

    console.log("render");
    
     const { auth  } = this.props;

        
        if (!auth.uid) return <Redirect to='/signin' />;
        
            return (

                <div className="Dashboard">
    
                    <NavbarAdmin />
    
                    <Route exact path='/dashboard' component={ProductAdminList} />
    
                    <Route exact path='/dashboard/addproduct' component={(props) => <AddProduct {...props}  />} />
                    <Route exact path='/dashboard/editproduct/:id' component={EditProduct} />
                    <Route exact path='/dashboard/addbrand' component={AddBrand} />
    
                </div>
    
            ); 
       
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
       
    }
}


export default  connect(mapStateToProps) (Dashboard)

