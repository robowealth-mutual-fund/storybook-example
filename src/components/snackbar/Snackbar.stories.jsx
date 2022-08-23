import React from 'react';
import SimpleSnackbar from './Snackbar'

export default {
title: 'Material/Snackbar',
component: SimpleSnackbar,
argTypes: {
    vertical: { control: 'inline-radio', options: ['top', 'bottom']}, 
    horizontal: { control: 'inline-radio', options: ['left', 'right', 'center']}, 
  },
};
const Template = (args) => <SimpleSnackbar {...args} />;
export const Basic = Template.bind({});
Basic.args = {
  vertical: 'top',
  horizontal: 'center',
};