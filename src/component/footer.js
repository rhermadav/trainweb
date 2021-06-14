import React from 'react'
import './top.css';

const Footer = () => {
    return (
        
      <footer>
            <div className="row">
                       <div className="col span-1-of-2">
                           <ul className="footer-nav">
                               <li><a href="#">About us</a></li>
                               <li><a href="#">Blog</a></li>
                               <li><a href="#">Press</a></li>
                               <li><a href="#">iOS App </a></li>
                               <li><a href="#">Android App </a></li>
                               
                           </ul>
                       </div>
                      <div className="col span-1-of-2">
                               <ul className="social-links">
                                   <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                                   <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                                   <li><a href="#"><i className="ion-social-googleplus"></i></a></li>
                                   <li><a href="#"><i className="ion-social-instagram"></i></a></li>
                               </ul>
                      </div>
                
            </div>
            <div className="row">
                <p>
                copyright &copy;2019 by webdavy.All right reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;