import { TextField, Button, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useCardData } from "../Context";
const AddCard = ({ setSubmitCard }) => {
  const { addCard } = useCardData();
  const [header, setHeader] = useState("");
  const [body, setBody] = useState("");

  const addNewCard = () => {
    addCard({
      header: header,
      body: body,
      id: uuidv4(),
    });
    setSubmitCard(true);
    setHeader(""); // just returning back to empty field ...
    setBody("");
  };

  return (
    <Box sx={{ width: "400px", height: "300px" }}>
      <TextField
        id="header"
        placeholder="Enter header"
        onChange={(e) => setHeader(e.target.value)}
      ></TextField>
      <TextField
        placeholder="Enter body"
        id="body"
        onChange={(e) => setBody(e.target.value)}
      ></TextField>
      <Button onClick={addNewCard}>Add this card</Button>
    </Box>
  );
};

export default AddCard;
