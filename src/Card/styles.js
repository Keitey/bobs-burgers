import styled from "styled-components";

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
    margin: 2rem;
`;

export const Title = styled.h3`
  background: #ff9933;
  width: 80%;
  text-align: center;
  margin: auto;
  border-radius: 2px;
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CardArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 442px;
  max-width: 345px;
  border: 2px solid #d77601;
  border-radius: 12px;
  padding: .9rem;

  img {
    height: 170px;
    width: 250px;
    padding: 0.8rem;
  }
`;
