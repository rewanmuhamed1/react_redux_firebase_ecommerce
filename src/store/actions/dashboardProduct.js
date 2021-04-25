import firebase from 'firebase/app';

export const dashboardProduct  = (productId) => {
    return (dispatch, getState ) => {
     // make async call to database
     firebase
    .firestore()
    .collection('products').doc( productId ).delete()
    .then(() => {
      dispatch({ type: 'DELETE_PRODUCT_SUCCESS' } ,productId);
    }).catch(err => {
      dispatch({ type: 'DELETE_PRODUCT_ERROR' }, err);
    });
  }
};

export const editProduct  = (product) => {
  return (dispatch, getState ) => {
   // make async call to database
   console.log("actions edit product",product);
   firebase
  .firestore()
  .collection('products').doc(product.id).update({
    ...product,
    authorFirstName: 'Net',
    authorLastName: 'Ninja',
    authorId: 12345,
    createdAt: new Date()
  }).then(() => {
    dispatch({ type: 'UPDATE_PRODUCT_SUCCESS' });
  }).catch(err => {
    dispatch({ type: 'UPDATE_PRODUCT_ERROR' }, err);
  });
}
};