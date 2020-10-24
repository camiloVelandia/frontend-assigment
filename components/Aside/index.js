import React from 'react';
import {
  AsideTag,
  MainImage,
  Content,
  Article,
  Actions,
  Heading,
} from "./style";

const index = () => {
  return (
    <AsideTag>
      <Heading>Noticias relacionadas</Heading>
      <Article>
        <MainImage>
          <img src="./desert.jpg" />
          <span>noticia</span>
        </MainImage>
        <Content>
          <h3>Lorem ipsum dolor: Volutpat consequat</h3>
          <small>Por: Lorem ipsum dolor</small>
          <Actions>
            <button>
              <img src="./estrella.svg" /> 50
            </button>
            <button>
              <img src="./charlar.svg" /> 40
            </button>
            <button>
              <img src="./ver.svg" /> 75
            </button>
          </Actions>
        </Content>
      </Article>
      <Article>
        <MainImage>
          <img src="./desert.jpg" />
          <span>noticia</span>
        </MainImage>
        <Content>
          <h3>Lorem ipsum dolor: Volutpat consequat</h3>
          <small>Por: Lorem ipsum dolor</small>
          <Actions>
            <button>
              <img src="./estrella.svg" /> 50
            </button>
            <button>
              <img src="./charlar.svg" /> 40
            </button>
            <button>
              <img src="./ver.svg" /> 75
            </button>
          </Actions>
        </Content>
      </Article>
      <Article>
        <MainImage>
          <img src="./desert.jpg" />
          <span>noticia</span>
        </MainImage>
        <Content>
          <h3>Lorem ipsum dolor: Volutpat consequat</h3>
          <small>Por: Lorem ipsum dolor</small>
          <Actions>
            <button>
              <img src="./estrella.svg" /> 50
            </button>
            <button>
              <img src="./charlar.svg" /> 40
            </button>
            <button>
              <img src="./ver.svg" /> 75
            </button>
          </Actions>
        </Content>
      </Article>
      <Article>
        <MainImage>
          <img src="./desert.jpg" />
          <span>noticia</span>
        </MainImage>
        <Content>
          <h3>Lorem ipsum dolor: Volutpat consequat</h3>
          <small>Por: Lorem ipsum dolor</small>
          <Actions>
            <button>
              <img src="./estrella.svg" /> 50
            </button>
            <button>
              <img src="./charlar.svg" /> 40
            </button>
            <button>
              <img src="./ver.svg" /> 75
            </button>
          </Actions>
        </Content>
      </Article>
    </AsideTag>
  );
};

export default index;