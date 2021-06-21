import React, {useReducer} from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
import ContactReducer from './contactReducer'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types'

const ContactState = props =>{
    const initialState ={
        contacts : [
            {
                id:1,
                name:'asd fgh',
                email:'asdfgh@gmail.com',
                phone:'123456789',
                type:'personal'
            },
            {
                id:2,
                name:'qwe rty',
                email:'qwerty@gmail.com',
                phone:'123477789',
                type:'personal'
            },
            {
                id:3,
                name:'zxc vbn',
                email:'zxcvbn@gmail.com',
                phone:'155556789',
                type:'professional'
            },
            {
                id:4,
                name:'poi uyt',
                email:'poiuyt@gmail.com',
                phone:'123458899',
                type:'professional'
            }
        ],
        current:null,
        filtered:null
    }

    const [state,dispatch] = useReducer(ContactReducer,initialState);

    //Add Contact
    const addContact = contact =>{
        contact.id = uuid.v4()
        dispatch({type:ADD_CONTACT, payload:contact})
    }

    //Update Contact
    const updateContact = contact =>{
        dispatch({type:UPDATE_CONTACT, payload:contact})
    }

    //Delete Contact
    const deleteContact = id =>{
        dispatch({type:DELETE_CONTACT, payload:id})
    }

    //Filter contacts
    const filterContacts = text =>{
        dispatch({type:FILTER_CONTACTS, payload:text})
    }

    //Clear Filter
    const clearFilter = () =>{
        dispatch({type:CLEAR_FILTER})
    }

    //Set current contact
    const setCurrent = contact =>{
        dispatch({type:SET_CURRENT, payload:contact})
    }

    //Clear current contact which is in edit mode
    const clearCurrent = () =>{
        dispatch({type:CLEAR_CURRENT})
    }

    return (
        <ContactContext.Provider
        value={{
            contacts:state.contacts,
            current:state.current,
            filtered:state.filtered,
            addContact,
            updateContact,
            deleteContact,
            filterContacts,
            clearFilter,
            setCurrent,
            clearCurrent
        }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState;