import React from "react";
import { Box, Typography } from "@mui/material";
import { Checkbox, FormControlLabel } from "@mui/material";
import { color, palette } from "@mui/system";

const Card = () => {
  return (
    <Box sx={{ p: 10, border: "2px solid black" }}>
      <Typography>header</Typography>
      <Typography>body</Typography>
      <Box sx={{ bgcolor: "#757ce8" }}>
        <FormControlLabel
          label="Select me and I will change colour"
          control={<Checkbox />}
        />
      </Box>
    </Box>
  );
};

export default Card;
