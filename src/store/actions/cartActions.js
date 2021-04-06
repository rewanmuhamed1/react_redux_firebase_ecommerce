export const addProductToCart = product => {
    return {
        type: "ADD_PRODUCT_TO_CART",
        product
    }
};



export const incrementCartQuantity = productId => {
    return{
        type: "INCREMENT_CART_ITEM_QUANTITY",
         productId
    }
};

export const decrementCartQuantity = productId => {
  return {
      type: "DECREMENT_CART_ITEM_QUANTITY",
     productId
  }
};


export const deleteCartItem = productId => {
    return {
        type: "DELETE_CART_ITEM",
       productId
    }
  };
  