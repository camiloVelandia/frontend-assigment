import styled from "styled-components";

export const MainTag = styled.main`
  height: 100%;
  display: flex;
  justify-content: space-around;
  padding: 100px 20px;
    flex-wrap:wrap;
  @media (min-width: 992px) {
    flex-wrap:nowrap;
  }
  @media (max-width: 992px) {
  padding: 50px 20px;
  }
`;
