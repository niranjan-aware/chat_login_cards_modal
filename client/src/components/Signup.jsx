import React, { Fragment ,useState,useHistory} from "react";
import { useNavigate } from "react-router-dom";
import './Signup'
import axios from 'axios'
import { createHashHistory } from 'history'

const Signup = () => {
    // const history=useHistory
    const[enterdEmail,setEnteredEmail]=useState('')
  const[enetrdPassword,setEnteredPassword]=useState('')
  const[enetrdConfirmPassword,setEnteredConfirmPassword]=useState('')
  const[user,setUser]=useState({email:"",password:"",confirmpassword:""})

  const emailChangeHandler=(event)=>{
    // console.log(event.target.value)
    setEnteredEmail(event.target.value)
  }

  const passwordChangeHandler=(event)=>{
    // console.log(event.target.value)
    setEnteredPassword(event.target.value)
  }

  const confirmPasswordChangeHandler=(event)=>{
    // console.log(event.target.value)
    setEnteredConfirmPassword(event.target.value)
  }
//   console.log(enterdEmail,enetrdPassword,enetrdConfirmPassword)
  const registerUserHandler=async (event)=>{
    setUser(enterdEmail,enetrdPassword,enetrdConfirmPassword)
    event.preventDefault()
    const{email,password,confirmpassword}=user
    
    try{
        const res=await axios.post('http://localhost:5000/signup',
        JSON.stringify({ email:enterdEmail, password:enetrdPassword,confirmpassword:enetrdConfirmPassword}),
        {
            headers: { 'Content-Type': 'application/json' }
        })
        // console.log(res) 
        // if(res){
        //   history.push('localhost:5000/signup')
        // }
      }catch(error){
        console.log(error)
      }
      setEnteredEmail('')
      setEnteredPassword('')
  }

    return (
        <Fragment>
             <div className="container">
    <div className="screen">
      <div className="screen__content">
        <form className="login" onSubmit={registerUserHandler}>
          <div className="login__field">
            <i className="login__icon fas fa-user"></i>
            <input type="text" className="login__input" placeholder="User name / Email" input="text" value={enterdEmail} onChange={emailChangeHandler} ></input>
          </div>
          <div className="login__field">
            <i className="login__icon fas fa-lock"></i>
            <input type="password" className="login__input" placeholder="Password" value={enetrdPassword} onChange={passwordChangeHandler}/>
          </div>
          <div className="login__field">
            <i className="login__icon fas fa-lock"></i>
            <input type="password" className="login__input" placeholder="confirm-Password" value={enetrdConfirmPassword} onChange={confirmPasswordChangeHandler} />
          </div>
          <button className="button login__submit" type='submit'  >
            <span className="button__text">Register</span>
            <i className="button__icon fas fa-chevron-right"></i>
          </button>		
          <p></p>
          
        </form>
        
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
    )
}

export default Signup