import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../assets/Style/navbar.css';
const Navbar = () => {

    let loc = useLocation();
    let path = loc.pathname;
    let bool = path.startsWith('/adminPortal');
    
  return (
    <>
        <div className="navbar">
            <div className="logo">
                <h3>Book Store</h3>
            </div>
            <div className="links">
                {
                    bool?
                    <ul>
                        <li>
                            <NavLink to={"/adminPortal/"} className={({isActive})=>(isActive?'active':' ')}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/adminPortal/books"} className={({isActive})=>(isActive?'active':' ')}>Books</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/adminPortal/addbooks"} className={({isActive})=>(isActive?'active':' ')}>Add Books</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/adminPortal/users"} className={({isActive})=>(isActive?'active':' ')}>User</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/adminPortal/addusers"} className={({isActive})=>(isActive?'active':' ')}>Add User</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/adminPortal/contact"} className={({isActive})=>(isActive?'active':' ')}>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} className={({isActive})=>(isActive?'active':' ')}>Log-Out</NavLink>
                        </li>
                    </ul>
                    :
                    <ul>
                        <li>
                            <NavLink to={"/userportal/"} className={({isActive})=>(isActive?'active':' ')}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/userportal/books"} className={({isActive})=>(isActive?'active':' ')}>Books</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/userportal/users"} className={({isActive})=>(isActive?'active':' ')}>Users</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/userportal/contact"} className={({isActive})=>(isActive?'active':' ')}>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/userportal/cart"} className={({isActive})=>(isActive?'active':' ')}>Cart</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} className={({isActive})=>(isActive?'active':' ')}>Log-Out</NavLink>
                        </li>
                    </ul>
                }
            </div>
        </div>
    </>
  )
}

export default Navbar;