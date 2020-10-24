import styled from "styled-components";

export const AsideTag = styled.aside`
  height: 100%;
  width: 100%;
  margin-top:80px;
   @media (min-width: 992px) {
  margin-top:0px;
  max-width: 500px;
  min-width: 400px;
  margin-left: 20px;
  width: 33%;
  }
`;
export const ArticleContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-bottom: 1px solid #c9c9c9;
  border-radius:20px;
`;
export const Article = styled.article`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid #c9c9c9;
  &.last {
    border-bottom: none;
  }
  @media (max-width: 431px) {
    flex-wrap:wrap;
    justify-content:center;
    text-align:center
  }
`;

export const MainImage = styled.figure`
  position:relative;
  margin:0;
  & img {
    height: 150px;
    width: 150px;
    border-radius: 16px;
  }
  & span {
    position: absolute;
    top: 25px;
    background-color: var(--brand-color);
    z-index:10;
    left:0;
    color:white;
    padding:5px 15px;
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;
    text-transform:uppercase;
    font-weight:600;
    font-size:12px
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
  & a {
    margin: 0;
    font-size: 14px;
    text-decoration:none;
    color:black;
    font-weight:600
  }
  & small {
    color: #c9c9c9;
    padding-top: 7px;
    padding-bottom: 7px;
    text-transform: capitalize;
    border-bottom: 1px solid #c9c9c9;
  }
  @media (max-width: 431px) {
  padding-left:0
  }
`;

export const Heading = styled.h2`
  margin: 0;
  margin-bottom: 10px;
  color: var(--brand-color);
  position:relative;
  font-size: 18px;
  &::after {
    content: "";
    position:absolute;
    width: 40%;
    border-bottom: 1px solid var(--brand-color);
    top:50%;
    right:0;
    transform:translateY(-50%)
  }

`;

export const Actions = styled.div`
  display:flex;
  align-items:center;
  padding-top:7px;
  & button{
    display:flex;
    align-items:center;
    height:30px;
    background-color:transparent;
    border:none;
    flex:1;
    color:#c9c9c9;
    font-size:12px;
    cursor:pointer;
  }
  & img{
    height:20px;
    padding-right:5px;
    opacity:.7;
  }

`;
