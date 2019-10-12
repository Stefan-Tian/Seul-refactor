import React, { useState, useCallback } from 'react';
import { Select, MenuItem } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor};
  height: 42px;
  color: #fff;
  min-width: 125px;
  border-radius: 8px;
  margin-right: 10px;

  &:hover {
    padding: 5px;
  }
`;

const CustomSelect = styled(Select)`
  && {
    min-width: 40%;
  }
  &&.MuiInput-underline::before {
    width: 85%;
    border-width: 2px;
    border-color: ${grey[300]};
  }
  && > .MuiInputBase-input {
    padding: 3px 25px 3px 3px;
    color: #fff;
    font-size: 14px;
  }
`;

const DropDown = ({ type, options, defaultVal, handleUpdate }) => {
  const [showSelect, setShowSelect] = useState(false);
  const [value, setValue] = useState(
    !defaultVal && defaultVal !== 0 ? -1 : defaultVal
  );
  const [open, setOpen] = useState(false);

  const handleChange = useCallback(
    e => {
      setValue(e.target.value);
      handleUpdate(type, e.target.value);
      setShowSelect(false);
    },
    [setValue, type, handleUpdate, setShowSelect]
  );

  const handleClose = useCallback(() => {
    setOpen(false);
    setShowSelect(false);
  }, [setOpen, setShowSelect]);

  const bgColor = value !== -1 ? options[value].bgColor : grey[500];
  const text = value !== -1 ? options[value].text : '--';

  return (
    <Div
      onMouseEnter={() => setShowSelect(true)}
      onMouseLeave={() => setShowSelect(false)}
      bgColor={bgColor}
    >
      {showSelect ? (
        <CustomSelect
          open={open}
          onClose={handleClose}
          onOpen={() => setOpen(true)}
          value={value}
          onChange={handleChange}
        >
          {options.map((option, idx) => (
            <MenuItem key={option.text} value={idx}>
              {option.text}
            </MenuItem>
          ))}
        </CustomSelect>
      ) : (
        text
      )}
    </Div>
  );
};

export default DropDown;
