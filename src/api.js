const BASE_URL = 'https://api.tvmaze.com/schedule?country=US&date=';

export const fetchList = date => fetch(`${BASE_URL}${date}`)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Can't get info from server`);
    } else {
      return res.json();
    }
  })
  .then(json => json.filter(movie => movie.id
    && movie.image
    && movie.show.premiered
    && movie.season
    && movie.number));
