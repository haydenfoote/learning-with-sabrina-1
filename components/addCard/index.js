import { TextField, Button, Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { addCard } from "../../store/cardslice";
import { useDispatch } from "react-redux";
const AddCard = ({ setSubmitCard }) => {
  const dispatch = useDispatch();
  const [header, setHeader] = useState("");
  const [body, setBody] = useState("");

  const addNewCard = () => {
    dispatch(
      addCard({
        header: header,
        body: body,
        id: uuidv4(),
      })
    );
    setSubmitCard(true);
    setHeader(""); // just returning back to empty field ...
    setBody("");
  };

  return (
    <Box sx={{ width: "400px", height: "300px" }}>
      <Typography variant="h6">addCard component</Typography>
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
