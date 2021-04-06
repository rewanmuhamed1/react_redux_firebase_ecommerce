import authReducer from './authReducer';
import productReducer from './productReducer';
import brandReducer from './brandReducer';
import cartReducer from './cartReducer';
import dashboardReducer from './dashboardReducer'
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import brandFilterReducer from "./brandFilterReducer";
import {priceFilterReducer} from "./priceFilterReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  brandFilter: brandFilterReducer,
  priceFilter: priceFilterReducer,
  product: productReducer,
  dashboard : dashboardReducer,
  brand : brandReducer,
  cart : cartReducer ,
  firebase: firebaseReducer,
  firestore : firestoreReducer,
  
});

export default rootReducer
