import React, { useState, useEffect} from "react"; 
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {signinUser} from '../Actions/user';
import "./login.css";

const  Signin = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const userSignin = useSelector(state => state.userSignin);
  const {loading, userInfo, error} = userSignin;

  useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
    return () => {
      //
    };
  }, [userInfo]);
  
  const submit = async (e) => {
    e.preventDefault();
    dispatch(signinUser(email,password));
  };

    return(
      <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={submit}>
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..."
        onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." onChange={(e) => setPassword(e.target.value)}/>
        <button className="loginButton">Login</button>
      </form>
       <Link to='/Register'> <button className="loginRegisterButton">Register</button></Link>
    </div>
    );
}

export default Signin;
