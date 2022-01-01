import React, {useState} from 'react'
import "./LoginPage.css"
import Button from '@mui/material/Button';
import Axios from "axios"
function LoginPage() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  // const googleLogin = () =>{
  //   window.open("http://localhost:4000/auth/google", "_self");
  // }

  const localLogin =() =>{
          
      Axios.post("http://localhost:4000/register", {
        email:email,
        name:name,
        password:password
      })
   
  };

 
    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: ""
      });
    
      function handleChange(event) {
        const { name, value } = event.target;
        
        setContact(prevValue => {
          if (name === "fName") {
            return {
              fName: value,
              lName: prevValue.lName,
              email: prevValue.email
            };
          }  else if (name === "email") {
            return {
              fName: prevValue.fName,
              lName: prevValue.lName,
              email: value
            };
          }
        });
      }
    
    return (
        <div className="container login">
        <h1>
          Welcome {contact.fName} {contact.lName}
        </h1>
        <p>{contact.email}</p>
        <form className="loginForm" >
          <input
            onChange={handleChange}
            onInput ={(event) => {
              setEmail(event.target.value);
            }}
            value={contact.fName}
            name="fName"
            placeholder="Name"
            autoComplete ="off"
          />
          
          <input
            onChange={handleChange}
            onInput ={(event) => {
              setName(event.target.value);
            }}
            value={contact.email}
            name="email"
            placeholder="Email"
            autoComplete ="off"
          />

          <input
              onChange ={(event) => {
                setPassword(event.target.value);
              }}
              type = "password"
              name= "password"
              placeholder= "sheeee! This one is Secret"
              autoComplete ="off"
          />   
          
          <Button variant="outlined" onClick={localLogin}>Login</Button>
          <h5>OR</h5>
          <Button variant="contained" onClick={googleLogin}>Login With Google</Button>
        </form>
      </div>
    )
}

export default LoginPage
