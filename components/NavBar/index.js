import React, { useState } from "react";
import { Button, Box } from "@mui/material";

const NavBar = ({ handleDeleteCard, handleAddCard }) => {
  return (
    <Box>
      <Button onClick={handleDeleteCard} display="flex">
        Delete Cards
      </Button>
      <Button onClick={handleAddCard} display="flex">
        Add Card
      </Button>
    </Box>
  );
};

export default NavBar;
