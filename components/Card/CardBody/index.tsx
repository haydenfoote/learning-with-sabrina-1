import React from "react";
import { TextField, Typography } from "@mui/material";

type TProps = {
  body: string;
  disabled: boolean;
  handleBodyChange: (arg0: React.ChangeEvent<HTMLInputElement>) => void;
};

const CardBody = (props: TProps) => {
  return (
    <>
      <Typography variant="h6">Cardbody component</Typography>
      <TextField
        multiline
        rows={4}
        id="body"
        variant="standard"
        value={props.body}
        disabled={props.disabled}
        onChange={props.handleBodyChange}
      />
    </>
  );
};

export default CardBody;
