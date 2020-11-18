/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import * as calendar from './CalendarAuxiliary';

import './Calendar.scss';

export const Calendar = ({ onChange }) => {
  const [date, setDate] = useState(new Date());

  const handlePrevMonthButtonClick = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() - 1);

    setDate(newDate);
  };

  const handleNextMonthButtonClick = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + 1);

    setDate(newDate);
  };

  const handleDayClick = (currentDate) => {
    onChange(currentDate);
  };

  const monthNames = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  const weekDayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  const monthData = calendar.getMonthData(date.getFullYear(), date.getMonth());

  return (
    <div className="Сalendar">
      <div className="Calendar__header">
        <button
          type="button"
          onClick={handlePrevMonthButtonClick}
          className="Calendar__button"
        >
          {'<'}
        </button>

        <span className="Calendar__title">
          {`${monthNames[date.getMonth()]} ${date.getFullYear()}`}
        </span>

        <button
          type="button"
          onClick={handleNextMonthButtonClick}
          className="Calendar__button"
        >
          {'>'}
        </button>
      </div>

      <table className="Calendar__table">
        <thead>
          <tr>
            {weekDayNames.map(name => (
              <th key={name} className="Calendar__th">
                {name}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {monthData.map(week => (
            <tr key={uuidv4()}>
              {week.map(currentDate => (currentDate
                ? (
                  <td
                    key={uuidv4()}
                    className="Calendar__day"
                    onClick={() => handleDayClick(currentDate)}
                  >
                    {currentDate.getDate()}
                  </td>
                )
                : <td key={uuidv4()} />))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Calendar.propTypes = {
  onChange: PropTypes.func.isRequired,
};
