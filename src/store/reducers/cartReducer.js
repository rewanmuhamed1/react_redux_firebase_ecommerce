import { loadState  } from  '../../cartLocalStorage/localStorage'

const cartReducer = (state = loadState("cartItems"), action) => {

    let updatedCart;
    let updatedItemIndex;

    switch (action.type) {
        case "ADD_PRODUCT_TO_CART":
            updatedCart = [...state.cartItems];
            updatedItemIndex = updatedCart.findIndex(item => item.product.id === action.product.id);
            //console.log("updatedItemIndex" ,updatedItemIndex);
            if (updatedItemIndex < 0) {
                updatedCart = [
                    ...state.cartItems,
                    {
                        product: action.product,
                        quantity: 1
                    }
                ]
            } else {
                const updatedItem = {
                    ...updatedCart[updatedItemIndex]
                };

                updatedItem.quantity++;
                updatedCart[updatedItemIndex] = updatedItem;
            }
            return { ...state, cartItems: updatedCart };
            break;
        /////////////////////////////////////////////////////////////////////////////
        case "INCREMENT_CART_ITEM_QUANTITY":
            updatedCart = [...state.cartItems];
            updatedItemIndex = updatedCart.findIndex(
                item => item.product.id === action.productId
            );

            const incrementedItem = {
                ...updatedCart[updatedItemIndex]
            };

            incrementedItem.quantity++;

            updatedCart[updatedItemIndex] = incrementedItem;


            return { ...state, cartItems: updatedCart };
        /////////////////////////////////////////////////////////////////////////////
        case "DECREMENT_CART_ITEM_QUANTITY":
            updatedCart = [...state.cartItems];
            updatedItemIndex = updatedCart.findIndex(
                item => item.product.id === action.productId
            );

            const decrementedItem = {
                ...updatedCart[updatedItemIndex]
            };

            decrementedItem.quantity--;

            updatedCart[updatedItemIndex] = decrementedItem;

            return { ...state, cartItems: updatedCart };
        /////////////////////////////////////////////////////////////////////////////
        case "DELETE_CART_ITEM":
            updatedCart = [...state.cartItems];
            updatedItemIndex = updatedCart.findIndex(
                item => item.product.id === action.productId
            );
            updatedCart.splice(updatedItemIndex, 1);
            

            return { ...state, cartItems: updatedCart };
          /////////////////////////////////////////////////////////////////////////////   
        default:
            return state;
    }
};

export default cartReducer;