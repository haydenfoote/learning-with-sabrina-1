import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Grid, Typography } from "@mui/material";
import { Checkbox, FormControlLabel } from "@mui/material";
import { color, palette } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useCardData } from "../Context";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardButtons from "./CardButtons";

const Card = ({ origHeader, origBody, id, setCardsToDelete }) => {
  const { readOnly, setCheckedCard, setUncheckedCard, checkedCards } =
    useCardData();
  const [checked, setChecked] = useState(checkedCards.includes(id));
  // the state of our checkbox is initially unchecked. Used, e.g., for background colour
  // in ternary operator.
  const [header, setHeader] = useState(origHeader);
  // the state of our header text
  const [body, setBody] = useState(origBody);
  // the state of our body text
  const [originalHeader, setOriginalHeader] = useState(header);
  // Setting the original state of the header text back to what it was. It is set once.
  const [originalBody, setOriginalBody] = useState(body);
  // setting the original state of the body text back to what it was.  It is set once.
  const [disabled, setDisabled] = useState(true);
  // we need a state to indicate whether editing is disabled.  Initial state us disabled.
  const [edit, setEdit] = useState(false);
  // we need a state to indiciate whether we are in edit mode. Initially we are not.

  // we need a function to handle the edit button ...
  const handleEditButton = () => {
    setDisabled(false);
    setEdit(true);
    setChecked(false);
  };

  const handleSaveButton = () => {
    setOriginalHeader(header);
    setOriginalBody(body);
    setDisabled(true);
    setEdit(false);
  };

  const handleCancelButton = () => {
    setHeader(originalHeader);
    setBody(originalBody);
    setDisabled(true);
    setEdit(false);
  };

  // handleHeaderChange takes the event from the onChange property in the header field;
  const handleHeaderChange = (e) => {
    setHeader(e.target.value);
  };

  const handleCheckBoxClick = () => {
    setChecked(!checked);
  };

  // handleBodyChange takes the event from the onChange property in the text field ...
  // ... and updates the state of the body state.
  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  useEffect(() => {
    if (checked) {
      setCheckedCard(id);
      setCardsToDelete((prev) => [...prev, id]);
    } else {
      setUncheckedCard(id);
      setCardsToDelete((prev) => prev.filter((singleId) => singleId != id));
    }
  }, [checked]);

  useEffect(() => {
    if (edit) {
      console.log("checkbox is not here");
    } else {
      console.log("checkbox is  here");
    }
  }, [edit]);

  useEffect(() => {
    setEdit(false);
  }, [readOnly]);

  return (
    <Grid sx={{ width: "500px", padding: "15px" }}>
      <Box
        sx={{
          border: "2px solid black",
          color: "primary.light",
          padding: "15px",
          display: "flex",
          backgroundColor: checked ? "teal" : "white",
          gap: "30px",
          flexDirection: "column",
          width: 1,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ width: 1 }}>
            {edit ? null : (
              <Checkbox
                onClick={handleCheckBoxClick}
                disabled={readOnly}
                checked={checked}
              />
            )}
            <CardHeader
              header={header}
              disabled={disabled}
              handleHeaderChange={handleHeaderChange}
            />
          </Box>
          <CardBody
            body={body}
            disabled={disabled}
            handleBodyChange={handleBodyChange}
          />
        </Box>
        <CardButtons
          edit={edit}
          handleSaveButton={handleSaveButton}
          handleCancelButton={handleCancelButton}
          handleEditButton={handleEditButton}
          disableButton={readOnly}
        />
      </Box>
    </Grid>
  );
};

export default Card;
