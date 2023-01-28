import React from "react";
import { TextField } from "@mui/material";

type TProps = {
  header: string;
  disabled: boolean;
  handleHeaderChange: (arg0: React.ChangeEvent<HTMLInputElement>) => void;
};

const CardHeader = (props: TProps) => {
  return (
    <TextField
      fullWidth
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
