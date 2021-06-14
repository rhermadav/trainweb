import React from 'react';
import Topbar from '../component/topbar';
import Footer from '../component/footer';
import './top.css';

const  Home = () => {
    return(
      <div>
        <Topbar />
        <section className="section-plans js--section-plans" id="plans">
                    <div className="row">
                          <h2>Start eating healthy today</h2>
                    </div>
                   <div className="row">
                     <div className="col span-1-of-3 js--wp-4"> 
                         <div className="plain-box"> 
                                <div>
                                       <h3> Premium </h3>
                                    <p className="plan-price">399$<span>/month</span></p>
                                     <p className="plan-price-meal">That’s only 13.30$ per meal</p>
                                 </div>   
                           <div>
                                       <ul>
                                           <li><i className="ion-ios-checkmark-empty icon-small"></i>1 meal every day</li> 
                                            <li><i className="ion-ios-checkmark-empty icon-small"></i>Order 24/7</li> 
                                            <li><i className="ion-ios-checkmark-empty icon-small"></i>Access to newest creations</li> 
                                            <li><i className="ion-ios-checkmark-empty icon-small"></i>Free delivery</li> 
                                       </ul>
                                 </div>
                                <div>
                                 <a className="btn btn-full" href="#">sign-up now </a>   
                                 </div>
                             
                              </div>    
                         </div><div className="col span-1-of-3"> 
                         <div className="plain-box"> 
                                <div>
                                       <h3> Pro </h3>
                                    <p className="plan-price">149$<span>/month</span></p>
                                     <p className="plan-price-meal">That’s only 14.90$  per meal</p>
                                 </div>   
                           <div>
                                       <ul>
                                           <li><i className="ion-ios-checkmark-empty icon-small"></i>1 meal 10 days/month</li> 
                                            <li><i className="ion-ios-checkmark-empty icon-small"></i>Order 24/7</li> 
                                            <li><i className="ion-ios-checkmark-empty icon-small"></i>Access to newest creations</li> 
                                            <li><i className="ion-ios-checkmark-empty icon-small"></i>Free delivery</li> 
                                       </ul>
                                 </div>
                                <div>
                                 <a className="btn btn-ghost" href="#">sign-up now </a>   
                                 </div>
                             
                              </div>    
                         </div><div className="col span-1-of-3"> 
                         <div className="plain-box"> 
                                <div>
                                       <h3> starter </h3>
                                    <p className="plan-price">19$<span>/meal</span></p>
                                     <p className="plan-price-meal">&nbsp;</p>
                                 </div>   
                           <div>
                                       <ul>
                                           <li><i className="ion-ios-checkmark-empty icon-small"></i>1 meal every day</li> 
                                            <li><i className="ion-ios-checkmark-empty icon-small"></i>Order from 8 am to 12 pm</li> 
                                            <li><i className="ion-ios-close-empty icon-small"></i></li> 
                                            <li><i className="ion-ios-checkmark-empty icon-small"></i>Free delivery</li> 
                                       </ul>
                                 </div>
                                <div>
                                 <a className="btn btn-ghost" href="#">sign-up now </a>   
                                 </div>
                             
                              </div>    
                         </div>
                   </div>
        </section>
         <Footer />
      </div>
    );
}

export default Home;
