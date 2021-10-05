import React from 'react';

import { 
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarRoute
} from './SidebarElements';
const Sidebar = ({isOpen, toggle}) => {
	return (
      <SidebarContainer isOpen = {isOpen} onClick={toggle}>

      <Icon onClick={toggle}>
      <CloseIcon />
      </Icon> 
      <SidebarWrapper>
      <SidebarMenu>
     
      <SidebarLink to="/Login"  onClick={toggle}>
      
      Features
      </SidebarLink>
      <SidebarLink to="Pricing" onClick={toggle}>

      Pricing
      </SidebarLink>
        <SidebarLink to="Courses" onClick={toggle}>

      Courses
      </SidebarLink>
        <SidebarLink to="About Us" onClick={toggle}>

      About Us
      </SidebarLink>
      
      </SidebarMenu>
      <SideBtnWrap>
       <SidebarRoute to='/Login'>Login</SidebarRoute>
      </SideBtnWrap>
      <SideBtnWrap>
       <SidebarRoute to='/signin'>Sign In</SidebarRoute>
      </SideBtnWrap>
      </SidebarWrapper>
      </SidebarContainer>
		);
};

export default Sidebar;