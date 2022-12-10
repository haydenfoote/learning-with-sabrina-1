import React from "react";
import { TextField } from "@mui/material";

const CardBody = (props) => {
  return (
    <TextField
      id="body"
      variant="standard"
      value={props.body}
      disabled={props.disabled}
      onChange={props.handleBodyChange}
    />
  );
};

export default CardBody;
