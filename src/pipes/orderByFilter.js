

export const orderByFilter = (arr, type ) => {
    if(!type) return arr;
    console.log('orderbYmethod', type);
    if(type === 'asc') {
        return arr.slice().sort((el1, el2) => el1.products_data.price - el2.products_data.price);
    } else {
        return arr.slice().sort((el1, el2) => el2.products_data.price - el1.products_data.price);
    }
};