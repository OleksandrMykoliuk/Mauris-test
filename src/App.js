import React, { useState } from 'react';
import './App.scss';
import { Calendar } from './components/Calendar/Calendar';
import { MoviesList } from './components/MoviesList/MoviesList';

const App = () => {
  const [date, setDate] = useState(null);

  const handleDateChange = newDate => setDate(newDate);

  return (
    <div className="App">
      <div className="App__header">
        {date && (
          <button
            type="button"
            onClick={() => handleDateChange(null)}
            className="App__button"
          >
            {'<'}
          </button>
        )}
        <p className="App__title">
          SUPER FILM
        </p>
      </div>
      {!date && (
        <>
          <div className="App__description">
            <img
              src="tv.png"
              alt="background tv"
              className="App__image"
            />
          </div>
          <p className="App__text">
            Для получения списка сериалов, пожалуйста,
            выберите необходимый месяц и день.
          </p>
          <Calendar
            onChange={handleDateChange}
          />
        </>
      )}
      {date && (
        <MoviesList
          date={date}
        />
      )}
    </div>
  );
};

export default App;
