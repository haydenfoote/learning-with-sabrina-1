import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import { useCardData } from "../Context";
import { useRouter } from "next/router";

const NavBar = ({ handleDeleteCard, handleAddCard }) => {
  const router = useRouter();
  const { setReadOnly, readOnly } = useCardData();
  const handleReadOnly = () => {
    setReadOnly();
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
    </>
  );
};

export default NavBar;
