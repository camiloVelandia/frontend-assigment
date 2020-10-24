import styled from "styled-components";

export const HeaderTag = styled.header`
  background-color: var(--brand-color);
  color: white;
  -webkit-box-shadow: 0px 5px 9px -6px #000000;
  box-shadow: 0px 5px 9px -6px #000000;
  @media (min-width: 767px) {
    display: flex;
    align-items: center;
  }
`;
export const Logo = styled.figure`
  width:15%;
`;
export const SearchContainer = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  & input[type="text"] {
    height: 100%;
    border: none;
    color: #c9c9c9;
    border-bottom-right-radius: 15px;
    width:80%;
    padding-left:10px;
  }
  & button {
    box-sizing:content-box;
    height: 100%;
    display: flex;
    background-color: white;
    border: none;
    justify-content: center;
    align-items: center;
    margin-right: 3px;
    border-top-left-radius: 15px;
    cursor: pointer;
  }
  width:25%;
`;
export const SearchIcon = styled.img`
  height:20px;
`;
export const DropDown = styled.ul`
  height: 25px;
  list-style: none;
  padding: 0;
  position:relative;
  & li {
    height: 100%;
    & a {
      height: 100%;
      display: flex;
      align-items: center;
      & img {
        margin-right: 3px;
        height:100%;
      }
    }
  }
  & button {
    background-color: transparent;
      height: 15px;
      width: 15px;
      border:none;
      position:absolute;
      left:100%;
      top:10%;
      outline:none;
      cursor:pointer;
    & img {
      height: 100%;
    }
  }
`;
export const Nav = styled.nav`
  display: flex;
  width:60%;
  margin-right:0;
  justify-content:space-between;
  
`;
export const Actions = styled.ul`
  list-style: none;
  padding:0;
  display: flex;
  width:30%;
  justify-content:space-around;
  border-left:1px solid white;
  margin:0;
  align-items:center;
  & button{
    height:30px;
    background-color:transparent;
    border:none;
    cursor:pointer;

  }
  & img{
    height:30px;

  }
`;