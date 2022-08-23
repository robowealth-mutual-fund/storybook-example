import React from 'react';
import CurrencyTextField from './CurrencyTextField';

export default {
  component: CurrencyTextField,
  title: 'Material/CurrencyTextField',
  argTypes: {
    disabled: { type: 'boolean' },
    variant: {
      options: ['standard', 'outlined'],
      control: {
        type: 'inline-radio',
      },
    },
  },
};

const Template = (args) => {
  return <CurrencyTextField {...args} />;
};

export const SomeName = Template.bind({});
SomeName.args = {
  label: 'Currency',
  variant: 'outlined',
  currencySymbol: '฿',
  minimumValue: '0',
  outputFormat: 'string',
  decimalCharacter: '.',
  digitGroupSeparator: ',',
  onChange: () => {},
};
