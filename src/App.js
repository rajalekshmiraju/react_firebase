import React , {useState} from 'react';



import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
//react-router
import {BrowserRouter as Router , Switch,Route,} from "react-router-dom" 
 //toast
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/react-toastify.esm'
//firebase
import firebase  from "firebase/app"
import "firebase/auth"
//components
import Home from "./Pages/Home"
import Signin from "./Pages/Signin"
import Signup from "./Pages/Signup"
import pageNotFound from "./Pages/pageNotFound"
import { UserContext } from './Context/UserContext';
import Footer from './layout/Footer';
import Header from './layout/Header';
import firebaseConfig from "./config/firebaseConfig"; 
//initr firebase
 (firebaseConfig)

const App =()=> {

const [user , setUser] =     useState(null);

  return (
   <Router>
     <ToastContainer/>
     <UserContext.Provider value={{user, setUser}}>
     <Header/>
       <Switch>
    
<Route exact path="/" component={Home}/>
<Route exact path="/Signup" component={Signup}/>
<Route exact path="/Signin" component={Signin}/>
<Route exact path="*" component={pageNotFound}/>
       </Switch>
<Footer/>
     </UserContext.Provider>
   </Router>
  );
}

export default App;
