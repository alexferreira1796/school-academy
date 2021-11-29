import Input from 'components/Forms/Input';
import React from 'react';
import { maskHoursInput } from '../../utils/formatHours';

const HoursInput = ({ ...props }) => {
  return (
    <Input type="text" {...props} onKeyUp={maskHoursInput} maxLength={6} />
  );
};

export default HoursInput;
