import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import ErrorReducer from './ErrorReducer'
import ProductReducer from './ProductReducer'
import CommandeReducer from './CommandeReducer'
import CommentaireReducer from './CommentaireReducer'
const rootReducer=  combineReducers({AuthReducer, ProductReducer, ErrorReducer,CommandeReducer, CommentaireReducer})

export default rootReducer