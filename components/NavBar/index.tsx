import React, { useState, FC } from "react";
import { Button, Box, Typography } from "@mui/material";
import { useCardData } from "../Context";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { removeCard, setIsReadOnly } from "../../store/cardslice";
import { useAppSelector, useAppDispatch } from "../../store";

interface IProps {
  handleAddCard: () => void;
}

const NavBar: FC<IProps> = ({ handleAddCard }) => {
  const router = useRouter();
  const isReadOnly = useAppSelector((state) => state.cardsInfo.isReadOnly);
  const dispatch = useAppDispatch();

  const handleReadOnly = () => {
    dispatch(setIsReadOnly());
  };

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
        <Typography variant="h6">NavBar component has 3 x buttons</Typography>
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
        <Button onClick={handleDeleteCard} disabled={isReadOnly}>
          Delete Cards
        </Button>
        <Button onClick={handleAddCard} disabled={isReadOnly}>
          Add Card
        </Button>
      </Box>
    </>
  );
};

export default NavBar;
