import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'

export const NavLogo = styled(LinkR)`
color: #19345F;
justify-self:flex-start;
cursor:pointer;
font-size:1.5rem;
display:flex;
align-items:center;
margin-top:-13rem;
height:2rem;
text-decoration:none;
z-index:999;

@media screen and (max-width:768px){
width:25%;


}
`;