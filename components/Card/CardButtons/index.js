import React from "react";
import { Box, Button } from "@mui/material";
import { TfiSave } from "react-icons/tfi";
import { BsBoxArrowInUpLeft } from "react-icons/bs";
import { TiEdit } from "react-icons/ti";

const CardButtons = ({
  edit,
  handleSaveButton,
  handleCancelButton,
  handleEditButton,
  disableButton,
}) => {
  return (
    <>
      {edit ? (
        <Box>
          <Button sx={{ display: "flex" }} onClick={handleSaveButton}>
            <TfiSave size={40} />
          </Button>
          <Button sx={{ display: "flex" }} onClick={handleCancelButton}>
            <BsBoxArrowInUpLeft size={40} />
          </Button>
        </Box>
      ) : (
        <Button
          sx={{ alignSelf: "center" }}
          onClick={handleEditButton}
          disabled={disableButton}
        >
          <TiEdit size={40} />
        </Button>
      )}
    </>
  );
};

export default CardButtons;
