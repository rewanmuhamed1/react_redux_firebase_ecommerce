
const initState = {
  updateProuduct: false
}
const dashboardReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DELETE_PRODUCT_SUCCESS':
      console.log('delete product', action.productId);
      return {
        ...state,
        updateProuduct: false
      };
      break;
    case 'DELETE_PRODUCT_ERROR':
      console.log('delete product ERROR', action.err);
      return {
        ...state,
        updateProuduct: false
      };
      break;
    case 'UPDATE_PRODUCT_SUCCESS':
      console.log('UPDATE product', action.productId);
      return {
        ...state,
        updateProuduct: true
      };
      break;
    case 'UPDATE_PRODUCT_ERROR':
      console.log('UPDATE product ERROR', action.err);
      return {
        ...state,
        updateProuduct: false
      };
      break;
    default:
      return state;
  }
}
export default dashboardReducer;