import React from 'react'
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    let formData = React.useRef();
    let navigate = useNavigate();

    let handleSubmit = (e) =>{
        e.preventDefault();
        
        let emailField = formData.current[0];
        let pswdField = formData.current[1];

        let credentials = {
            email : "admin@gmail.com",
            password : "admin123"
        }

        let {email,password} = credentials;
        let err = `border:solid 1px red`;

        if (emailField.value === email && pswdField.value === password){
            emailField.style.cssText=`border:solid 1px black`;
            pswdField.style.cssText=`border:solid 1px black`
            navigate("/adminPortal");
        }
        else{
            emailField.style.cssText = err;
            pswdField.style.cssText = err;
        }
    }

  return (
    <>
        <form action="" onSubmit={handleSubmit} ref={formData}>
            <input type="email" placeholder='Enter Email Address' />
            <input type="password" placeholder='Enter Password' />
            <button id='Login-btn'>Admin Login</button>
        </form>
    </>
  )
}

export default AdminLogin
