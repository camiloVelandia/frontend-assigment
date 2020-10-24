import React from 'react';
import {
  HeaderTag,
  SearchContainer,
  SearchIcon,
  DropDown,
  Nav,
  Actions,
  Logo
} from "./style";

const Header = () => {
  return (
    <HeaderTag>
      <Logo>
        <img src="./docred_logo.png" />
      </Logo>
      <SearchContainer>
        <button>
          <SearchIcon src="./lupa.svg" />
        </button>
        <input type="text" placeholder="¿Que estas buscando?" />
      </SearchContainer>
      <Nav>
        <DropDown>
          <li>
            <a>
              <img src="./casa.svg" /> inicio
            </a>
          </li>
          <button>
            <img src="./abajo.svg" />
          </button>
        </DropDown>
        
          <Actions>
            <li>
              <button>
                <img src="./campana.svg" />
              </button>
            </li>
            <li>
              <button>
                <img src="./usuario.svg" />
              </button>
            </li>
            <li>
              <button>
                <img src="./configuraciones.svg" />
              </button>
            </li>
          </Actions>
        
      </Nav>
    </HeaderTag>
  );
};

export default Header;