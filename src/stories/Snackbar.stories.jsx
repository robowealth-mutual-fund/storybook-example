import React from 'react';
import {SimpleSnackbar} from '../components/snackbar/Snackbar'

export default {
title: 'Example/Snackbar',
component: SimpleSnackbar,
argTypes: {
    vertical: { control: 'inline-radio', options: ['top', 'bottom']}, 
    horizontal: { control: 'inline-radio', options: ['left', 'right', 'center']}, 
    onClick: { action: 'clicked' }
  },
};
const Template = (args) => <SimpleSnackbar {...args} />;
export const Basic = Template.bind({});
