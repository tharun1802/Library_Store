import React, { useEffect, useState } from 'react'
import '../assets/Style/users.css';
import { useLocation } from 'react-router-dom';
const Users = () => {
    let [userdata , setUserData] = useState([]);
    let loc = useLocation();
    let path = loc.pathname;
    console.log(path);
    let bool = path.startsWith('/adminPortal/');
    console.log(bool);

    useEffect(()=>{
        fetch("http://localhost:4000/users")
        .then(resp => resp.json())
        .then((elem) =>{
            setUserData(elem)
        })
    } ,[userdata])

    let handleDelete =(id,fname) =>{
        let bool = window.confirm(`Are you sure to delete ${fname} user`);
        if(bool){
            fetch(`http://localhost:4000/users/${id}`,{method:"DELETE"});
            alert(`${fname} user is deleted`); 
        }
        else{
            alert(`${fname} user is not deleted`);
        }
    }

     
    return (
        <>
            <div className="users">
                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>FNAME</th>
                            <th>LNAME</th>
                            <th>PLACE</th>
                            {bool && <th>DOB</th>}
                            <th>PHONE NUMBER</th>
                            <th>EMAIL</th>
                            {bool && <th>PASSWORD</th>}
                            {bool && <th>DELETE</th>}

                        </tr>
                    </thead>
                    <tbody>
                        {
                            userdata.map((elem,index) => {
                                let {id , fname , lname , place , dob , email , password,phonenumber} = elem

                                return(
                                    <>
                                        <tr key={id}>
                                            <td>{index+1}</td>
                                            <td>{fname}</td>
                                            <td>{lname}</td>
                                            <td>{place}</td>
                                            {bool && <td>{dob}</td>}
                                            <td>{phonenumber}</td>
                                            <td>{email}</td>
                                            {bool && <td>{password}</td>}
                                            {bool && <td><button onClick={() => handleDelete(id,fname)}>Delete</button></td>}
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
  )
}

export default Users