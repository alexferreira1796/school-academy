import React from 'react';

const removeSpecialCharacters = (char: string | undefined) => {
  if (char !== undefined) return char.replace(/:/g, '');
};

const formatHours = (hours: string | undefined) => {
  if (hours !== undefined) {
    hours = String(hours)
      .replace(/\D/g, '')
      .replace(/(\d{1})(\d{1})(\d{1})(\d{1})?$/, '$1$2:$3$4');
    return hours;
  }
};

const maskHours = (value: string | number) => {
  value = String(value).replace(/\D/g, '');
  let tam = value.length;

  if (tam <= 2) {
    value = value.replace(/(\d)(\d{1})/, '$1:$2');
  } else if (tam <= 3) {
    value = value.replace(/(\d{2})(\d{1})/, '$1:$2');
  } else if (tam <= 4) {
    value = value.replace(/(\d{2})(\d{2})/, '$1:$2');
  } else {
    value = value.replace(/(\d{3})(\d{2})/, '$1:$2');
  }
  return value;
};

const maskHoursInput = (e: React.FormEvent<HTMLInputElement>) => {
  let value = e.currentTarget.value;
  e.currentTarget.value = maskHours(value);
  return e;
};

export { removeSpecialCharacters, formatHours, maskHours, maskHoursInput };
