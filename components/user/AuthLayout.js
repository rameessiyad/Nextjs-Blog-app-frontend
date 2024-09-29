import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const AuthLayout = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default AuthLayout