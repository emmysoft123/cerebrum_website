import React from 'react';
import {FaBars}from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll'
import { 
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn,
	NavBtnLink,
	
} from './NavbarElement';

const Navbar = ({toggle}) => {
  

 const toggleHome =() =>{
    scroll.scrollToTop();
 };
	return (
     <>
     <Nav>
     <NavbarContainer>
     <NavLogo to ='/' onClick={toggleHome}><img src ="https://res.cloudinary.com/cmp84378/image/upload/v1611468513/Logo_mbswgk.png"className="logo" alt="LOGO" /></NavLogo>
     <MobileIcon onClick={toggle}>
     <FaBars />
     </MobileIcon >
    
     <NavMenu>
     <NavItem>
     <NavLinks 
     to ='/Dashboard'>
     Dashboard
     </NavLinks>

     </NavItem>
      <NavItem>
     <NavLinks
      to='Pricing'>
     Pricing
     </NavLinks>

     </NavItem>

      <NavItem>
     <NavLinks
      to='Courses'>
     Courses
     </NavLinks>

     </NavItem>

      <NavItem>
     <NavLinks to=''>
     About Us
     </NavLinks>
     

     </NavItem>

     
      </NavMenu>
      <NavBtn>
     <NavBtnLink to='/Login'>Login</NavBtnLink>

     </NavBtn>
       <NavBtn>
     <NavBtnLink to='/signin'>Sign In</NavBtnLink>

     </NavBtn>
     
         </NavbarContainer>
     </Nav>
     </>
		);
};

export default Navbar;