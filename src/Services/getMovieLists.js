import config from '../config';

const GetMovieLists = {
  getList(type) {
    return fetch(`${config.API_ENDPOINT}${type}?api_key=${config.API_KEY}&language=en-US/`, {
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

  popular(){
    return fetch(`${config.API_ENDPOINT}popular?api_key=${config.API_KEY}&language=en-US/`, {
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

  topRated(){
    return fetch(`${config.API_ENDPOINT}top_rated?api_key=${config.API_KEY}&language=en-US/`, {
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
  }
};

export default GetMovieLists;