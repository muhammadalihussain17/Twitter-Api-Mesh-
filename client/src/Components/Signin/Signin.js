import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import {auth,loginWithEmailAndPassword} from '../../Firebase/firebase';
import './Signin.css';

function Signin() {

  const [email,setEmail] = useState('');
  const [password,setPassword] =useState('');
  const [{user}, dispatch] = useStateValue();
  const navigate = useNavigate();


  const signIn = e => {
    e.preventDefault();
    loginWithEmailAndPassword(email,password)
    if(user)
    {
      navigate('/');
    }

  }    
  



  const [myStyle,setMyStyle] = useState({
    color: 'White',
    backgroundColor: '#1A1616'
  })

  const toggle = () => {
    if(myStyle. backgroundColor == '#1A1616'){
      setMyStyle({
        color: 'White',
        backgroundColor: 'White',
      })
    }
    else{
      setMyStyle({
        color: 'White',
        backgroundColor: '#1A1616'
      })
    }
  }

  return (
    <div className='container-fluid login' style={myStyle}>
     <div className='login__container'>
        <form>
          <input type='text' className='form-control' placeholder='Enter Email Address' required value={email} onChange={e => setEmail(e.target.value)}/>
          <input type='password' className='form-control' placeholder='Enter Password' required  value={password} onChange={e => setPassword(e.target.value)}/>
          <button className='login__signin' type='submit' onClick={signIn}>Sign in</button>
        </form>
        <p>
           By Signing-in you Agree to the Twitter Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <Link to='/signup'>
        <button className='login__register'>Create your Twitter Account</button>
        </Link>
      </div>
      <div className='header__nav__toogle signtog'>
            <div className="form-check form-switch switch">
            <input className="form-check-input  form-switch1" onClick={toggle} type="checkbox" id="flexSwitchCheckDefault"/>
            </div>
            </div>
    </div>
  )
}

export default Signin
