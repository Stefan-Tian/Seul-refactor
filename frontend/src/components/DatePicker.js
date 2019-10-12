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
  width: 185px;
  border-radius: 8px;
  margin-right: 10px;
  position: relative;
  height: 42px;
  font-size: 12px;
`;

const DatePickerPositioner = styled.div`
  position: absolute;
  z-index: 10;

  .DateRangePicker {
    border-radius: 8px;

    .DateRangePickerInput {
      border: 0;
      box-shadow: 0 10px 27px -5px rgba(50, 50, 93, 0.25);
      display: flex;
      align-items: center;
      background-color: ${indigo[400]};

      /* .DateInput {
        width: 106px;
      } */

      &__withBorder {
        border-radius: 8px;
      }

      .DateRangePicker_picker {
        top: 42px !important;

        .DayPicker__withBorder {
          box-shadow: 0 10px 27px -5px rgba(50, 50, 93, 0.25);
        }
      }

      .DateInput {
        width: 100%;
        background-color: ${indigo[400]};

        .DateInput_input {
          font-size: 12px;
          width: 70px;
          padding: 0px;
          background-color: ${indigo[400]};
          color: #fff;
          border: 0;

          &:first-of-type {
            transform: translateX(5px);
          }

          &__focused {
            background-color: ${indigo[400]};
            border: 0;
            font-weight: bold;

            ${({ focused }) =>
              focused === 'startDate' &&
              `
              transform: translateX(5px);
            `}
          }
        }

        .DateInput_fang {
          display: none;
        }
      }

      .DateRangePickerInput_arrow_svg {
        width: 10px;
        height: 10px;
        fill: white;
        transform: translate(-2px, -1.5px);
        margin-right: 4px;
        margin-left: 4px;
      }
    }
  }
`;

const DatePicker = props => {
  const [edit, setEdit] = useState(false);
  const [startDate, setstartDate] = useState(moment(props.startDate));
  const [endDate, setendDate] = useState(moment(props.endDate));
  const [focused, setFocused] = useState('startDate');

  const handleDateChange = useCallback(
    ({ startDate, endDate }) => {
      setstartDate(startDate);
      setendDate(endDate);
    },
    [setstartDate, setendDate]
  );

  const handleDateSubmit = useCallback(
    ({ startDate, endDate }) => {
      setEdit(false);
      setFocused('startDate');
      props.handleUpdate('date', { startDate, endDate });
    },
    [props]
  );

  return (
    <DateContainer onClick={() => setEdit(true)}>
      {edit ? (
        <DatePickerPositioner focused={focused}>
          <DateRangePicker
            startDate={startDate}
            startDateId="^&*^$2"
            endDate={endDate}
            endDateId="#@$@$"
            onDatesChange={handleDateChange}
            focusedInput={focused}
            onFocusChange={focusedInput => setFocused(focusedInput)}
            onClose={handleDateSubmit}
          />
        </DatePickerPositioner>
      ) : (
        <span>
          {startDate.format('MM/DD/YYYY')} - {endDate.format('MM/DD/YYYY')}
        </span>
      )}
    </DateContainer>
  );
};

export default DatePicker;
