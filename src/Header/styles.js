import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #d77601;
  height: 100px;
  width: 100%;

  img {
    width: 98px;
    height: 90px;
    border-radius: 50%;
  }

  h1{
    color: #fff;
  }

  @media (max-width: 600px){
    flex-direction: column;
    padding-top: .8rem;
    height: 120px;
  }
`;
