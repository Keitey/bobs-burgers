import React from "react";
import Card from "./Card";
import Header from "./Header";
import Search from "./Search";
import Global from "./styles/global";

const App = () => {
  return (
    <>
      <Global />
      <Header />
      <Search />
      <Card />
    </>
  );
};

export default App;
