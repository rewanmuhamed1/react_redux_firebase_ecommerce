const initState = {
  products: [


  ],
  product: {

  } ,
  createProuduct: false
}

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PRODUCT_SUCCESS':
      console.log('create product');
      return {
        ...state,
        createProuduct: true
      };

    case 'CREATE_PRODUCT_ERROR':
      console.log('create product ERROR');
      return {
        ...state,
        createProuduct: false
      };

    case 'GET_PRODUCTS':
      // const products = JSON.parse(localStorage.getItem('products'));

      return {
        ...state,
        products: action.payload ,
        createProuduct: false
      }
    case 'GET_PRODUCT':
      // const products = JSON.parse(localStorage.getItem('products'));
      console.log("getProduct  reducer ", action.payload);
      return {
        ...state,
        product: action.payload ,
        createProuduct: false
      }

    default:
      return state;
  }

};

export default productReducer;