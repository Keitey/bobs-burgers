import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 3rem;
  row-gap: 2rem;
  margin: 1rem 2rem;
  padding-bottom: 3rem;
`;

export const Title = styled.h3`
  background: #ff9933;
  width: 100%;
  text-align: center;
  margin: auto;
  border-radius: 2px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.2rem 1.4rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-height: 520px;
  max-width: 450px;
  border: 2px solid #d77601;
  border-radius: 12px;
  padding: 0.9rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  img {
    height: 130px;
    padding: 0.8rem;
  }
`;

export const Container = styled.div`

  h2{
    text-align: center;
    color: #D77601;
    padding-top: .9rem;
    font-size: 35px;
  }

  .paginationBttns {
    width: 80%;
    height: 40px;
    list-style: none;
    display: flex;
    justify-content: center;

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  .paginationBttns a {
    padding: 10px;
    margin: 8px;
    border-radius: 5px;
    border: 1px solid #ff9933;
    color: #ff9933;
    cursor: pointer;

    @media (max-width: 600px) {
      margin: 4px;
    }
  }

  .paginationBttns a:hover {
    color: #fff;
    background-color: #ff9933;
  }

  .paginationActive a {
    color: #fff;
    background-color: #ff9933;
  }

  @media (max-width: 600px) {
    .previousBttn,
    .nextBttn {
      display: none;
    }
  }
`;
