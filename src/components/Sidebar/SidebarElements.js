import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR} from 'react-router-dom';

export const SidebarContainer = styled.aside`
position:fixed;
z-index:999;
width:100%;
height:100%;
background:#ffffff;
display:grid;
align-items:center;
top:0;
left:0;
transition:0.3s ease-in-out;
opacity:${({isOpen }) => (isOpen ? '100%' : '0')};
top:${({isOpen }) => (isOpen ? '0' : '-100%')};

`;
export const CloseIcon =styled(FaTimes)`
color: #19345F;
`;
export const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor:pointer;
outline:none;
`;
export const SidebarWrapper = styled.div`
color:#fff;
`;
export const SidebarMenu = styled.ul`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(6, 80px);
text-align:center;
text-docoration:none;

@media screen and (max-width:480px){
	grid-template-rows:repeat(6, 60px);

`;

export const SidebarLink = styled(LinkS)`
display:flex;
align-items:center;
justify-content:1.5rem;
font-size:1.5rem;
text-docoration:none;
list-style:none;
transition:0.2s ease-in-out;
text-docoration:none;
color: #19345F;
cursor:pointer;
 margin-left:40%;
padding-top:20px;

&:hover {
	color: #19345F;    text-docoration:none;
	transition:0.2s ease-in-out;

}
`

 export const SideBtnWrap = styled.div`
display:flex;
justify-content:center;
background:#fffff;
font-size:1.3rem;
text-decoration:none;

`;
export const SidebarRoute = styled(LinkR)`
border-radius:5px;
width:6rem;
white-space:nowrap;
color:  #19345F;
outline:none;
border:none;
padding-left:10px;
font-weight:500;
cursor:pointer;
transition:all 0.2s ease-in-out;
text-docoration:none;



&:hover {
	transition:all 0.2s ease-in-out;
	background: #19345F;
    text-decoration:none;
	color:#ffffff;
}
`
;