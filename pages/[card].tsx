// dynamic routes. card.js will show different info for each card.
import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Card from "../components/Card";
import { GetStaticProps } from "next";
import { useSelector } from "react-redux";
import { useAppSelector, useAppDispatch } from "../store";

const CardPreview = () => {
  const router = useRouter();
  const cardsCollection = useAppSelector(
    (state) => state.cardsInfo.cardsCollection
  );
  const id = router.query.card;
  const card = cardsCollection.find((eachCard) => eachCard.id === id);
  const handleClick = () => {
    router.push("/");
  };
  console.log("This is card: ", card);

  return (
    <>
      <Card
        origBody={"example Body"}
        origHeader={"example Header"}
        id={"111"}
      />
      <Button onClick={handleClick}>Go Back</Button>
    </>
  );
};

export default CardPreview;
