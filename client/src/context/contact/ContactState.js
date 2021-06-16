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
        ]
    }

    const [state,dispatch] = useReducer(ContactReducer,initialState);

    return (
        <ContactContext.Provider
        value={{
            contacts:state.contacts
        }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState;