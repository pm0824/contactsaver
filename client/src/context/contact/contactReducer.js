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
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts:state.contacts.map(contact=>
                    contact.id === action.payload.id ? action.payload : contact
                )
            }
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact=>contact.id!==action.payload)
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current:null
            }
        default:
            return state
    }
}