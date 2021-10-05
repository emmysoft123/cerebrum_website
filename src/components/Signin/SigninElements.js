import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { Link as LinkR} from 'react-router-dom'


export const Start = styled(Link)`
`;

export const Icon = styled(LinkR)`
margin-left:2px;
text-decoration:none;
display:block;
padding:10px 22px;
margin-top:4rem;

@media screen and (max-width:480px){
	margin-left:16px;
	margin-top:5rem;
	
}
`;
export const Login = styled(LinkR)`

`;

export const NavBtnLink = styled(LinkR)`
border-radius:10px;
background:#19345F;
white-space:nowrap;
padding:10px 22px;

justify-content:right;
color: #ffffff;
font-weight:800;
font-size:16px;
border:none;
text-align:right;
display:block;
position:absolute;
right:5rem;
float:right;
top:90px;
cursor:pointer;
transition:all 0.2s ease-in-out;
text-decoration:none;


&:hover {
	transition:all 0.2s ease-in-out;
	background: #19345F;
	color:#fff;
	font-weight:800;
	text-decoration:none;
}

`;
export const NavBtn = styled.nav`
display:flex;
text-align:center;
margin-left50px;


`;

