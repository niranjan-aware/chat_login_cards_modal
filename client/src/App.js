import React, { Fragment } from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import { NavLink,Routes, Route } from "react-router-dom"
import Login from './components/Login';
import SelectProfession from './components/SelectProfession';
import Navbar from './components/Navbar';
import { ReactDOM } from 'react';
import Signup from './components/Signup';
import AsCustomer from './components/AsCustomer';
import AsWorker from './components/AsWorker'
import UserProfileEditForm from './components/UserProfileEditForm';
function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<SelectProfession></SelectProfession>}></Route>
      <Route path='/AsCustomer' element={<AsCustomer></AsCustomer>}></Route>
      <Route path='/AsWorker' element={<AsWorker></AsWorker>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/Signup' element={<Signup></Signup>}></Route> */}
      <Route path='/UserProfileEditForm' element={<UserProfileEditForm></UserProfileEditForm>}></Route>
    </Routes>
  );
}

export default App;
