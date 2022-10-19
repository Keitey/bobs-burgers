import React from "react";
import Cards from "./Cards";
import Header from "./Header";
import Search from "./Search";
import Global from "./styles/global";

const App = () => {
  return (
    <>
      <Global />
      <Header />
      <Search />
      <Cards />
    </>
  );
};

export default App;
