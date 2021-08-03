import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="flex justify-around h-16 items-center bg-black text-white">
                <div className="">
                    <Link to="/">HOME</Link>
                </div>
                <div className="">
                    <Link to="/details">DETAILS</Link>
                </div>
                <div className="">
                    <Link to="/cart">CART</Link>
                </div>
                <div className="">
                    <Link to="/wishlist">WISHLIST</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
