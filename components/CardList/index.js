import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Card from "../Card";
import NavBar from "../NavBar";
import AddCard from "../addCard";

const CardList = () => {
  const [cardsToDelete, setCardsToDelete] = useState([]); //pushing new IDs here of checked cards. Sending prop to Cards ...
  const [deleteCard, setDeleteCard] = useState(false); /// true or false based on click of handle delete
  const [addCard, setAddCard] = useState(false);
  const [newCard, setNewCard] = useState({});
  const [submitCard, setSubmitCard] = useState(false);
  const [allCards, setAllCards] = useState([
    {
      header: "FIrst header",
      body: "FIrst body",
      id: 1,
    },
    {
      header: "Second header",
      body: "Second body",
      id: 2,
    },
    {
      header: "Third header",
      body: "Third body",
      id: 3,
    },
    {
      header: "Fourth header",
      body: "Fourth body",
      id: 4,
    },
  ]);

  // whenever useState changes, component will re-render (what has changed)

  const styles = {
    display: "flex",
    flexDirection: "column",
  };

  const handleDeleteCard = () => {
    setDeleteCard(true);
  };

  const handleAddCard = () => {
    setAddCard(true);
  };

  useEffect(() => {
    if (deleteCard) {
      setAllCards((prev) =>
        prev.filter((eachCard) => !cardsToDelete.includes(eachCard.id))
      );
      setDeleteCard(false);
    }
  }, [deleteCard]);
  // useEffect listens to the delete card ...

  useEffect(() => {
    if (addCard && submitCard) {
      setAllCards((prev) => [...prev, newCard]);
      setAddCard(false);
      setSubmitCard(false);
    }
  }, [addCard, submitCard]);
  //useEffect is listening to addCard and submitCard

  return (
    <Box sx={styles}>
      <NavBar
        handleDeleteCard={handleDeleteCard}
        handleAddCard={handleAddCard}
      />
      {addCard && (
        <AddCard setNewCard={setNewCard} setSubmitCard={setSubmitCard} />
      )}

      {allCards.map((eachItem) => {
        return (
          <Box key={eachItem.id}>
            <Card
              origHeader={eachItem.header}
              origBody={eachItem.body}
              id={eachItem.id}
              setCardsToDelete={setCardsToDelete}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default CardList;
