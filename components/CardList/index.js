import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Card from "../Card";
import NavBar from "../NavBar";
import AddCard from "../addCard";
import { useCardData } from "../Context";

const CardList = () => {
  const { allCards, removeCard, addCard } = useCardData();
  const [cardsToDelete, setCardsToDelete] = useState([]); //pushing new IDs here of checked cards. Sending prop to Cards ...
  const [isDeleteCard, setIsDeleteCard] = useState(false); /// true or false based on click of handle delete
  const [isAddCard, setIsAddCard] = useState(false);
  const [submitCard, setSubmitCard] = useState(false);

  // whenever useState changes, component will re-render (what has changed)

  const styles = {
    display: "flex",
    flexDirection: "column",
  };

  const handleDeleteCard = () => {
    setIsDeleteCard(true);
  };

  const handleAddCard = () => {
    setIsAddCard(true);
  };

  useEffect(() => {
    if (isDeleteCard) {
      removeCard(cardsToDelete);
      setIsDeleteCard(false);
    }
  }, [isDeleteCard]);
  // useEffect listens to the delete card ...

  useEffect(() => {
    if (isAddCard && submitCard) {
      setIsAddCard(false);
      setSubmitCard(false);
    }
  }, [isAddCard, submitCard]);
  //useEffect is listening to isAddCard

  console.log(allCards);
  return (
    <Box sx={styles}>
      <NavBar
        handleDeleteCard={handleDeleteCard}
        handleAddCard={handleAddCard}
      />
      {isAddCard && <AddCard setSubmitCard={setSubmitCard} />}

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
