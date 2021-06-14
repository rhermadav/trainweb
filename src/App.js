import React from "react";
import { Router,Route, Switch } from "react-router-dom";
import history from './history';
import ShowPost from "./component/showpost";

import Editpost from "./component/editPost";
import Home from './component/home';
import Signin from './component/signin';
import Register2 from './component/register2';
import Addtrain from './component/addtrain';
import Contact from './component/contact';
import About from './component/about';

import './index.css';



function App(props) {
  return (
    <div>
          
          <Router history={history}>  
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/showpost/:id' exact component={ShowPost}/>
                <Route path='/editpost/:id' exact component={Editpost}/>
                <Route path='/signin' exact component={Signin} />
                <Route path='/register' exact component={Register2} />
                <Route path='/addtrain' exact component={Addtrain} />
                <Route path='/contact' exact component={Contact} />
                <Route path='/about' exact component={About} />
            </Switch>
          </Router>
    </div>   
  );
}

export default App;
