import { Button, Container } from '@mui/material';
import React from 'react';

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
  return (
    <Container>
      <Button {...args}>Hello world</Button>
    </Container>
  );
};

/**
 * Hello from the docs
 */
export const SomeNameYouLike = Template.bind({});
SomeNameYouLike.args = {
  variant: 'contained',
  color: 'primary',
};
