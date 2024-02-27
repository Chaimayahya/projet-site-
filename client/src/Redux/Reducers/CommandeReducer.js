import { GETALLCOMMANDES, GETOWNCOMMANDE, GETOWNPANIER } from "../ActionTypes/CommandeTypes"

const initialState = {
    commandes : [],
    ownCommandes : [],
    ownPanier : []
}

const CommandeReducer=(state = initialState, action)=>{
    switch (action.type) {

        case GETALLCOMMANDES : return {...state,commandes : action.payload}
        case GETOWNCOMMANDE : return {...state,ownCommandes : action.payload}
        case GETOWNPANIER : return {...state,ownPanier : action.payload}
        default: return state
    }
}

export default CommandeReducer