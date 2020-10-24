import React from 'react';
import { ArticleTag, Head, Info, Text, Action, Category, Image } from "./style";

const Article = () => {
  return (
    <ArticleTag>
      <Image>
        <img  />
        <span>noticia</span>
      </Image>
      <Head>
        <h1>lorem ipsum dolor: voluptat consequat</h1>
        <button>Guardar</button>
      </Head>
      <Info>
        <div>
          <figure>
            <img src='./crop.png'/>
          </figure>
        </div>
        <div>
          <h3>Noticias Docred</h3>
          <div>
            <ul>
              <li>hace 12 h</li>
              <li>publicado 12/12/8</li>
              <li>lectura: 3 min</li>
            </ul>
          </div>
        </div>
      </Info>
      <Category>
        <a href="">medicina</a>
        <a href="">medicina</a>
        <a href="">medicina</a>
      </Category>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipiscing elit eros imperdiet
        eget, molestie tempus tincidunt sollicitudin platea auctor montes
        lobortis neque posuere, ridiculus laoreet volutpat ornare sodales rutrum
        convallis curabitur mauris. Sociis nisi eleifend bibendum porta nisl,
        porttitor mollis proin nullam pharetra, montes mauris rhoncus consequat.
        Lobortis vulputate penatibus congue dis viverra mollis tellus, orci
        imperdiet arcu ultrices natoque. Porta feugiat auctor nibh venenatis
        netus a, vivamus volutpat penatibus fermentum tincidunt phasellus
        ridiculus, vitae ut nascetur in class. Dis sapien leo et hendrerit
        habitant dapibus pretium condimentum, consequat eget risus varius lacus
        ultricies odio magnis maecenas, viverra sociosqu egestas penatibus
        iaculis lacinia sociis. Faucibus placerat nascetur tortor per ligula
        duis at ultrices donec torquent, aptent ad mus quam sodales gravida erat
        pharetra sem nec, aliquam eu eleifend pretium nunc curabitur dignissim
        ut diam.
      </Text>
      <Action>
        <button>
          <img src="./estrella.svg" /> 50
        </button>
        <button>
          <img src="./charlar.svg" /> 40
        </button>
        <button>
          <img src="./ver.svg" /> 75
        </button>
      </Action>
    </ArticleTag>
  );
};

export default Article;