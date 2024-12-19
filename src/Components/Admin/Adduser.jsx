import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../../assets/Style/adduser.css';

const AddUser = () => {
  let formData = useRef();

  const [users, setUser] = useState([]);
  // const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:4000/users')
      .then((res) => {
        setUser(res.data);
      });
  }, [users]);

//   const idValue = () => {
//     if (users.length > 0) {
//       const id = Number(users[users.length - 1].id) + 1;
//       return id;
//     }
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newId = idValue();

    const newUser = {
    //   id: String(newId),
      fname: formData.current[0].value,
      lname: formData.current[1].value,
      phonenumber: formData.current[2].value,
      email: formData.current[3].value,
      password: formData.current[4].value,
      dob: formData.current[5].value,
      place : formData.current[6].value,
    };

    console.log(newUser);

    fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    })
    .then(()=>{
        alert("User Added Successfully");
    });
  };

  return (
    <div className='adduser'>
      <div className="form-user">
        <h1>Add User</h1>
        <form ref={formData}>
          <input type="text" placeholder="Enter First Name" />
          <input type="text" placeholder="Enter Last Name" />
          <input type="tel" placeholder="Enter Contact Number" pattern='{6-9}{1} {0-9}{8}'/>
          <input type="email" placeholder="Enter Email Address" />
          <input type="password" placeholder="Enter Password"/>
          <input type="date" placeholder="Enter Date of Birth" />
          <input type="text" placeholder="Enter Place" />
        </form>
        <button onClick={handleSubmit} className="addbook">Add User</button>
      </div>
      {/* {isPopupVisible && <div className="popup">User Added Successfully</div>} setPopupVisible(true); // Show the popup
      setTimeout(() => setPopupVisible(false), 2000) */}
    </div>
  );
};

export default AddUser;
