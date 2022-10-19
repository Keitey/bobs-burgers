import styled from "styled-components";

export const Busca = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.6rem;

  input {
    width: 600px;
    border-radius: 16px;
    border: 2px solid #d77601;
    padding: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

    ::placeholder {
      color: #92400e;
    }
  }
`;
