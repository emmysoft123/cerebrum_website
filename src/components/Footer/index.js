import React from 'react';
import { FaFacebook,FaInstagram,FaWhatsapp,FaLinkedin,FaYoutube,FaTwitter}from 'react-icons/fa';
import { FooterContainer,
FooterLink,
FooterWrap,
FooterLinkTitle,
FooterLinkItems,
FooterLinksWrapper,
FooterLinksContainer,

SocialMediaWrap,SocialIcons,SocialMedia,SocialLogo,SocialIconLink,WebsiteRights
} from './FooterElement';

const Footer = ()=>{

	return(
      <FooterContainer>
      <FooterWrap>
      <FooterLinksContainer>
      <FooterLinksWrapper>

       <FooterLinkItems>

       <FooterLinkTitle> Explore  </FooterLinkTitle> 
       <FooterLink to ="/Features">Features</FooterLink>
        <FooterLink to ="/Pricing">Pricing</FooterLink>
         <FooterLink to ="/Courses">Courses</FooterLink>
         
    
       </FooterLinkItems>

         <FooterLinkItems>

       <FooterLinkTitle> Cerebrum </FooterLinkTitle> 
       <FooterLink to="/About">About</FooterLink>
        <FooterLink to="/Career">Career</FooterLink>
         <FooterLink to="/Blog">Blog</FooterLink>
          <FooterLink to="/Affiliates">Affiliates</FooterLink>
         
    
       </FooterLinkItems>

      </FooterLinksWrapper>
      
      <FooterLinksWrapper>

       <FooterLinkItems>

       <FooterLinkTitle> Support</FooterLinkTitle> 
       <FooterLink to ="/Knowledge">Knowledge</FooterLink>
        <FooterLink to ="/Contact Support">Contact Support</FooterLink>
         <FooterLink to ="/Contact Sales">Contact Sales</FooterLink>
          <FooterLink to="/Privacy Policy">Privacy Policy</FooterLink>
           <FooterLink to="/Terms of Use">Terms of Use</FooterLink>
            <FooterLink to="/Cookies Policy">Cookies Policy</FooterLink>
    
       </FooterLinkItems>

        
      </FooterLinksWrapper>

      </FooterLinksContainer>
      <SocialMedia>
      <SocialMediaWrap>
        <SocialLogo to ="/">
        <img src ="https://res.cloudinary.com/cmp84378/image/upload/v1611468513/Logo_mbswgk.png" alt="LOGO" />
        </SocialLogo>
        <WebsiteRights> Copyright C 2021 Cerebrum,All right reserved</WebsiteRights>
        <SocialIcons>
        <SocialIconLink href = "/" target ="_blank" aria-label="Facebook">
        <FaFacebook/>
        </SocialIconLink>


        <SocialIconLink href = "/" target ="_blank" aria-label="Instagram">
        <FaInstagram/>
        </SocialIconLink>

               <SocialIconLink href = "/" target ="_blank" aria-label="Twitter">
        <FaTwitter/>
        </SocialIconLink>

       
        <SocialIconLink href = "/" target ="_blank" aria-label="Whatsapp">
        <FaWhatsapp/>
        </SocialIconLink>

       
        <SocialIconLink href = "/" target ="_blank" aria-label="LinkedIn">
        <FaLinkedin/>
        </SocialIconLink>

    
        <SocialIconLink href = "/" target ="_blank" aria-label="Youtube">
        <FaYoutube/>
        </SocialIconLink>
        </SocialIcons>
      </SocialMediaWrap>
      </SocialMedia>
      </FooterWrap>

      </FooterContainer>

		);
};
export default Footer;