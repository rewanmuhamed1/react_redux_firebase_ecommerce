import firebase from 'firebase/app';

export const createProduct = (product) => {
  return (dispatch, getState) => {
    // make async call to database
    firebase
      .firestore()
      .collection('products').add({
        ...product,
        authorFirstName: 'Net',
        authorLastName: 'Ninja',
        authorId: 12345,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_PRODUCT_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_PRODUCT_ERROR' }, err);
      });
  }
};




const get_products = async () => {
  const products = [];
  const snapshot = await firebase.firestore().collection('products').get();

  snapshot.forEach((doc) => {

    const products_data = doc.data();
    products.push({
      id: doc.id,
      products_data
    });
  });

 /// console.log(" products in actions " ,products);

  return products;
}


export const getProducts = () => async dispatch => {

  try {
    const products = await get_products();
    // localStorage.setItem('products', JSON.stringify(products));
   // console.log("getProducts  actions ", products);
    dispatch({
      type: 'GET_PRODUCTS',
      payload: products
    })
  } catch (error) {
    alert(error)
  }

};





export const getProduct = (id) =>  dispatch => {

  try {
  
    const ref = firebase.firestore().collection('products').doc(id);

    ref.get().then((doc) => {
     
      if (doc.exists) {
       
      const  product={
          productData : doc.data(),
          id: doc.id
          
        }
        console.log("getProduct  actions if ", product );
        dispatch({
          type: 'GET_PRODUCT',
          payload: product
        })

      } else {
        console.log("No such document!");
      }
  
      
    });
    
    
  } catch (error) {
    alert(error)
  }

};