import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import { useCardData } from "../Context";
const NavBar = ({ handleDeleteCard, handleAddCard }) => {
  const { setReadOnly, readOnly } = useCardData();
  const handleReadOnly = () => {
    setReadOnly();
  };
  return (
    <Box>
      <Button
        onClick={handleReadOnly}
        variant={readOnly ? "contained" : "text"}
      >
        Read Only
      </Button>
      <Button onClick={handleDeleteCard} display="flex" disabled={readOnly}>
        Delete Cards
      </Button>
      <Button onClick={handleAddCard} display="flex" disabled={readOnly}>
        Add Card
      </Button>
    </Box>
  );
};

export default NavBar;
