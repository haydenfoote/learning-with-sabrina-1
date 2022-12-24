import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import { useCardData } from "../Context";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { removeCard, setIsReadOnly } from "../../store/cardslice";
const NavBar = ({ handleAddCard }) => {
  const router = useRouter();
  const isReadOnly = useSelector((state) => state.cardsInfo.isReadOnly);
  const handleReadOnly = () => {
    dispatch(setIsReadOnly());
  };
  const dispatch = useDispatch();

  const handleDeleteCard = () => {
    dispatch(removeCard());
  };
  const handleHomeClick = () => {
    router.push("/");
  };
  const handleSignOutClick = () => {
    router.push("/signin");
  };

  return (
    <>
      <Box>
        <Button onClick={handleHomeClick}>Home</Button>
        <Button onClick={handleSignOutClick}>Sign Out</Button>
      </Box>
      <Box>
        <Button
          onClick={handleReadOnly}
          variant={isReadOnly ? "contained" : "text"}
        >
          Read Only
        </Button>
        <Button onClick={handleDeleteCard} display="flex" disabled={isReadOnly}>
          Delete Cards
        </Button>
        <Button onClick={handleAddCard} display="flex" disabled={isReadOnly}>
          Add Card
        </Button>
      </Box>
    </>
  );
};

export default NavBar;
