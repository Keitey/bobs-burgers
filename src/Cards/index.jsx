import { useState, useEffect } from "react";
import Search from "../Search";
import Pagination from '../Pagination'
import * as C from "./styles";

const Card = () => {
  const [characters, setCharacters] = useState([]);
  const limit = 9;

  useEffect(() => {
    fetch(`https://bobsburgers-api.herokuapp.com/characters?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, []);

  return (
    <>
      <Search />
      <h1 style={{ textAlign: "center", color: "#D77601" }}>
        Bob's Burgers character
      </h1>
      <C.CardContainer>
        {characters.map((character) => {
          return (
            <C.Content key={character.id}>
              <img src={character.image} alt={character.name} />
              <C.Title>Name: {character.name}</C.Title>
              <C.CardContent>
                <span>
                  <b>Gender:</b> {character.gender}
                </span>
                <span>
                  <b>Hair:</b> {character.hairColor}
                </span>
                <span>
                  <b>Occupation:</b> {character.occupation}
                </span>
                <span>
                  <b>First Episode:</b> {character.firstEpisode}
                </span>
                <span>
                  <b>Voiced by:</b> {character.voicedBy}
                </span>
              </C.CardContent>
            </C.Content>
          );
        })}
      </C.CardContainer>
      <Pagination />
    </>
  );
};

export default Card;
