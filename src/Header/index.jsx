import React from "react";
import * as C from './styles'

const Header = () => {
  return (
    <C.HeaderContainer>
      <img
        src="https://www.justwatch.com/images/backdrop/291667774/s640/bobs-burgers"
        alt=""
      />
      <h1>Bob's Burgers Wiki</h1>
    </C.HeaderContainer>
  );
};

export default Header;
