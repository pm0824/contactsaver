import React, { Fragment, useContext} from 'react'
import { Link } from 'react-router-dom'

import AuthContext from '../../context/auth/authContext'
import ContactContext from '../../context/contact/contactContext'

const Navbar = () => {
    const authContext = useContext(AuthContext)
    const contactContext = useContext(ContactContext);

    const { isAuthenticated, logout, user } = authContext
    const {clearContacts} = contactContext

    const onLogout =()=>{
        logout()
        clearContacts()
    }

    const authLinks = (
        <Fragment>
            <li>Hello {user && user.name}</li>
            <li>
                <a onClick={onLogout} href='#!'>
                    <i className='fas fa-sign-out-alt'/><span className='hide-sm'>LOGOUT</span>
                </a>
            </li>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </Fragment>
    )

    return (
        <div className='navbar bg-primary'>
            <h1>
                <i className='fas fa-id-card-alt'/> Contact Saver
            </h1>
            <ul>
                {isAuthenticated ? authLinks : guestLinks}
            </ul>
        </div>
    )
}

export default Navbar
