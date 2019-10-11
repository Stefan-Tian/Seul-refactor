import React, { useState, useCallback } from 'react';
import { indigo } from '@material-ui/core/colors';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import styled from 'styled-components';

const DateContainer = styled.div`
  background-color: ${indigo[400]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  color: #fff;
  width: 145px;
  border-radius: 8px;
  margin-right: 10px;
  position: relative;
`;

const DatePickerPositioner = styled.div`
  position: absolute;
  bottom: -10px;
`;

const DatePicker = () => {
  const [edit, setEdit] = useState(false);
  const [startDate, setstartDate] = useState(moment());
  const [endDate, setendDate] = useState(moment().add(1, 'days'));
  const [focused, setFocused] = useState('endDate');

  const handleDateChange = useCallback(
    ({ startDate, endDate }) => {
      setstartDate(startDate);
      setendDate(endDate);
    },
    [setstartDate, setendDate]
  );

  return (
    <DateContainer
      onMouseEnter={() => setEdit(true)}
      onMouseLeave={() => setEdit(false)}
    >
      {edit ? (
        <DatePickerPositioner>
          <DateRangePicker
            startDate={startDate}
            startDateId="^&*^$2"
            endDate={endDate}
            endDateId="#@$@$"
            onDatesChange={handleDateChange}
            focusedInput={focused}
            onFocusChange={focusedInput => setFocused(focusedInput)}
            onClose={() => setEdit(false)}
          />
        </DatePickerPositioner>
      ) : (
        <div>
          {startDate.format('MMM D')} - {endDate.format('MMM D')}
        </div>
      )}
    </DateContainer>
  );
};

export default DatePicker;
