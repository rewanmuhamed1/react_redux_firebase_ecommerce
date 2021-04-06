const initState = {
  brands: [],
  add: false
}

const brandReducer = (state = initState, action) => {

  switch (action.type) {
    case 'CREATE_BRAND_SUCCESS':

       console.log('CREATE_BRAND_SUCCESS', state.add);
      return {
        ...state,
        add: true
      };
    case 'CREATE_BRAND_ERROR':
      // console.log('create brand ERROR', action.err);
      return {
        ...state,
        add: false
      };;
    case 'GET_BRANDS':
      // const products = JSON.parse(localStorage.getItem('products'));

      return {
        ...state,
        brands: action.payload,
        add: false
      }
    default:
      return state;
  }

};

export default brandReducer;