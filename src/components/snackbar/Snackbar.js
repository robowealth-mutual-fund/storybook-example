import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

export const SimpleSnackbar = (props) => {
console.log("🚀 ~ file: Snackbar.js ~ line 7 ~ SimpleSnackbar ~ props", props)

  // const { vertical, horizontal, open } = props;

  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;


  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };


  return (
    <>
      <Button
        onClick={handleClick({
          vertical: props.vertical,
          horizontal: props.horizontal,
        })}
      >
        Show Snackbar
      </Button>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="This is Snackbar"
        key={vertical + horizontal}
      />
    </>
  );
}
