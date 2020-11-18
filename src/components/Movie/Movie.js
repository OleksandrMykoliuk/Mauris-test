import React from 'react';
import PropTypes from 'prop-types';
import './Movie.scss';

export const Movie = ({ movie }) => (
  <div
    key={movie.id}
    className="Movie"
  >
    <div className="Movie__image-container">
      <img
        src={movie.image.medium}
        alt={movie.name}
        className="Movie__image"
      />
    </div>
    <div className="Movie__description">
      <p className="Movie__name">
        {movie.name}
      </p>
      <p className="Movie__year">
        {movie.show.premiered.slice(0, 4)}
      </p>
      <span className="Movie__season">
        {`Сезон : ${movie.season}, серия : ${movie.number}`}
      </span>
    </div>
  </div>
);

Movie.propTypes = {
  movie: PropTypes.objectOf(PropTypes.string).isRequired,
};
