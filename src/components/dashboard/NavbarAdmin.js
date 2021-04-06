import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarAdmin = () => {
    return (
        <div>
            <nav className="nav-extended">
                <div className="nav-wrapper">
                    <ul className="center" >
                        <li><NavLink to='/dashboard' className="btn btn-primary">Product List</NavLink></li>
                        <li><NavLink to='/dashboard/addproduct' className="btn btn-primary">Add Product</NavLink></li>
                        <li><NavLink to='/dashboard/addbrand' className="btn btn-primary">Add Brand</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavbarAdmin