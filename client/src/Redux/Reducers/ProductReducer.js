import { ADDPRODUCT, GETALLPRODUCTS, GETONEPRODUCT } from "../ActionTypes/ProductTypes"

const initialState = {
    product : {},
    products : [],
    oneProduct:{}
}

const ProductReducer=(state = initialState, action)=>{
    switch (action.type) {
        case ADDPRODUCT : return {...state, product : action.payload.newProduct, errors : null}
        case GETALLPRODUCTS : return {...state, products : action.payload}
        case GETONEPRODUCT : return {...state, oneProduct : action.payload}
        default: return state
    }
}

export default ProductReducer