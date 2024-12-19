import React,{useEffect,useState} from 'react'
import { useParams,useNavigate, useLocation } from 'react-router-dom';
import '../assets/Style/readBook.css';

const ReadBook = () => {
    let params = useParams();
    let bookId = params.id;

    let [bool,setBool] = useState(true);

    let handleClick = () => {
        setBool(!bool);
    }

    let [book,setBook]  = useState({});

    useEffect(() => {
        let fetchApi = async () =>{
            let bookData = await fetch(`http://localhost:4000/books/${bookId}`);
            let d = await bookData.json();
            setBook(d);
        }
        fetchApi();
    },[book])


    let navigate = useNavigate();

    // useEffect(() => {
    //     if(!book){
    //         navigate('/adminportal/books');
    //     }
    // },[book]);

    // let navigateToEdit = () => {
    //     navigate(`/adminportal/books`);
    // }

    let loc = useLocation();
    let path = loc.pathname;
    let bol = path.startsWith('/adminPortal/');

    let navigateToEdit = () => {
        if(bol){
            navigate(`/adminPortal/books`);
        }else{
            navigate(`/userportal/books`);
        }
    }

    let addtocart = () => {
        let bool = window.confirm(`Are you sure to add ${book.title} book to cart`);
        if(bool){
            fetch('http://localhost:4000/cartsitems',
                {
                    method:"POST",
                    headers:{'Content-type':'application/json'},
                    body:JSON.stringify(book)
                }
            )
            alert(`${book.title} book is added to cart`);
            
        }
        else{
            alert(`${book.title} book is not added to cart`);
        }
    }

    let {id,title,isbn,pageCount,status,authors,categories,thumbnailUrl,shortDescription,longDescription} = book;
  return (
    <div className='readBook'>
        <div className="Book">
            <img src={thumbnailUrl} alt="" />
            <h3>{title}</h3>
        </div>
        <div className="book-box">
            <h4>{shortDescription}</h4>
            <button onClick={handleClick}>{bool?"Show More":"Show Less"}</button>
            {
                !bool ? <p>{longDescription}</p> : null
            }

            {/* <button onClick={() => navigate('/adminportal/books')}>Back</button> */}
            <button onClick={navigateToEdit}>Back</button>
            <button onClick={addtocart}>Add To Cart</button>
        </div>
    </div>
  )
}

export default ReadBook
