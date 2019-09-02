import React from 'react';
import { TextField } from '@material-ui/core';

// field: { name, value, onChange, onBlur }
const FormikTextField = ({ field, ...props }) => {
  if (field.value === undefined) {
    field.value = '';
  }
  return (
    <TextField
      InputLabelProps={{
        shrink: true
      }}
      {...field}
      {...props}
      label={field.name}
      margin="normal"
      variant="filled"
      autoFocus
      error={!!props.error}
    />
  );
};

export default FormikTextField;
