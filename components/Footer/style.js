import styled from "styled-components";

export const FooterTag = styled.footer`
  background-color: var(--brand-color);
  color: white;
  
  -webkit-box-shadow: 0px -4px 6px -4px #000000;
  box-shadow: 0px -4px 6px -4px #000000;
  @media (min-width: 767px) {
    display: flex;
    align-items: center;
  }
`;
export const Logo = styled.figure`
  width: 15%;
`;
export const Nav = styled.nav`
  width: 55%;
  & ul{
    display:flex;
    justify-content:space-around;
    padding:0;
    list-style:none
  }
  & a{
    text-decoration:none;
    color:white;
  }
`;
export const Copy = styled.p`
  width: 35%;
  opacity:.5;
  text-align:right;
  padding-right:5%
`;