import { useRef,useState,useEffect } from 'react';
import axios from 'axios';
import React from 'react'
import '../../assets/Style/addbook.css';

const Addbook = () => {
  let formData = useRef();

  let [book,setBook] = useState({});
  useEffect(() => {
    axios.get('http://localhost:4000/books' )
    .then((res) => {
      setBook(res.data);
    })
  },[book]);
  console.log(book);
  
  let idValue = () =>{
    const id = Number(book[book.length-1].id) + 1;
    return id;
  }

  let handleSubmit = (e) =>{
    e.preventDefault();
    let newId = idValue();

    let newBook = {
      id : String(newId),
      title : formData.current[0].value,
      isbn : formData.current[1].value,
      pageCount : formData.current[2].value,
      thumbnailUrl : formData.current[3].value,
      shortDescription : formData.current[4].value,
      longDescription : formData.current[5].value,
      status : formData.current[6].value,
      authors : [formData.current[7].value],
      categories : [formData.current[8].value],
    }
    console.log(newBook);
    
    fetch('http://localhost:4000/books' , {
      method:'POST',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify(newBook)
    });

  }

  return (
    <>
      <div className="form-body">
        <div className="forms-page">
            <div className="form-box">
                <h1>Add Book</h1>
                <form ref={formData} action="">
                    <input type="text" placeholder='Enter Book Name'/>
                    <input type="text" placeholder='Enter Author Name'/>
                    <input type="number" placeholder='Enter Page Count'/>
                    <input type="number" placeholder='Enter ISBN'/>
                    <input type="text" placeholder='Enter Short Description'/>
                    <input type="text" placeholder='Enter Long Description'/>
                    <input type="text" placeholder='Enter Category'/>
                    <input type="text" placeholder='Enter Image Url'/>
                    <input type="text" placeholder='Enter Status'/>
                </form>
                <button onClick={handleSubmit} className='addbook'>Add Book</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Addbook
