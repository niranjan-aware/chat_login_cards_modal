import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const Navigate=useNavigate()
  const loginHandler=()=>{
    Navigate('/Login')
  }

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
            <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Features</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
            </MDBNavbarItem>
            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
      <MDBBtn onClick={loginHandler}>Login</MDBBtn> 
    </MDBNavbar>
  );
}