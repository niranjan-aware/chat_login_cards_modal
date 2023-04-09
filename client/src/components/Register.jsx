import React, { useState } from 'react';

// import './Register.css'

const Register=()=> {
  const[firstName,setFirstName]=useState('')
  const firstNameHandler=(event)=>{
    setFirstName(event.target.value)
    console.log(event.target.value)
  }
  return (
    <h1>djohd</h1>
  );
}

export default Register;