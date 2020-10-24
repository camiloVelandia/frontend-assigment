import styled from "styled-components";

export const ArticleTag = styled.article`
  height: 100%;
  width: 60%;
  background-color:white;
  border-radius:15px;
  padding:20px;
`;
export const Head = styled.div`
  display: flex;
  & h1 {
    margin: 0;
    font-size: 25px;
    padding-right: 50px;
  }
  & button {
    border: none;
    background-color: var(--status-ok-color);
    border-top-left-radius:15px;
    border-bottom-right-radius:15px;
    color:white;
    padding:6px 19px;
    cursor:pointer
  }
`;

export const Info = styled.div`
  display:flex;
  align-items:center;
  margin-top:20px;
  & figure{
      height:30px;
    margin:0;
    margin-right:15px;
    & img{
      height:100%;
    }
  }
  & h3{
    margin:0;
    font-size:16px;
  }
  & ul{
      margin:0;
    padding:0;
    list-style:none;
    display:flex;
  }
  & li{
    color:#c9c9c9;
    border-left:1px solid #c9c9c9;
    padding:0 20px;
    font-size:14px;
    &:first-of-type{
      border-left:none;
      padding-left:0
    }
  }
`;
export const Image = styled.div`
  height: 500px;
  background: rgb(34, 164, 252);
  background: linear-gradient(
    0deg,
    rgba(34, 164, 252, 1) 0%,
    rgba(14, 200, 177, 1) 100%
  );
  position: relative;
  margin-bottom: 40px;
  & span {
    position: absolute;
    top: 30px;
    color: white;
    background-color: var(--brand-color);
    padding:3px 13px;
    border-radius:0 5px  5px 0;
    text-transform:uppercase;
    font-size:14px
  }
`;

export const Category = styled.div`
  display: flex;
  margin:15px 0;
  & a {
    background-color: var(--light2-color);
    color: var(--brand-color);
    margin-right: 15px;
    padding: 8px;
    border-radius: 5px;
    text-decoration: none;
    display: block;
    text-transform:capitalize;
    font-size:14px;
  }
`;
export const Text = styled.div`
  
  
`;
export const Action = styled.div`
  display:flex;
  height:40px;
  margin: 0 auto;
  width:60%;
  border:1px solid var(--brand-color);
  border-top-left-radius:15px;
  border-bottom-right-radius:15px;
  justify-content:space-between;
  align-items:center;
  padding:0 20px;
  margin-top:50px;
  & button{
    height:80%;
    background-color:transparent;
    border:none;
    cursor:pointer
  }
  & img{
    height:60%;
  }
`;
