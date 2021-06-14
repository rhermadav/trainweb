import React from 'react';
import Topbar from '../component/topbar';
import Footer from '../component/footer';
import './top.css';

const  Contact = () => {
    return(
      <div>
        <Topbar />
        <section className="section-form">
                   <div className="row" id="form">
                      <h2>We're happy to hear from you</h2>
                   </div>
            
                   <div className="row">
                       <form method="post" action="mailer.php" className="contact-form">
                         <div className="row">
                             <div className="col span-1-of-3"><label for="name">NAME</label></div> 
                              <div className="col span-2-of-3">
                                  <input type="text" placeholder="your name" name="name" id="name" required/> 
                             </div> 
                         </div> 
                           <div className="row">
                             <div className="col span-1-of-3"><label for="email">EMAIL</label></div> 
                              <div className="col span-2-of-3">
                                  <input type="email" placeholder="your email" name="email" id="email" required/> 
                             </div> 
                         </div> 
                           <div className="row">
                             <div className="col span-1-of-3"><label for="find-us">How did you find us?</label></div> 
                              <div className="col span-2-of-3">
                                  <select name="find-us" id="find-us">
                                  <option value="friends" selected>friends </option> 
                                <option value="search-engine">search-engine</option>
                                <option value="Advertisement">Advertisement</option>
                                <option value="others">other</option>
                                  </select>   
                             </div> 
                               </div> 
                           <div className="row">
                             <div className="col span-1-of-3"><label>NEWSLETTER</label></div> 
                              <div className="col span-2-of-3">
                                  <input type="checkbox" name="news" id="news" checked/>yes,please
                             </div> 
                           </div>
                           <div className="row">
                             <div className="col span-1-of-3"><label>Drop us a line</label></div> 
                              <div className="col span-2-of-3">
                                  <textarea placeholder="your message" name="message"> </textarea>
                             </div>
                           </div>
                            <div className="row">
                             <div className="col span-1-of-3"><label>&nbsp;</label></div> 
                              <div className="col span-2-of-3">
                                  <input className="sendit" type="submit" value="send it!" />
                             </div> 
                           </div>
                       </form> 
                   </div>
            
        </section> 
        <Footer />     
      </div>
    );
}

export default Contact;