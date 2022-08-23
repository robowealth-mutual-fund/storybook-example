import React from 'react';
import { TextField } from '@mui/material';

export default {
  component: TextField,
  title: 'Material/TextField',
  argTypes: {
    disabled: { type: 'boolean' },
    fullWidth: { type: 'boolean' },
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: {
        type: 'inline-radio',
      },
    },
    color: {
      options: ['default', 'inherit', 'primary', 'secondary'],
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args) => {
  return <TextField {...args} />;
};

export const MuiTextField = Template.bind({});
MuiTextField.args = {
  variant: 'outlined',
  color: 'primary',
  placeholder: 'Text Field',
};
