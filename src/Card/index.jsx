import React from "react";
import * as C from "./styles";

const Card = () => {
  return (
    <C.CardContainer>
      <C.CardArea>
        <C.Title>Bob's Burgers character</C.Title>
        <img
          src="https://bobsburgers-api.herokuapp.com/images/characters/1.jpg"
          alt=""
        />
        <C.CardContent>
          <C.Title>"Dottie Minerva"</C.Title>
          <span>Gender: Female</span>
          <span>Hair: Blonde</span>
          <span>Occupation: Student at Wagstaff School</span>
          <p>Behind the scenes</p>
          <span>First Episode: "The Kids Run the Restaurant"</span>
          <span>Voiced by: Wendy Molyneux</span>
        </C.CardContent>
      </C.CardArea>

      <C.CardArea>
        <C.Title>Bob's Burgers character</C.Title>
        <img
          src="https://bobsburgers-api.herokuapp.com/images/characters/1.jpg"
          alt=""
        />
        <C.CardContent>
          <C.Title>"Dottie Minerva"</C.Title>
          <span>Gender: Female</span>
          <span>Hair: Blonde</span>
          <span>Occupation: Student at Wagstaff School</span>
          <p>Behind the scenes</p>
          <span>First Episode: "The Kids Run the Restaurant"</span>
          <span>Voiced by: Wendy Molyneux</span>
        </C.CardContent>
      </C.CardArea>

      <C.CardArea>
        <C.Title>Bob's Burgers character</C.Title>
        <img
          src="https://bobsburgers-api.herokuapp.com/images/characters/1.jpg"
          alt=""
        />
        <C.Title>"Dottie Minerva"</C.Title>
        <C.CardContent>
          <span>Gender: Female</span>
          <span>Hair: Blonde</span>
          <span>Occupation: Student at Wagstaff School</span>
          <p>Behind the scenes</p>
          <span>First Episode: "The Kids Run the Restaurant"</span>
          <span>Voiced by: Wendy Molyneux</span>
        </C.CardContent>
      </C.CardArea>
    </C.CardContainer>
  );
};

export default Card;
