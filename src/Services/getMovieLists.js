import config from '../config';

const GetMovieLists = {
  getList(type) {
    return fetch(`${config.API_ENDPOINT}movie/${type}?api_key=${config.API_KEY}&language=en-US/`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
  )
  },

  searchFilms(name){
    return fetch(`${config.API_ENDPOINT}search/movie?api_key=${config.API_KEY}&query=${name}&language=en-US&include_adult=false`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
  )
  },

};

export default GetMovieLists;