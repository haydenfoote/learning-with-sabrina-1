import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Card from "../Card";
import NavBar from "../NavBar";
import AddCard from "../addCard";
import { useCardData } from "../Context";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../store"; // Does this import allow us to see and use the cardslice extra reducers?

const CardList = () => {
  // create a subscription to the Redux store ...
  const cardsCollection = useAppSelector(
    (state) => state.cardsInfo.cardsCollection
  );
  const [isDeleteCard, setIsDeleteCard] = useState(false); /// true or false based on click of handle delete
  const [isAddCard, setIsAddCard] = useState(false);
  const [submitCard, setSubmitCard] = useState(false);

  // whenever useState changes, component will re-render (what has changed)
  console.log(cardsCollection);
  console.log(
    "cardsCollection in CardList. We are seeing no data yet, just the default case"
  );

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
    <>
      <Box sx={styles}>
        <Typography variant="h6">NavBar is called ...</Typography>
        <NavBar handleAddCard={handleAddCard} />
        {isAddCard && <AddCard setSubmitCard={setSubmitCard} />}

        {cardsCollection.map((eachItem) => {
          return (
            <Box key={eachItem.id}>
              <Typography variant="h6">
                CardList component calls Card component
              </Typography>
              <Card
                origHeader={eachItem.header}
                origBody={eachItem.body}
                id={eachItem.id}
              />
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default CardList;
