import React, {useReducer} from 'react'
import axios from 'axios'
//import uuid from 'uuid'
import ContactContext from './contactContext'
import ContactReducer from './contactReducer'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    CONTACT_ERROR
} from '../types'

const ContactState = props =>{
    const initialState ={
        contacts : [],
        current:null,
        filtered:null,
        error:null
    }

    const [state,dispatch] = useReducer(ContactReducer,initialState);

    //Add Contact
    const addContact = async contact =>{
        //contact.id = uuid.v4()
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }

        try {
            const res = await axios.post('api/contacts',contact,config)

            dispatch({
                type:ADD_CONTACT, 
                payload:res.data
            })

        } catch (err) {
            dispatch({
                type: CONTACT_ERROR,
                payload:err.response.msg
            })
        }
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
            error:state.error,
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