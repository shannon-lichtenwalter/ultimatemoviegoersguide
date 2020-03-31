import config from '../config';

const GetMovieLists = {
  nowPlaying() {
    return fetch(`${config.API_ENDPOINT}now_playing?api_key=${config.API_KEY}&language=en-US/`, {
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