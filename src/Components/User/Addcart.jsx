import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../assets/Style/addcart.css';
const Addcart = () => {
    let [cart,setCart] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:4000/cartsitems")
        .then(resp => resp.json())
        .then((elem) => {
            setCart(elem)
        })
    })

    let handleDelete = (id) => {
        let bool = window.confirm("Are you sure to delete");
        if(bool){
            fetch(`http://localhost:4000/cartsitems/${id}`,{method:"DELETE"})
            alert("deleted");
        }
        else{
            alert("not deleted");
        }
    }

    let navigate = useNavigate();
    let handleview = (id) =>{
        navigate(`/userportal/readBook/${id}`);
    }

  return (
    <>
        <h1>Cart Items</h1>
        <div className="add-table">
            <table border={1}>
                <thead>
                    <tr>
                        <th>SlNo</th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>View</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        cart.map((elem,index) => {
                            let {id,title,thumbnailUrl} = elem;
                            return (
                                <tr key={id}>
                                    <th>{index+1}</th>
                                    <th>{title}</th>
                                    <th><img src={thumbnailUrl} alt="" width="100px" height="100px"/></th>
                                    <th><button onClick={() => handleview(id)}>View</button></th>
                                    <th><button onClick={() => handleDelete(id)}>Delete</button></th>
                                </tr>
                            )   
                        })
                    }
                </tbody>
            </table>
        </div>

    </>
  )
}

export default Addcart
