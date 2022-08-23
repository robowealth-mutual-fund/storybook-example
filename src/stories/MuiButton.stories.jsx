import React from 'react';
import { Button } from '@mui/material';

export default {
  component: Button,
  title: 'Material/Button',
  argTypes: {
    disabled: { type: 'boolean' },
    disableElevation: { type: 'boolean' },
    disableFocusRipple: { type: 'boolean' },
    fullWidth: { type: 'boolean' },
    href: { type: 'string' },
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
  return <Button {...args}>Hello world</Button>;
};

export const MuiButton = Template.bind({});
MuiButton.args = {
  variant: 'contained',
  color: 'primary',
};
