import React, { useState, useEffect, FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Checkbox } from "@mui/material";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardButtons from "./CardButtons";
import { checkCard, uncheckCard } from "../../store/cardslice";
import { useAppSelector, useAppDispatch } from "../../store";

interface IProps {
  origHeader: string;
  origBody: string;
  id: string;
}

const Card: FC<IProps> = ({ origHeader, origBody, id }) => {
  const { isReadOnly, checkedCards } = useAppSelector(
    (state) => state.cardsInfo
  );
  const dispatch = useAppDispatch();
  // const { readOnly, setCheckedCard, setUncheckedCard, checkedCards } = useCardData();
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
  const handleHeaderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeader(e.target.value);
  };
  // (e: React.ChangeEvent<HTMLInputElement>) => void
  const handleCheckBoxClick = () => {
    setChecked(!checked);
  };

  // handleBodyChange takes the event from the onChange property in the text field ...
  // ... and updates the state of the body state.
  const handleBodyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody(e.target.value);
  };

  useEffect(() => {
    if (checked) {
      dispatch(checkCard(id)); // dispatch is accessing store functions/reducers ... selector accesses state
    } else {
      dispatch(uncheckCard(id));
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
  }, [isReadOnly]);

  return (
    <Grid sx={{ width: "500px", padding: "15px" }}>
      <Typography variant="h5">Card Component</Typography>
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
                disabled={isReadOnly}
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
          disableButton={isReadOnly}
        />
      </Box>
    </Grid>
  );
};

export default Card;
