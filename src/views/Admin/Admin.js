import React,{useState} from 'react'
import "../../assests/css/admin.css"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import bcrypt from 'bcryptjs'
function Admin() {
 const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)){
      return (true)
    }
      return (false)
    }

    const  handleSubmit=(event)=> {
      var email = document.getElementById('lemail').value;
      var password = document.getElementById('pass').value;
      if(ValidateEmail(email)){
        const data= {
            email:email,
            password:password
        }
        axios.post('http://localhost:9759/api/admin/login',data)
        .then((res)=>{
            console.log(res.data)
            if(res.data.status == "true"){
                console.log("h")
                window.localStorage.setItem('email',email);
                bcrypt.hash(password,12)
                .then((hasPass)=>{
                    console.log(hasPass)
                     window.localStorage.setItem('login',hasPass)
                     window.location.href="/hotel/#/admin-dashboard"
                })
            }else{
                console.log("yaah")
            }
        })
        .catch((err)=>{
            console.log(err)
        })
      }else{
          alert("Please Enter Valid Email")
      }

    event.preventDefault();

  }
    return (
        <div className="loginOuter">
        <div className="loginForm">
        <div className="loginHeading">SIGN IN</div>

        <div className="form-group1">
            <label>Email</label>
            <input type="email" id="lemail" className="form-control1" placeholder="Enter email" />
        </div>

        <div className="form-group1">
            <label>Password</label>
            <input type="password" id="pass"className="form-control1" placeholder="Enter password" />
        </div>

        <button className="loginBtn" onClick={handleSubmit}>Submit</button>

    </div>
    </div>
    )
}

export default Admin
