import React from "react";
import { TextField } from "@mui/material";

const CardHeader = (props) => {
  return (
    <TextField
      id="header"
      variant="outlined"
      size="small"
      value={props.header}
      disabled={props.disabled}
      onChange={props.handleHeaderChange}
    />
  );
};

export default CardHeader; // it can only export one as default.  But can 'export const ...'
