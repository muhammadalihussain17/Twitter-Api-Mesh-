import React, {Fragment, useEffect} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import './App.css';
import Footer from './Components/Footer/Footer';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import { auth } from './Firebase/firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
   auth.onAuthStateChanged(userAuth => {
     if(userAuth){
       dispatch({
          type: "SET_USER",
          user:  userAuth
       })
     }
     else
     {
       dispatch({
        type: "SET_USER",
        user: null
       })
     }
   })
  },[])

  return (
    <BrowserRouter className="App">
    <Routes>
    <Route path='/' element={
          <Fragment>
           <Header/>
           <Home/>
           <Footer/>
          </Fragment> } />

    <Route path='/signin' element={
          <Fragment>
           <Header hideSigndiv/>
           <Signin/>
           <Footer/>
          </Fragment> } />
    
    <Route path='/signup' element={
          <Fragment>
           <Header hideSigndiv/>
           <Register/>
           <Footer/>
          </Fragment> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
