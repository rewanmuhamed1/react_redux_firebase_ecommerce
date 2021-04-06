import React from 'react';
import './App.css';
import {  Switch, Route } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Cart from './pages/Cart';
import ProductDetails from './components/products/ProductDetails'


function App() {
  return (
    
      <div className="App">

        <Navbar />

         <Switch>
            <Route exact path='/'  component={Products} />
            <Route path='/product/:id' component={ProductDetails} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/dashboard/addproduct' component={Dashboard} />
            <Route exact path='/dashboard/editproduct/:id' component={Dashboard} />
            <Route exact path='/dashboard/addbrand' component={Dashboard} />
            <Route exact path='/cart' component={Cart} />
          </Switch>
      </div>
   
  );
}

export default App;
