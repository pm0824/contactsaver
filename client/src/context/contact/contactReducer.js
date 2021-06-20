import {
    ADD_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state,action)=>{
    switch(action.type){
        case ADD_CONTACT:
            return {
                ...state,
                contacts:[...state.contacts,action.payload]   //cannot modify contacts in state so append to previous
            }
        default:
            return state
    }
}