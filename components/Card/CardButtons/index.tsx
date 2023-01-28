import React, { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import { TfiSave } from "react-icons/tfi";
import { BsBoxArrowInUpLeft } from "react-icons/bs";
import { TiEdit } from "react-icons/ti";

interface IProps {
  edit: boolean;
  handleSaveButton: () => void;
  handleCancelButton: () => void;
  handleEditButton: () => void;
  disableButton: boolean;
}

const CardButtons: FC<IProps> = ({
  edit,
  handleSaveButton,
  handleCancelButton,
  handleEditButton,
  disableButton,
}) => {
  return (
    <>
      {edit ? (
        <>
          <Typography variant="h6">
            Either display or not depending on disableButton
          </Typography>
          <Box sx={{ display: "flex", gap: "15px", justifyContent: "center" }}>
            <Button onClick={handleSaveButton}>
              <TfiSave size={35} />
            </Button>
            <Button onClick={handleCancelButton}>
              <BsBoxArrowInUpLeft size={40} />
            </Button>
          </Box>
        </>
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
