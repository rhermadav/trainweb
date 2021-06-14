import React, { useState,useEffect } from "react";
import "./register.css"
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Actions/user";

const  Register2 = (props) => {
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName,setFirstname] = useState();
  const [lastName, setLastname] = useState();
  const [userName, setUsername] = useState();
  
  const dispatch = useDispatch();
  
  const userRegister = useSelector( state => state.userRegister);
  const {loading ,userInfo,error } = userRegister;
 
  useEffect(() => {
    if (userInfo) {
      props.history.push("/signin");
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submit = async (e) => {
    e.preventDefault();
    dispatch(registerUser(firstName,lastName,userName,email,password));
  };
  return(
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={submit}>
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." onChange={(e) => setUsername(e.target.value)} />
        <label>Firstname</label>
        <input className="registerInput" type="text" placeholder="Enter your firstname..."  onChange={(e) => setFirstname(e.target.value)} />
        <label>Lastname</label>
        <input className="registerInput" type="text" placeholder="Enter your lastname..." onChange={(e) => setLastname(e.target.value)} />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." onChange={(e) => setPassword(e.target.value)}/>
        <button className="registerButton">Register</button>
      </form>
      <Link to='/signin'><button className="registerLoginButton">Login</button> </Link>
        
    </div>
  );
}

export default Register2;
