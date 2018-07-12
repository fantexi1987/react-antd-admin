import fetch from '../utils/fetch';

export function randomUser(config) {
  if(config){
    config.results = config.results || 10;
  }
  return fetch({
    url: '/randomUser/api',
    method: 'get',
    params: config
  })
}
