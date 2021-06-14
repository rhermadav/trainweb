import React from 'react';
import {  useSelector } from "react-redux";
import './top.css';
import { Link} from "react-router-dom";

const Topbar = () => {
     const userSignin = useSelector(state => state.userSignin);
     const {loading, userInfo, error} = userSignin;
   
     return(
          <div className='top'>
             <div className="topLeft">
                 <i className="topIcon fab fa-facebook-square"></i>
                 <i className="topIcon fab fa-instagram-square"></i>
                 <i className="topIcon fab fa-pinterest-square"></i>
                 <i className="topIcon fab fa-twitter-square"></i>
             </div> 
             <div className="topCenter">
                <ul className="topList">
                  <li className="topListItem">
                 <Link className="link" to="/">
                  HOME
                </Link>
                  </li>
                  <Link to="/about"><li className="topListItem">ABOUT</li></Link> 
                  <Link  to="/contact"><li className="topListItem">CONTACT</li></Link> 
                </ul>
      </div>
     <div className="topRight">
          <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
           <Link to="/signin"> {userInfo ? '' : 'Login'}</Link>
      </div>
</div>
      
     );
}

export default Topbar;