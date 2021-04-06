const initState = {
  products: [


  ],
  product: {

  }
}

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PRODUCT_SUCCESS':
      console.log('create product');
      return state;

    case 'CREATE_PRODUCT_ERROR':
      console.log('create product ERROR');
      return state;

    case 'GET_PRODUCTS':
      // const products = JSON.parse(localStorage.getItem('products'));

      return {
        ...state,
        products: action.payload
      }
    case 'GET_PRODUCT':
      // const products = JSON.parse(localStorage.getItem('products'));
      console.log("getProduct  reducer ", action.payload);
      return {
        ...state,
        product: action.payload
      }

    default:
      return state;
  }

};

export default productReducer;