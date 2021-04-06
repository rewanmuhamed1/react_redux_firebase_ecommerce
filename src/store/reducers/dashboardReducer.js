

const dashboardReducer = (state = null, action) => {
  switch (action.type) {
    case 'DELETE_PRODUCT_SUCCESS':
      console.log('delete product', action.productId);
      return state;
      break;
    case 'DELETE_PRODUCT_ERROR':
      console.log('delete product ERROR', action.err);
      return state;
      break;
    case 'UPDATE_PRODUCT_SUCCESS':
      console.log('UPDATE product', action.productId);
      return state;
      break;
    case 'UPDATE_PRODUCT_ERROR':
      console.log('UPDATE product ERROR', action.err);
      return state;
      break;
    default:
      return state;
  }
}
export default dashboardReducer;