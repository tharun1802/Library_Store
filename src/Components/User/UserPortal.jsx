import React from 'react'
import Navbar from '../Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from '../Home'
import Book from '../Book'
import Users from '../User'
import Contact from '../Contact'
import ReadBook from '../ReadBook'
import Addcart from './Addcart';

const UserPortal = () => {
  return (
    <>
        <div>
            <Navbar/>
            <Routes>
                <Route element={<Home/>} path="/" />
                <Route element={<Book/>} path="/books" />
                <Route element={<Users/>} path='/users'/>
                <Route element={<Contact/>} path="/contact" />
                <Route element={<ReadBook />} path='/readBook/:id' />
                <Route element={<Addcart/>} path='/cart'/>
            </Routes>
        </div>
    </>
  );
}

export default UserPortal
