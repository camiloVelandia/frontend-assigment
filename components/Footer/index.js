import React from 'react';
import { Logo, FooterTag, Nav, Copy } from "./style";

const Footer = () => {
  return (
    <FooterTag>
      <Logo>
        <img src="./docred_logo.png" />
      </Logo>
      <Nav>
        <ul>
          <li>
            <a href="">Pregunta frecuentes</a>
          </li>
          <li>
            <a href="">Contactanos</a>
          </li>
          <li>
            <a href="">Informacion</a>
          </li>
        </ul>
      </Nav>
      <Copy>DocRed © 2019. Todos los derechos reservados</Copy>
    </FooterTag>
  );
};

export default Footer;