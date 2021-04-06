import firebase from 'firebase/app';

export const createBrand  = (brand) => {
 
    return (dispatch, getState ) => {
     // make async call to database
     firebase
    .firestore()
    .collection('brands').add({
      name : brand,
      authorFirstName: 'Net',
      authorLastName: 'Ninja',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_BRAND_SUCCESS' ,brand } );
    }).catch(err => {
      dispatch({ type: 'CREATE_BRAND_ERROR' ,err });
    });
  }
};


const get_brands = async () => {

  const snapshot = await firebase.firestore().collection('brands').get();

  return  snapshot.docs.map(doc => doc.data());;
}


export const getbrands = () => async dispatch => {

  try {
    const brands = await get_brands();
    // localStorage.setItem('products', JSON.stringify(products));
    //console.log("getbrands  actions ", brands);
    dispatch({
      type: 'GET_BRANDS',
      payload: brands
    })
  } catch (error) {
    alert(error)
  }

};


export const addBrandToFilter = brand => {
  return {
      type: "ADD_BRAND_TO_FILTER",
      brand
  }
};


export const removeBrandFromFilter = brand => {
  return  {
      type: "REMOVE_BRAND_FROM_FILTER",
      brand
  }
};