import styled from "styled-components";

export const FooterTag = styled.footer`
  background-color: var(--brand-color);
  color: white;

  -webkit-box-shadow: 0px -4px 6px -4px #000000;
  box-shadow: 0px -4px 6px -4px #000000;
  display: flex;
  align-items: center;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
export const Logo = styled.figure`
  width: 15%;
  @media (max-width: 992px) {
    width: 80%;
    text-align:center
  }
`;
export const Nav = styled.nav`
  width: 55%;
  & ul {
    display: flex;
    justify-content: space-around;
    padding: 0;
    list-style:none;
     @media (max-width: 992px) {
      flex-direction:column;
      align-items:center;
    }
  }
  & a {
    text-decoration: none;
    color: white;
  }
  @media (max-width: 992px) {
    width: 80%;
  }
`;
export const Copy = styled.p`
  width: 35%;
  opacity: 0.5;
  text-align: right;
  padding-right: 5% ;
  @media (max-width: 992px) {
  padding-right: 0 ;
    width: 80%;
    text-align:center
    
  }
`;