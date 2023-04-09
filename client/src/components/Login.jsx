import React,{Fragment, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import axios from 'axios'
import Signup from './Signup'


const Login=()=> {
  const navigate=useNavigate()
  const[enterdEmail,setEnteredEmail]=useState('')
  const[enetrdPassword,setEnteredPassword]=useState('')

  const emailChangeHandler=(event)=>{
    setEnteredEmail(event.target.value)
  }

  const passwordChangeHandler=(event)=>{
    setEnteredPassword(event.target.value)
  }
  
  const loginUserHandler= async (event)=>{
    
      try{
        event.preventDefault()
    console.log(enterdEmail,enetrdPassword)
        const res=await axios.post('http://localhost:5000/login',
        JSON.stringify({ email:enterdEmail, password:enetrdPassword }),
        {
            headers: { 'Content-Type': 'application/json' }
        })
        console.log(res)
        if(res){
          navigate('/')
        }
      }catch(error){
        console.log(error)
      }
      setEnteredEmail('')
      setEnteredPassword('')
  }

  const signupHandler=()=>{
    navigate('/Signup')
  }

  return (
    <Fragment>
    <div className="container">
    <div className="screen">
      <div className="screen__content">
        <form className="login" onClick={loginUserHandler}>
          <div className="login__field">
            <i className="login__icon fas fa-user"></i>
            <input type="text" className="login__input" placeholder="User name / Email" value={enterdEmail} onChange={emailChangeHandler}></input>
          </div>
          <div className="login__field">
            <i className="login__icon fas fa-lock"></i>
            <input type="password" className="login__input" placeholder="Password" value={enetrdPassword} onChange={passwordChangeHandler}/>
          </div>
          <button className="button login__submit" type='submit'  >
            <span className="button__text">Log In Now</span>
            <i className="button__icon fas fa-chevron-right"></i>
          </button>		
          <p></p>
         
          
        </form>
        <button className="button login__submit" type='submit' onClick={signupHandler} >
            <span className="button__text">Don't have accout signup</span>
            <i className="button__icon fas fa-chevron-right"></i>
          </button>
        
      </div>
      <div className="screen__background">
        <span className="screen__background__shape screen__background__shape4"></span>
        <span className="screen__background__shape screen__background__shape3"></span>		
        <span className="screen__background__shape screen__background__shape2"></span>
        <span className="screen__background__shape screen__background__shape1"></span>
      </div>		
    </div>
  </div>
  </Fragment>
  );
}

export default Login;