import React, { useState, useCallback } from 'react';
import { Select, MenuItem } from '@material-ui/core';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor};
  padding: 12px;
  color: #fff;
  min-width: 125px;
  border-radius: 8px;
  margin-right: 10px;

  &:hover {
    padding: 5px;
  }
`;

const DropDown = ({ options }) => {
  const [showSelect, setShowSelect] = useState(false);
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = useCallback(
    e => {
      setValue(e.target.value);
      setShowSelect(false);
    },
    [setValue, setShowSelect]
  );

  const handleClose = useCallback(() => {
    setOpen(false);
    setShowSelect(false);
  }, [setOpen, setShowSelect]);

  return (
    <Div
      onMouseEnter={() => setShowSelect(true)}
      onMouseLeave={() => setShowSelect(false)}
      bgColor={options[value].bgColor}
    >
      {showSelect ? (
        <Select
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
        </Select>
      ) : (
        options[value].text
      )}
    </Div>
  );
};

export default DropDown;
