import React from 'react';
import '../assets/Style/Landing.css';
import AdminLogin from './Admin/AdminLogin';
import UserLogin from './User/UserLogin';

const Landing = () => {

    let [bool,setBool] = React.useState(true);

    const handleClick = () => {
        setBool(!bool);
    }

  return (
    <>
        <div className="Landing">
            <div className="container">
                <div className="btn-box">
                    <button onClick={handleClick} className={bool ? "Admin-btn" : "User-btn"}>{bool ? "Admin" : "User"}</button>
                </div>
                <div className="text-box">
                    <h4>{bool?"Admin-Login":"User-Login"}</h4>
                </div>
                <div className="form-box">
                    {bool?<AdminLogin/>:<UserLogin/>}
                </div>
                <div className="forgetten">
                    <a href="">Forget-Password</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Landing
