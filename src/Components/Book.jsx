import React from 'react'
import {useEffect,useState} from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import '../assets/Style/book.css';
import video from '../assets/Style/854417-uhd_3840_2160_25fps.mp4';
import gif from '../assets/Style/854417-uhd_3840_2160_25fps.gif';

const Book = () => {

    let [data,setData]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:4000/books")
        .then((res)=>
            res.json()
        )
        .then((e)=>{
            setData(e);
        })
    },[data]);

    let navigate = useNavigate();
    let loc = useLocation();
    let path = loc.pathname;
    let bool = path.startsWith('/adminPortal/');
    let readBook = (id) => {
        bool?navigate(`/adminPortal/readBook/${id}`):navigate(`/userportal/readBook/${id}`)
    }


    let deleteBook = (id,title) => {
        let bool = window.confirm(`Are you sure to delete ${title} book`);
        if(bool){
            fetch(`http://localhost:4000/books/${id}`,{method:"DELETE"})
            alert(`${title} book is deleted`);
        }
        else{
            alert(`${title} book is not deleted`);
        }
    }

    // let deleteBook = (id) => {
    //     setData(data.filter((ele)=>{
    //         return ele.id !== id;
    //     }))
    // };

  return (
    <>
        <div className="play">
            <video src={video} autoPlay loop muted playbackRate={0.3} />
            {/* <img src={gif} alt="" /> */}
            <div className="book">
            {
                data.map((ele)=>{
                    let {id,thumbnailUrl,title,isbn,pageCount,publishedDate,status,authors,categories}=ele;
                    console.log(ele)
                    return(
                        <>
                            <div className="container2">
                                <div className="con">
                                    <div className="image-box">
                                        <div className='image'>
                                            <img src={thumbnailUrl} alt="" />
                                            <h3>{title}</h3>
                                        </div>
                                        <div className="table-box">
                                            <table border={1}>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>{id}</th>
                                                </tr>
                                                <tr>
                                                    <th>Title</th>
                                                    <th>{title}</th>
                                                </tr>
                                                <tr>
                                                    <th>Isbn</th>
                                                    <th>{isbn}</th>
                                                </tr>
                                                <tr>
                                                    <th>Author</th>
                                                    <th>{authors}</th>
                                                </tr>
                                                <tr>
                                                    <th>Categories</th>
                                                    <th>{categories}</th>
                                                </tr>
                                                <tr>
                                                    <th>Status</th>
                                                    <th>{status}</th>
                                                </tr>
                                                <tr>
                                                    <th>PageCount</th>
                                                    <th>{pageCount}</th>
                                                </tr>
                                                {/* <tr>
                                                    <th>Published Date</th>
                                                    <td>{e.publishedDate.$date}</td>
                                                </tr> */}
                                            </table>
                                            <div className="btn">
                                                <button className='rb' onClick={()=>readBook(id)}>Read Book</button>
                                                {
                                                    bool &&
                                                    <button className='db' onClick={()=>deleteBook(id,title)}>Delete Book</button>
                                                }
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
            </div>
        </div>
    </>
  )
}

export default Book;
