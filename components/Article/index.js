import React, {useState, useEffect} from 'react';
import { ArticleTag, Head, Info, Text, Action, Category, Image } from "./style";
// import getData from '../../services/getData'


const Article = () => {

 const API = "./article.json";
 
  const [value, setValue]= useState({title:''})

  useEffect(()=>{
    fetch(API)
    .then(res => res.json())
    .then(response =>{
      const {title} = response
      setValue(response)
    })
  },[])

  return (
    <ArticleTag>
      <Image>
        <img />
        <span>noticia</span>
      </Image>

      <Head>
        <h1>{value.title}s</h1>
        <button>Guardar</button>
      </Head>
      <Info>
        <div>
          <figure>
            <img src="./crop.png" />
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
        <div
          dangerouslySetInnerHTML={{
            __html: `${value.content}`,
          }}
        ></div>
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