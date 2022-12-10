import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Checkbox, FormControlLabel } from '@mui/material';
import { color, palette } from '@mui/system';
import { FaEdit } from 'react-icons/fa';
import { AiOutlineSave } from 'react-icons/ai';
import { RiArrowGoBackLine } from 'react-icons/ri';

const Card = () => {
  const [checked, setChecked] = useState(false);
  const [header, setHeader] = useState('header');
  const [body, setBody] = useState('Body');
  const [oldHeader, setOldHeader] = useState(header);
  const [oldBody, setOldBody] = useState(body);
  const [disabled, setDisabled] = useState(true);
  const [edit, setEdit] = useState(false);

  const handleEditButton = () => {
    setDisabled(false);
    setEdit(true);
    setChecked(false);
  };
  const handleButtons = () => {
    setDisabled(true);
    setEdit(false);
  };

  const handleSaveButton = () => {
    setOldHeader(header);
    setOldBody(body);
  };
  const handleCancelButton = () => {
    setHeader(oldHeader);
    setBody(oldBody);
  };
  const handleHeaderChange = (e) => {
    setHeader(e.target.value);
  };
  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  return (
    <Box
      sx={{
        p: '10px',
        border: '2px solid black',
        width: '200px',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: checked ? 'teal' : 'white',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <TextField
          id='header'
          variant='standard'
          value={header}
          disabled={disabled}
          onChange={handleHeaderChange}
        />
        <TextField
          id='body'
          variant='standard'
          value={body}
          disabled={disabled}
          onChange={handleBodyChange}
        />
        {edit ? (
          <Box
            sx={{ display: 'flex', justifyContent: 'space-around' }}
            onClick={handleButtons}
          >
            <Button onClick={handleCancelButton}>
              <RiArrowGoBackLine size={20} />
            </Button>
            <Button onClick={handleSaveButton}>
              <AiOutlineSave size={20} />
            </Button>
          </Box>
        ) : (
          <Button sx={{ alignSelf: 'center' }} onClick={handleEditButton}>
            <FaEdit size={20} />
          </Button>
        )}
      </Box>
      {!edit && (
        <Box>
          <Checkbox onClick={() => setChecked(!checked)} />
        </Box>
      )}
    </Box>
  );
};

export default Card;
