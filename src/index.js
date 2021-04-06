import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk'
import firebase from 'firebase/app';
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import fbConfig from './config/fbConfig';
import { loadState , saveState } from  './cartLocalStorage/localStorage'

const persistedState = loadState("cartItems");

 const store = createStore(rootReducer,  persistedState , compose(applyMiddleware(thunk)));
 store.subscribe(()=>{
  saveState( {cart : store.getState().cart} ,"cartItems");
  
 });

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function AuthIsLoaded({ children }) {  // for loading auth after that loading app beacuse of navbar 
  const auth = useSelector(state => state.firebase.auth)
  
  if (!isLoaded(auth)) return <div>Loading...</div>;
  return children
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter basename="/react_redux_firebase_ecommerce/">
          <AuthIsLoaded>
            <App />
          </AuthIsLoaded>


        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
