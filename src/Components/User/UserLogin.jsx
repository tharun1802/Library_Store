import React ,{useEffect,useState,useRef} from 'react'
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {

  let [user,setUser] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/users")
    .then(resp => resp.json())
    .then((elem) => {
      setUser(elem)
    })
  }, [user]);


  let email = user.map((elem) => elem.email);
  let password = user.map((elem) => elem.password);


  let emailInput = useRef();
  let passwordInput = useRef();

  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let emailField = emailInput.current.value;
    let passwordField = passwordInput.current.value;
    let err = `border:solid 1px red`;

    if(email.includes(emailField) && password.includes(passwordField)){
      navigate("/userportal");
    }
    else{
      emailInput.current.style.cssText = err;
      passwordInput.current.style.cssText = err;
    }
  }
  return (
    <>
        <form action="">
            <input type="email" placeholder='Enter Email Address' ref={emailInput} />
            <input type="password" placeholder='Enter Password' ref={passwordInput}/>
            <button id='Login-btn' onClick={handleSubmit}>User Login</button>
        </form>
    </>
  )
}

export default UserLogin
