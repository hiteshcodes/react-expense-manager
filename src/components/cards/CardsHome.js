import React from "react";
import AddNewCard from "./AddNewCard";
import Cards from "./Cards";

const CardsHome = ({ cards, setCards, handleAddNewCard, deleteCard }) => {
  return (
    <div>
      <Cards cards={cards} setCards={setCards} deleteCard={deleteCard} />
      <AddNewCard handleAddNewCard={handleAddNewCard} />
    </div>
  );
};

export default CardsHome;
