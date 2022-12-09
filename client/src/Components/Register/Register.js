import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,useNavigate} from 'react-router-dom';
import {auth,registerWithEmailAndPassword} from '../../Firebase/firebase'
import { useStateValue } from '../../StateProvider';
import './Register.css';

function Register() {

    const [{user}, dispatch] = useStateValue();
    const [email,setEmail] = useState('');
    const [password,setPassword] =useState('');
    const navigate = useNavigate();

    
  const register = e => {
    e.preventDefault();
    registerWithEmailAndPassword(email,password);

      navigate('/signin');
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
          <input type='text' className='form-control' required placeholder='Enter Email Address' value={email} onChange={e => setEmail(e.target.value)}/>
          <input type='password' className='form-control' required placeholder='Enter Password' value={password} onChange={e => setPassword(e.target.value)}/>
          <input type='password' className='form-control' required placeholder='Confirm Password'/>

        </form>
        <p>
           By Signing-up you Agree to the Twitter Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <Link to='/signin'>
        <button className='login__register' onClick={register}>Sign Up</button>
        </Link>
      </div>
      <div className='header__nav__toogle signtog signuptog'>
            <div class="form-check form-switch switch">
            <input class="form-check-input  form-switch1" onClick={toggle} type="checkbox" id="flexSwitchCheckDefault"/>
            </div>
            </div>
    </div>
  )
}

export default Register
