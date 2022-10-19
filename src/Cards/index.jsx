import { useState, useEffect } from "react";
import * as C from "./styles";

const Card = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`https://bobsburgers-api.herokuapp.com/characters/`)
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, []);

  return (
    <C.CardContainer>
        {characters.map((character) => {
          return (
            <C.Content key={character.id}>
              <C.Title>Bob's Burgers character</C.Title>
              <img src={character.image} alt={character.name} />
              <C.Title>{character.name}</C.Title>
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
  );
};

export default Card;
