import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Card from "../Card";
import NavBar from "../NavBar";
import AddCard from "../addCard";
import { useCardData } from "../Context";
import { useSelector } from "react-redux";

const CardList = () => {
  const cardsCollection = useSelector(
    (state) => state.cardsInfo.cardsCollection
  );
  const [isDeleteCard, setIsDeleteCard] = useState(false); /// true or false based on click of handle delete
  const [isAddCard, setIsAddCard] = useState(false);
  const [submitCard, setSubmitCard] = useState(false);

  // whenever useState changes, component will re-render (what has changed)

  const styles = {
    display: "flex",
    flexDirection: "column",
  };

  const handleAddCard = () => {
    setIsAddCard(true);
  };

  useEffect(() => {
    if (isDeleteCard) {
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
  return (
    <Box sx={styles}>
      <NavBar handleAddCard={handleAddCard} />
      {isAddCard && <AddCard setSubmitCard={setSubmitCard} />}

      {cardsCollection.map((eachItem) => {
        return (
          <Box key={eachItem.id}>
            <Card
              origHeader={eachItem.header}
              origBody={eachItem.body}
              id={eachItem.id}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default CardList;
