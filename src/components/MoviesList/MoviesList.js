
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import Loader from 'react-loader-spinner';
import { fetchList } from '../../api';
import { Movie } from '../Movie/Movie';

export const MoviesList = ({ date }) => {
  const [list, setList] = useState(null);

  useEffect(() => {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (String(month).length === 1) {
      const newMonth = `0${month}`;

      month = newMonth;
    }

    if (String(day).length === 1) {
      const newDay = `0${day}`;

      day = newDay;
    }

    const urlDate = `${year}-${month}-${day}`;

    fetchList(urlDate).then((json) => {
      setList(json);
    });
  }, []);

  return list ? (
    <>
      <div className="MoviesList">
        <span className="MoviesList__date">
          {date.toLocaleDateString()}
        </span>
        <hr />
        {list.map(movie => (
          <Movie movie={movie} />
        ))}
      </div>
    </>
  )
    : (
      <div className="MoviesList__loader">
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    );
};

MoviesList.propTypes = {
  date: PropTypes.string.isRequired,
};
