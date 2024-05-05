import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HashnodeIcon from "../../images/hashnode.svg";



const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 27px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;



const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo >Sudha Yadav</Logo>
        <figure className="text-center">
    <blockquote className="blockquote" style={{ display: 'flex', justifyContent: 'center', fontSize: '20px' }}>
      <p>"In the end, it's not the years in your life that count. It's the life in your years."</p>
    </blockquote>
    <figcaption className="blockquote-footer" style={{ display: 'flex', justifyContent: 'center', fontSize: '22px' }}>
    —Abraham Lincoln <cite title="Source Title"></cite>
    </figcaption>
  </figure>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="display">
            <TwitterIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.hashnode} target="display">
            <img src={HashnodeIcon} alt="Hashnode Icon" width="24" height="24" />
          </SocialMediaIcon>
          
        </SocialMediaIcons>
        <Copyright>&copy; 2024 Sudha Yadav. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;