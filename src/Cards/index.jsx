import { useState, useEffect } from "react";
import * as C from "./styles";

import ReactPaginate from "react-paginate";

const PER_PAGE = 6;

const Card = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetch(`https://bobsburgers-api.herokuapp.com/characters?&limit=60`)
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, []);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = characters
    .slice(offset, offset + PER_PAGE)
    .map((character) => {
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
    });

  const pageCount = Math.ceil(characters.length / PER_PAGE);

  return (
    <C.Container>
      <h2>
        Bob's Burgers character
      </h2>
      <C.CardContainer>{currentPageData}</C.CardContainer>
      <ReactPaginate
        previousLabel="Prev"
        nextLabel="Next"
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </C.Container>
  );
};

export default Card;
