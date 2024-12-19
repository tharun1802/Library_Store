import React from 'react';
import Navbar from '../Navbar';
import ReadBook from '../ReadBook';
import Addbook from './Addbook';
import {Route,Routes} from 'react-router-dom';
import Users from '../User';
import Book from '../Book';
import Home from '../Home';
import Adduser from './Adduser';
import Contact from '../Contact';
const AdminPortal = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<Book/>} path="/books" />
        <Route element={<ReadBook />} path='/readBook/:id' />
        <Route element={<Addbook/>} path="/addbooks" />
        <Route element={<Users/>} path="/users" />
        <Route element={<Adduser/>} path="/addusers" />
        <Route element={<Contact/>} path="/contact" />
      </Routes>
    </div>
  )
}

export default AdminPortal
